import { GETproductosDestacadosModel, getAllProductsModel } from "../models/productsModels.js"

export const GETproductosDestacadosService = async ()=>{
    try {
        const data = await GETproductosDestacadosModel();
        if (data.isError) {
            throw new Error(data.error);
        }
        return {
            isError: false,
            data
        };
    } catch (error) {
        return {
            isError: true,
            message: 'Error al obtener productos destacados',
            error: error.message
        };
    }
}

export const getAllProductsService = async ()=>{
    try {
        const data = await getAllProductsModel();

        if(data.isError){
            throw new Error(data.error);
        }
        return data
    } catch (error) {
        return {
            isError: true,
            message: 'Error al obtener productos destacados',
            error: error.message
        };
    }
}