import { dbConfig } from "./config/database.js";
import mysql from "mysql";
import express from "express";
import bodyParser from "body-parser";
import home from "./src/routes/home/index.js";
import path from "path";
import cors from "cors";

//모듈
const app = express();
const __dirname = path.resolve();

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(cors());
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);

export default app;
