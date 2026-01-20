import User from "../models/User.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

import bcrypt from "bcrypt";

export function postLogin(req, res, next) {
    try {
        const { email, password } = req.body;

        const refreshToken = generateRefreshToken(email);
        const accessToken = generateAccessToken(email);

        if (!accessToken || !refreshToken) {
            throw new Error("Token generation failed");
        }

        return res.status(200).json({
            success: true,
            accessToken,
            refreshToken,
            email,
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
