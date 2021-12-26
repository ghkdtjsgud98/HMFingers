"use strict";
import mysql from "mysql";
import path from "path";
import _ from "lodash";
import { dbConfig } from "../../../config/database.js";
import { convertAudioToScript } from "../../../modules/speechToText/speechToTextApi.js";
import { getFileInstance } from "../../models/UserStorage.js";
import { translateScript } from "../../../modules/translation/translateApi.js";
import { getHashFileName } from "../../../common/stringUtils.js";
import { getLocalScriptToJson, storeLocalScript } from "../../../common/fileUtils.js";

const __dirname = path.resolve();
const connection = mysql.createConnection(dbConfig);

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
    const sql = `SELECT * from Scripts where script_id = '${req.query.script_id}';`;
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      if (rows?.length > 0) {
        const data = getLocalScriptToJson(rows[0].path);

          console.log('getFile data: ', data);
          return res.json({
            success: true,
            content: data,
          });
      } else {
        return res.json({
          success: false,
          msg: "파일이 존재하지 않습니다.",
        });
      }
    });
  },
  getTranslatedFile: (req, res) => {
    const { origin_script_id, nation_code } = req.query;

    connection.query(`SELECT path, nick_name, create_date from Translates where origin_script_id = ${origin_script_id} and nation_code = "${nation_code}"`,
      function (err, rows, fields) {
        if (err) {
          console.error(err)
          throw Error('query failed at getTranslatedFile')
        }

        if (_.isEmpty(rows)) {
          console.log(rows)
          return res.json({
            success: false,
            msg: "잘못된 origin script id 입니다.",
          });
        }

        if (rows?.length > 0) {
          const { path, nick_name, create_date } = rows[0];
          const data = getLocalScriptToJson(path);
          return res.json({
            success: true,
            content: {
              ...data,
              nick_name: nick_name,
              create_date: create_date,
            }
          });
        }
      }
    );
  },

  getaudio: (res, req) => {
    const sql = `SELECT * from Audios where script_id = '${req.query.script_id}';`;
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        const stat = fs.statSync(__dirname + rows[0].path);
        const fileSize = stat.size;
        const range = req.query.range; // req.headers.range 를 req.query.range 로 변경

        if (!range) {
          // 구간지정 안했을때
          const header = { "Content-Type": "audio/mpeg" };
          res.writeHead(200, header);
          res.end();
        } else {
          // 구간지정했을때(프로그레스바로 스킵했을때)
          const parts = range.replace(/bytes=/, "").split("-");
          const start = parseInt(parts[0], 10); // 시작 포인트
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1; // 끝 포인트
          const header = {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Type": "audio/mpeg",
            "Content-Length": fileSize,
          };
          res.writeHead(200, header);
          const readStream = fs.createReadStream(__dirname + rows[0].path);
          readStream.pipe(res);
        }
      }
    });
  },
};

const process = {
  register: (req, res) => {
    const sql = `SELECT * from Users where id = '${req.body.id}';`;
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
    const sql = `SELECT * from Users where id = '${req.body.id}' and password = '${req.body.psword}';`;
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
    if (req.files === undefined) {
      res.status(400); // bad request는 400번
    }

    const file = getFileInstance(req.files.file);
    const fileHashName = getHashFileName(file.path);
    const scriptPath = "/resources/" + fileHashName + "_script.json";

    // STT 수행
    const script = await convertAudioToScript(file.path, file.extension);
    // 결과를 local에 json으로 저장. 오디오 이름에 _script 붙임.
    storeLocalScript(scriptPath, script);

    const { user_pk = 2255, filename, date } = req.body;
    const pk = Math.floor(Math.random() * 10000);
    // audio insert 추가
    const sql =
      `INSERT INTO Scripts VALUES (${pk}, ${user_pk}, "${scriptPath}","${filename}","${date}");` +
      `INSERT INTO Audios VALUES (${pk},"${file.path}","${filename}","${date}",${user_pk});`;

    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err, req.body);
        return res.json({
          success: false,
          msg: "업로드에 실패했습니다.",
        });
      } else {
        return res.json({
          success: true,
          msg: "업로드 성공.",
        });
      }
    });
  },
  uploadTranslatedScript: async (req, res) => {
    const { nation_code, user_pk, nick_name, create_date, origin_script_id, data } = req.body
    const pk = Math.floor(Math.random() * 10000);
    const result = await translateScript(data, nation_code);
    const scriptPath = `/resources/${origin_script_id}_translated.json`;

    storeLocalScript(scriptPath, result);

    const sql = `INSERT INTO Translates VALUES (${pk}, "${nation_code}", ${user_pk}, "${scriptPath}", "${nick_name}", "${create_date}", ${origin_script_id});`

    connection.query(sql, function (err, rows, fields){
      if (err) {
        console.log(err, req.body);
        return res.json({
          success: false,
          msg: "업로드에 실패했습니다.",
        });
      } else {
        return res.json({
          success: true,
          msg: "업로드 성공.",
        });
      }
    });

  }
};

export default { output, process };
