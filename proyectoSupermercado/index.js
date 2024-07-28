import express from "express"

// Variables de entorno
import "dotenv/config"

// importacion de rutas
import productsRouter from "./src/routes/productsRouter.js"
import usersRouter from "./src/routes/userRouter.js"

// Importo __dirname y path
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//Configuracion basica de la app
const app = express()
const port = process.env.PORT || 3001

//Configuracion de __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Configuracion de template engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src/views") )

// Uso de los router
app.use(productsRouter)
app.use(usersRouter)

// Archivos estaticos
app.use(express.static("public"))

// Correr servidor
app.listen(port,()=>console.log("servidor corriendo en puerto "+port))