"use strict";
import mysql from "mysql";
import path from "path";
import { dbConfig } from "../../../config/database.js";
import { convertAudioToScript } from "../../../modules/speechToText/speechToTextApi.js";
import { translation } from "../../../modules/translation/translateApi.js";
import fs from "fs";

const __dirname = path.resolve();

const output = {
  home: (req, res) => {
    console.log("home");
    // res.render("home/index");
  },
  login: (req, res) => {
    console.log("login");
    // res.render("home/login");
  },
  register: (req, res) => {
    console.log("hi");
    // res.render("home/register");
  },
  getlist: (req, res) => {
    const connection = mysql.createConnection(dbConfig);
    const sql = `SELECT * from Scripts where user_pk = ${req.query.user_pk};`;
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      if (rows?.length > 0) {
        console.log(rows);
        return res.json({
          success: true,
          filelist: rows,
        });
      } else {
        return res.json({
          success: false,
          msg: "파일이 존재하지 않습니다.",
        });
      }
    });
  },

  getfile: (req, res) => {
    var connection = mysql.createConnection(dbConfig);
    var sql = `SELECT * from Scripts where script_id = '${req.body.script_id}';`;
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      if (rows?.length > 0) {
        fs.readFile(rows[0].path, "utf8", function (err, data) {
          console.log(data);
          return res.json({
            success: true,
            content: data,
          });
        });
      } else {
        return res.json({
          success: false,
          msg: "파일이 존재하지 않습니다.",
        });
      }
    });
  },
};

const process = {
  register: (req, res) => {
    var connection = mysql.createConnection(dbConfig);
    var sql = `SELECT * from Users where id = '${req.body.id}';`;
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      if (rows?.length > 0) {
        return res.json({
          success: false,
          msg: "이미 존재하는 아이디입니다.",
        });
      } else {
        sql = `INSERT INTO Users VALUES ('${req.body.id}','${
          req.body.psword
        }',${Math.floor(Math.random() * 10000)});`;
        connection.query(sql, function (err, rows, fields) {
          if (err) {
            console.log(err);
          } else {
            return res.json({
              success: true,
              msg: "회원가입에 성공했습니다.",
            });
          }
        });
      }
    });
  },
  login: (req, res) => {
    var connection = mysql.createConnection(dbConfig);
    var sql = `SELECT * from Users where id = '${req.body.id}' and password = '${req.body.psword}';`;
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      if (rows?.length > 0) {
        console.log(rows);
        return res.json({
          user_pk: rows[0].user_pk,
          success: true,
        });
      } else {
        console.log(req.body);
        return res.json({
          success: false,
          msg: "로그인에 실패했습니다.",
        });
      }
    });
  },
  uploadAudio: async (req, res) => {
    console.log("body: ", req.body, "files: ", req.files);
    const file = req.files?.file; //  '요청메세지'.'files'.'폼태그input name 키값'
    console.log(file.name); // 파일의 파일명, 확장자 확인
    console.log(file.type); // 파일의 타입 확인
    // don't forget to delete all req.files when done -> 확인 필요.
    const audioPath = file.path; // file.path;
    console.log(audioPath); // file.name에 확장자 포함인지 확인
    const result = await convertAudioToScript(
      audioPath,
      audioPath.substring(audioPath.length - 3, audioPath.length)
    );
    console.log(result);

    /* const pk = Math.floor(Math.random() * 10000);

    var connection = mysql.createConnection(dbConfig);
    var sql = `INSERT INTO Scripts VALUES (${pk},${req.body.user_pk},"${scriptPath}","${file.name}","${req.body.date}");INSERT INTO Audios VALUES (${pk},"${audioPath}","${file.name}","${req.body.date}",${req.body.user_pk});`;
    connection.query(sql, function (err, rows, fields){
      if (err) {
        console.log(err);
      }
      if (rows?.length > 0) {
        res.status(200).send("OK");
      } else {
        console.log(req.body);
        return res.json({
          success: false,
          msg: "업로드에 실패했습니다.",
        });
      }
    })*/
  },
};

export default { output, process };
