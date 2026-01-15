import express, { json, urlencoded } from "express";
import { NODE_ENV, PORT } from "./config/env.js";

import authRouter from "./routes/auth.route.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`\n${NODE_ENV} environment`);
    console.log(`Server is running on http://localhost:${PORT}`);
});
