"use strict";
import express from "express";
import path from "path";
import multiparty from "connect-multiparty";
import ctrl from "./home.ctrl.js";

const router = express.Router();
const __dirname = path.resolve();
const multipartMiddleware = multiparty({ uploadDir: __dirname + "/resources" });

router.get("/login", ctrl.output.login);
router.get("/", ctrl.output.home);
router.get("/register", ctrl.output.register);
router.get("/getlist", (req, res) => ctrl.output.getlist(req, res));
router.get(
  "/getfile",
  multipartMiddleware,
  (req, res) => ctrl.output.getfile(req, res)
);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post(
  "/uploadAudio",
  multipartMiddleware,
  async (req, res) => await ctrl.process.uploadAudio(req, res)
);
export default router;
