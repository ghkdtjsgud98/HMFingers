"use strict";
import express from "express";
import ctrl from "./home.ctrl.js";
const router = express.Router();

router.get("/login", ctrl.output.login);
router.get("/", ctrl.output.home);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

export default router;
