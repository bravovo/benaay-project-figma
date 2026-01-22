import express, { json, urlencoded } from "express";
import { NODE_ENV, PORT, CLIENT_ORIGIN } from "./config/env.js";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

import { connectDB } from "./config/database.js";
import cookieParser from "cookie-parser";

import mongoose from "mongoose";

const app = express();

connectDB();

app.use(
    cors({
        origin: CLIENT_ORIGIN,
        credentials: true,
    })
);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use((err, req, res, next) => {
    console.error(err);

    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({ message: err.message });
    }

    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`\n${NODE_ENV} environment`);
    console.log(`Server is running on http://localhost:${PORT}`);
});
