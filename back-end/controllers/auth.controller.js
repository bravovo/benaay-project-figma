import { NODE_ENV } from "../config/env.js";
import User from "../models/User.model.js";
import {
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
} from "../utils/jwt.js";

import bcrypt from "bcrypt";

export async function postLogin(req, res, next) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const refreshToken = generateRefreshToken(email);
        const accessToken = generateAccessToken(email);

        if (!accessToken || !refreshToken) {
            throw new Error("Token generation failed");
        }

        res.cookie("token", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 7 * 1000,
            secure: NODE_ENV === "production",
            sameSite: "None",
        });

        return res.status(200).json({
            success: true,
            accessToken,
            user: {
                fullName: user.fullName,
                email: user.email,
            },
            message: "Login successful",
        });
    } catch (error) {
        return next(error);
    }
}

export async function postRegister(req, res, next) {
    try {
        const { fullName, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }

        if (password.trim().length < 8 || password.trim().length > 64) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must be from 8 to 64 characters long (without spaces)",
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        await user.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        return next(error);
    }
}

export async function postRefresh(req, res, next) {
    try {
        const refreshToken = req.cookies.token;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "No refresh token provided",
            });
        }

        // Verify refresh token
        const refreshResult = verifyToken(refreshToken, false);

        if (!refreshResult.valid) {
            return res.status(403).json({
                success: false,
                message: "Invalid or expired refresh token",
            });
        }

        // Generate new access token
        const newAccessToken = generateAccessToken(refreshResult.email);

        if (!newAccessToken) {
            console.error(
                "Failed to generate access token for user:",
                refreshResult.email
            );
            return res.status(500).json({
                success: false,
                message: "Failed to generate new access token",
            });
        }

        return res.status(200).json({
            success: true,
            accessToken: newAccessToken,
            message: "Token refreshed successfully",
        });
    } catch (error) {
        return next(error);
    }
}

export async function postLogout(req, res, next) {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: NODE_ENV === "production",
            sameSite: "None",
        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (error) {
        return next(error);
    }
}
