"use strict";
import express from "express";
import multiparty from "connect-multiparty";
import ctrl from "./home.ctrl.js";

const router = express.Router();
const multipartMiddleware = multiparty({ uploadDir: './resource'})

router.get("/login", ctrl.output.login);
router.get("/", ctrl.output.home);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/uploadAudio", multipartMiddleware, async (req, res) => await ctrl.process.uploadAudio(req, res));
export default router;
