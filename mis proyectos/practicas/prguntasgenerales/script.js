const botonMas=document.querySelectorAll(".mas");
const botonMenos=document.querySelectorAll(".menos")
const parrafo=document.querySelectorAll(".parrafo")
const contenedor=document.querySelectorAll(".contenedor")
 
console.log(contenedor)
botonMas.forEach((boton, indice) => {
    boton.addEventListener("click",()=>{
        botonMas[indice].classList.toggle("oculto")
        botonMenos[indice].classList.toggle("oculto")
        parrafo[indice].classList.toggle("oculto")
    })
});
botonMenos.forEach((boton, indice) => {
    boton.addEventListener("click",()=>{
        botonMas[indice].classList.toggle("oculto")
        botonMenos[indice].classList.toggle("oculto")
        parrafo[indice].classList.toggle("oculto")
    })
});
