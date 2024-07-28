import { loginAuthModel } from "../models/userModels.js";
import bcrypt from "bcrypt"

export const loginAuthService = async body=>{
    try {
        const {email, contraseña}=body;
        const data = await loginAuthModel(email);
        if()
        console.log("length "+data.length)
        if(data.length==0){
            return {login:false}
        }
        const match = await bcrypt.compare(contraseña, data.contraseña);
        if(match){
            return({login:true, user})
        }
        return {login:false}
    } catch (error) {
        return {isError:true, message:"A ocurrido un error interno del servidor", error}
    };
};