import { Router } from "express";

import {
    postLogin,
    postRegister,
    postRefresh,
    postLogout,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", postLogin);

router.post("/register", postRegister);

router.post("/refresh", postRefresh);

router.post("/logout", postLogout);

export default router;
