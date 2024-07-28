const abrir=document.querySelector(".abrir")
const cerrar=document.querySelector(".cerrar")
const nav=document.querySelector("nav")

abrir.addEventListener("click",()=>{
    nav.classList.toggle("activo")
})
cerrar.addEventListener("click",()=>{
    nav.classList.remove("activo")
})

