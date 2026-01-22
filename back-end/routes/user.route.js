import { Router } from "express";

import { getUser } from "../controllers/user.controller.js";
import { checkUserAccess } from "../middlewares/token.middleware.js";

const router = Router();

router.use(checkUserAccess);

router.get("/profile", getUser);

export default router;
