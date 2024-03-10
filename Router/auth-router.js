import express from "express";
const router = express.Router();
import { slash, register, login } from "../controllers/auth-controller.js";

router.route("/").get(slash);

router.route("/register").post(register);
router.route("/login").post(login);

export { router };
