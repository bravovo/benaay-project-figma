import { config } from "dotenv";

config({ path: ".env" });

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const MONGO_URI = process.env.MONGO_URI;
export const CLIENT_ORIGIN =
    process.env.CLIENT_ORIGIN || "http://localhost:5173";
