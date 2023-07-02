import { Router } from "express";
import {
  createResetSession,
  generateOTP,
  verifyOTP,
} from "../controllers/otp.js";
import localVariables from "../middleware/localVariables.js";
const router = Router();

router.route("/generate").get(localVariables, generateOTP);
router.route("/verify").get(verifyOTP);
router.route("/resetSession").post(createResetSession);

export default router;
