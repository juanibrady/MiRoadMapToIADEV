import { Router } from "express";
import { loginAuth } from "../controllers/usersController.js";
const usersRouter = Router()


usersRouter.get("/login", (req,res)=>res.render("login"));
usersRouter.post("/login", loginAuth);

usersRouter.get("/register", (req,res)=>res.render("register"))
usersRouter.post("/register")

export default usersRouter