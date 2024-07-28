import { Router } from "express";

import funciones from "../controllers/productscontrollers.js"

const productos = Router()


productos.get("/productos", funciones.getProducts)

productos.get("/productos/filter",funciones.filterProducts )

productos.post("/productos", funciones.addProduct)

export default productos