import express from "express";
const router = express.Router();
import { slash, register, login } from "../controllers/auth-controller.js";
import { validate } from "../middlewares/validate-middleware.js";
import { signupchema } from "../validators/auth-validator.js";
import { loginschema } from "../validators/login-validator.js";

router.route("/").get(slash);

router.route("/register").post(validate(signupchema), register);
router.route("/login").post(validate(loginschema), login);

export { router };
