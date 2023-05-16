import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "zara",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB connected!!");
  }
});

export default connection;