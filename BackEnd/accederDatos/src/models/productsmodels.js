import e from "express"
import {pool} from "../config/db.js"
import { filterProductsservice, addProductService } from "../services/productsservices.js"

export const getAllProducts = async ()=>{
    try {
        let sql = "SELECT * FROM productos"

        const [rows] = await pool.query(sql)

        return rows
    } catch (error) {
        console.log("ocurrio un error en la base de datos: "+error)
    }
}

export const filterProductsmodel = async (req)=>{
    try {
        const sql = filterProductsservice(req)
        const [rows] = await pool.query(sql)
        return rows

    } catch (error) {
        console.log("ocurrio un error en la base de datos: "+error)
        return error
    }
}

export const addProductModel = async (req,res)=>{
    try {
        const [sql, data] = addProductService(req)
        await pool.query(sql, data)
        return true
    } catch (error) {
        console.log("a ocurrido un error por favor intente de nuevo "+ error )
        return false
    }
}
