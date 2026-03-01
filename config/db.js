import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  const connection = await db.getConnection();
  console.log("Connection established succesfully✅");
  connection.release();
} catch (error) {
  console.log("Error Occured❌", error);
  process.exit(1);
}
