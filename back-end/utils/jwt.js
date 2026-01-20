import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../config/env.js";

export function generateRefreshToken(email) {
    try {
        return jwt.sign({ email }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
    } catch (error) {
        return null;
    }
}

export function generateAccessToken(email) {
    try {
        return jwt.sign({ email }, ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
    } catch (error) {
        return null;
    }
}

export const verifyToken = (token, isAccess = false) => {
    try {
        const decoded = jwt.verify(
            token,
            isAccess ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET
        );

        if (decoded && decoded.email) {
            return { valid: true, email: decoded.email, error: null };
        }
        return { valid: false, email: null, error: "Invalid token payload" };
    } catch (error) {
        // Check if token is expired specifically
        if (error.name === "TokenExpiredError") {
            return { valid: false, email: null, error: "expired" };
        }
        return { valid: false, email: null, error: error.message };
    }
};
