import { dbConfig } from './config/database.js'
import mysql from 'mysql'

var connection = mysql.createConnection(dbConfig)

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return
  }

  console.log('Connected to database.')
})

/** 테스트 쿼리 */
app.post('/users/register', function (req, res) {
  const userPW = req.body.userPwd;
  const userID = req.body.userName;
  const userPK = Math.round(Math.random() * 10000)

  // 삽입을 수행하는 sql문.
  var sql = 'INSERT INTO Users (id, password, user_pk) VALUES (?, ?, ?)';
  var params = [userID, userPW, userPK];
  
  // sql 문의 ?는 두번째 매개변수로 넘겨진 params의 값으로 치환된다.
  connection.query(sql, params, function (err, result) {
      // const 변수로 처리
      const resultCode = 404;
      const message = '에러가 발생했습니다';

      if (err) {
          console.log(err);
      } else {
          resultCode = 200;
          message = '회원가입에 성공했습니다.';
      }

      res.json({
          'code': resultCode,
          'message': message
      });
  });
});

connection.end()
