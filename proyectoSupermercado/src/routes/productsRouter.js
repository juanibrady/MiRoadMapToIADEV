import { Router } from "express";
import { GETproductosDestacados, getAllProducts } from "../controllers/productsController.js";

const productsRouter = Router()

productsRouter.get("/home", GETproductosDestacados);
productsRouter.get("/products", getAllProducts)


export default productsRouter