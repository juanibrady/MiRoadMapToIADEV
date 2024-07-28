import { Router } from "express";

const router = Router()


router.get("/admin", (req,res)=>{res.render("admin")})
// router.post("/admin/item", (req,res)=>{
//     console.log("si")
//     console.log(req.body)
//     res.redirect("/admin")});

router.put("/admin/item", (req,res)=>{
    console.log("PUT")

    console.log(req.body)})


export default router