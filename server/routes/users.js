import express from "express";
import { getUser, getUsers } from "../controllers/users.js";
import Auth from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(Auth, getUsers);
router.route("/:username").get(getUser);

export default router;
