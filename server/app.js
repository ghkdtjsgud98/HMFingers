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

connection.end()
