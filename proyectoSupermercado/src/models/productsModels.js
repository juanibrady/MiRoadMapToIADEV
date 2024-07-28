import { pool } from "../config/db.js";

export const GETproductosDestacadosModel = async ()=>{
    try {
        const sql = "SELECT * FROM productos WHERE destacado = ?";
        const values = [true]
        const [rows] = await pool.query(sql, values);

        return rows
    } catch (error) {
        return {isError: true,error};
    }
};

export const getAllProductsModel= async()=>{
    try {
        const sql = "SELECT * FROM productos";
        const [rows] = await pool.query(sql);

        return {isError:false, rows}
    } catch (error) {
        return {isError:true, message:"A ocurrido un error interno del servidor", error}
    }
};