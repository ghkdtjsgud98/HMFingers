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
router.get("/getFile", multipartMiddleware, (req, res) =>
  ctrl.output.getFile(req, res)
);
router.get("/getAudio", (req, res) =>
  ctrl.output.getAudio(req, res)
);
router.get("/getList", (req, res) => ctrl.output.getList(req, res));
router.get("/getTranslatedFile", (req, res) => ctrl.output.getTranslatedFile(req, res));

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post(
  "/uploadAudio",
  multipartMiddleware,
  async (req, res) => await ctrl.process.uploadAudio(req, res)
);
router.post(
  "/uploadTranslatedScript",
  async (req, res) => await ctrl.process.uploadTranslatedScript(req, res)
);
export default router;
