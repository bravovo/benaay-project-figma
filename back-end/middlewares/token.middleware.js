import { verifyToken } from "../utils/jwt.js";

export const checkUserAccess = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = verifyToken(token, true);

        if (!decoded) {
            return res
                .status(403)
                .json({ message: "Invalid or expired token" });
        }

        req.user = decoded;

        next();
    } catch (error) {
        next(error);
    }
};
