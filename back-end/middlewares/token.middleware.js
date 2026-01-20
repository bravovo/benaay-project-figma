import { verifyToken, generateAccessToken } from "../utils/jwt.js";

export const checkUserAccess = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader && authHeader.split(" ")[1];

        if (!accessToken) {
            return res.status(401).json({ message: "No token provided" });
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
            const refreshToken = req.cookies.token;

            if (!refreshToken) {
                return res.status(401).json({ 
                    message: "Access token expired and no refresh token provided" 
                });
            }

            // Verify refresh token
            const refreshResult = verifyToken(refreshToken, false);

            if (!refreshResult.valid) {
                return res.status(403).json({ 
                    message: "Refresh token is invalid or expired" 
                });
            }

            // Generate new access token
            const newAccessToken = generateAccessToken(refreshResult.email);

            if (!newAccessToken) {
                return res.status(500).json({ 
                    message: "Failed to generate new access token" 
                });
            }

            // Attach new access token to response header for client to update
            res.setHeader("X-New-Access-Token", newAccessToken);

            // Set user and proceed with request
            req.user = refreshResult.email;
            return next();
        }

        // For any other error (invalid signature, malformed, etc.)
        return res.status(403).json({ 
            message: "Invalid access token" 
        });
    } catch (error) {
        next(error);
    }
};
