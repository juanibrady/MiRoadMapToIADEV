import express from "express"

const app = express()
const port = 3000

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// importando rutas
import productos from "./src/routes/productsroutes.js"

//seccion productos
app.use("/api", productos)


// indico cual carpeta es publica
app.use(express.static("./public"))


app.listen(port, ()=>console.log(`servidor corriendo en puerto ${port}`))

