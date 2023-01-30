import { Router } from "express";
import { signupController, getProfile } from "../controllers/auth.controller.js";
import { verifyToken } from "../libs/verifyToken.js";
const router = Router();
router.post("/signup", signupController);
router.get("/me", verifyToken, getProfile);
export default router;