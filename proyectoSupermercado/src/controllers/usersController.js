import { loginAuthService } from "../services/userServices.js"

export const loginAuth = async(req,res)=>{
    try {
        const data = await loginAuthService(req.body);
        if(data.isError){
            res.status(404).json({message:"A ocurrido un error"})
        }

        if(data.login){
            res.send("inicio de sesion correcto")
        }
        res.send("usuario o contraseña incorrecto")
    } catch (error) {
        res.status(404).json({message:"A ocurrido un error", error})
    }
}