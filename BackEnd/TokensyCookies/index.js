import express from "express"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import bcrypt from "bcrypt"

const port = 3000
const app = express()

const usuarios = []

const secretKey = "llavesecreta"
// middlewares
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// declaro archivos publicos
app.use(express.static("public"))

// creo verificador de token 

const verificarToken = (req,res,next)=>{
    const token = req.cookies.token
    try {
        const decoded = jwt.verify(token,secretKey)
        req.decoded = decoded
        next()
    } catch (error) {
        res.status(404).send("No admitido")
    }
}

app.post("/login",(req,res)=>{
    const{usuario, contraseña}=req.body
    if(usuario=="admin" && contraseña=="pepe"){
        
    }
    res.send("error al iniciar sesion")
})

app.get("/admin",verificarToken,(req,res)=>{
    if(req.decoded.rol="admin"){
        return res.send("hola " +req.decoded.usuario)
    }
    res.send("sin acceso")
})

app.post("/register", async (req,res)=>{
    const {contrasena, nombre} = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashP = await bcrypt.hash(contrasena, salt)
        usuarios.push({nombre, contrasena:hashP});
        console.log(usuarios)
        res.send("usuario creado con exitos")

    } catch (error) {
        res.send(error)
    }
})

app.post("/login", async (req,res)=>{
    const {contrasena, nombre} = req.body
    try {
        const usuario = usuarios.find(usuario=> usuario.nombre===nombre);
        if(!usuario){
            return res.send("usuario o contraseña incorrecto")
        }

        const match = await bcrypt.compare(contrasena, usuario.contrasena)
        console.log(match)
        if(!match){
            return res.send("usuario o contraseña incorrecto")
        }
        const token = jwt.sign({usuario, rol:"admin"}, secretKey, {expiresIn:"5m"})
        res.cookie("token", token, {httpOnly:false,expiresIn:"10h"})
        res.send("bienvenido "+ usuario.nombre)
    } catch (error) {
        res.send(error)
    }
})
app.listen(port, ()=>{
    console.log("servidor corriendo en puerto 3000")
})

