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
