import {pool} from "../config/db.js"
import { getAllProducts,filterProductsmodel, addProductModel} from "../models/productsmodels.js"

const getProducts = async (req,res)=>{
    const rows = await getAllProducts()

    res.json(rows)
}

const filterProducts = async (req,res)=>{
    const rows = await filterProductsmodel(req)
    res.json(rows)}

const addProduct = async (req,res) => {
    const status = await addProductModel(req)
    if(status){
        return res.send("ok")
    }
    res.send("ocurrio un error")
}

const funciones = {getProducts,filterProducts, addProduct};

export default funciones