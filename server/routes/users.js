import express from "express";
import { getUser, getUsers } from "../controllers/users.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:username").get(getUser);

export default router;
