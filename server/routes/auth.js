import express from "express";
import { register } from "../controllers/auth.js";
const router = express.Router();

router.route("/register").get(register);

export default router;
