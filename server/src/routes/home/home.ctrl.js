"use strict";
import mysql from "mysql";
import path from "path";
import { dbConfig } from "../../../config/database.js";
import { convertAudioToScript } from "../../../modules/speechToText/speechToTextApi.js";

const __dirname = path.resolve()

const output = {
  home: (req, res) => {

	 console.log('home');
   // res.render("home/index");
  },
  login: (req, res) => {
	  console.log('login');
   // res.render("home/login");
  },
  register: (req, res) => {
    console.log('hi');
   // res.render("home/register");
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
      if (rows.length > 0) {
        return res.json({
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
    console.log('body: ', req.body, 'files: ', req.files);
    const file = req.files?.file; //  '요청메세지'.'files'.'폼태그input name 키값' 
    console.log(file.name); // 파일의 파일명, 확장자 확인
    console.log(file.type); // 파일의 타입 확인
    // don't forget to delete all req.files when done -> 확인 필요.
    const audioPath = __dirname + '/resources/' + file.name; // __dirname + '/modules/speechToText/' + 'testFile.wav';
    console.log(audioPath); // file.name에 확장자 포함인지 확인
    console.log(req);
    const result = await convertAudioToScript(audioPath, audioPath.substring(audioPath.length - 3, audioPath.length));
    console.log(result);
    res.status(200).send('OK')
  }
};

export default { output, process };
