import { verifyToken, generateAccessToken } from "../utils/jwt.js";

export const checkUserAccess = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader && authHeader.split(" ")[1];

        if (!accessToken) {
            return res
                .status(401)
                .json({ success: false, message: "No token provided" });
        }

        // Verify access token
        const accessResult = verifyToken(accessToken, true);

        // If access token is valid, proceed with request
        if (accessResult.valid) {
            req.user = accessResult.email;
            return next();
        }

        // If access token is expired, try to refresh using refresh token
        if (accessResult.error === "expired") {
            console.log("Access token expired, attempting to refresh...");
            const refreshToken = req.cookies.token;

            if (!refreshToken) {
                console.log("No refresh token provided");
                return res.status(401).json({
                    success: false,
                    message: "Authentication required",
                });
            }

            // Verify refresh token
            const refreshResult = verifyToken(refreshToken, false);

            if (!refreshResult.valid) {
                return res.status(403).json({
                    success: false,
                    message: "Authentication required",
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
                    message: "Authentication failed",
                });
            }

            // Set user and proceed with request
            req.user = refreshResult.email;
            req.newToken = newAccessToken;
            return next();
        }

        // For any other error (invalid signature, malformed, etc.)
        return res.status(403).json({
            success: false,
            message: "Invalid access token",
        });
    } catch (error) {
        next(error);
    }
};
