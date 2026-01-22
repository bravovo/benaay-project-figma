import User from "../models/User.model.js";

export const getUser = async (req, res, next) => {
    try {
        console.log("Fetching user profile for:", req.user);
        const userEmail = req.user;

        const user = await User.findOne({ email: userEmail }).select(
            "-password"
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            success: true,
            user,
            token: req.newToken || null,
        });
    } catch (error) {
        next(error);
    }
};
