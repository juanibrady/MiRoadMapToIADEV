import express from "express"
import jwt from "jsonwebtoken"

const app=express()
const puerto=3000
const secretKey ="millavesecreta"

//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const verificarToken =(req,res,next)=>{
    let token = req.headers.authorization
    token = token.replace("Bearer", "").trim();
    jwt.verify(token,secretKey,(error,decoded)=>{
        if(error){
            return res.send(error)
        }
        req.user = decoded
        console.log("hola")
    })
   
    next()
}

app.post("/admin",(req,res)=>{
    const {nombre,contraseña} = req.body;

    if(nombre==="admin" && contraseña ==="pepe"){
        const token = jwt.sign({nombre, rol:"admin",pepe:"pepe"},secretKey,{expiresIn:"5m"})
        console.log(token)
        res.json(token)
    }else{
        res.status(404).send("El usuario no es valido")
    }
})

app.get("/admin", verificarToken, (req,res)=>{
    console.log(req.user)
    res.send("verificado")
})


app.listen(puerto, ()=>console.log(`servidor corriendo en puerto ${puerto}`));