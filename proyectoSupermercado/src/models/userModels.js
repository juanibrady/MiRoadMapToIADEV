import {pool} from "../config/db.js"

export const loginAuthModel = async (email)=>{
    try {
        const sql = "SELECT * FROM usuarios WHERE correo = ?";
        const values =[email];
        
        const [user] = await pool.query(sql,values);
        return user
    } catch (error) {
        return {isError:true, message:"A ocurrido un error interno del servidor", error}
    }
};