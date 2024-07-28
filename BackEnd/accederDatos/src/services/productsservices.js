export const filterProductsservice = (req)=>{
    let sql = "SELECT * FROM productos"
        let whereClause =""

        const {nombre_producto, precio_minimo,precio_maximo,rubro,orden_producto} = req.query

        if(nombre_producto){whereClause+=` nombre like "${nombre_producto}%" AND`}
        if(precio_minimo){whereClause+= ` precio >= ${parseInt(precio_minimo)} AND`}
        if(precio_maximo){whereClause+=` precio<= ${parseInt(precio_maximo)} AND`}
        if(rubro && rubro!=="Cualquiera"){whereClause+=` rubro = "${rubro}" AND`}
        if(whereClause!==""){sql+=" WHERE"+whereClause.slice(0,-3)}
        if(orden_producto){sql+=` ORDER BY precio ${orden_producto}`}

    return sql
}

export const addProductService =(req)=>{
    const sql = "INSERT INTO productos VALUES(nombre,rubro,precio,descripcion) VALUES (?,?,?,?) "
    const data = []
    const {nombre,rubro,precio,des } = req.body
    if(nombre&&rubro&&precio&&des){
        data.push(nombre,rubro,precio,des)}

    return [sql,data]
}