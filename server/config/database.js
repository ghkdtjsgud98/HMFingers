/** RDS에 접근하기 위한 인스턴스 정보가 존재하는 파일 */

import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "hmFingers",
  multipleStatements: true,
};
