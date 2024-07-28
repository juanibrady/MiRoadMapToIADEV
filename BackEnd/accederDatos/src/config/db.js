import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"productossupermercado",
    waitForConnections:true,
    connectionLimit:5
});