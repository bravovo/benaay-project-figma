import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

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
