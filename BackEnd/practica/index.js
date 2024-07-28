import express from "express";
import router  from "./src/routes/adminRoutes.js";
import methodOverride from "method-override"

const app = express();
const port = process.env.PORT || 3000;

// Configuracion de ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Lectura de archivos JSON y Forms 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(methodOverride("_method"))

// Uso las rutas de admin
app.use(router);


app.listen(port, ()=>console.log("servidor corriendo en puerto "+port));