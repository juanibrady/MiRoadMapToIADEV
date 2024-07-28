import { GETproductosDestacadosService, getAllProductsService } from "../services/productsServices.js"


export const GETproductosDestacados = async (req,res)=>{
    try {
        let data = await GETproductosDestacadosService();
        if (!data.isError) {
            res.render('home', {productos:data.data});
        } else {
            res.status(500).json({ message: 'Error al obtener productos destacados', error: data.error });
        }
    } catch (error) {
        console.error('Error al obtener productos destacados:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export const getAllProducts = async (req,res)=>{
    try {
        const data = await getAllProductsService()
        if(data.isError){
            return res.status(500).json({ message: 'Error al obtener productos destacados', error: data.error });
        }
        console.log(data)
        res.render("products", {products:data.rows})
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}