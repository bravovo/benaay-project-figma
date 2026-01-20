import express, { json, urlencoded } from "express";
import { NODE_ENV, PORT } from "./config/env.js";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import { connectDB } from "./config/database.js";

import mongoose from "mongoose";

const app = express();

connectDB();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

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
