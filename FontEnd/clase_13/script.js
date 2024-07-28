const contenido=document.querySelector("#nombre")
const body=document.querySelector("body")
const enviar=document.querySelector("#send")
const p=document.querySelector("p")
let presionado="no"
enviar.addEventListener("click", function(a){
    if(presionado==="no"){
        
        enviar.style.transform="translateX(90px) scale(2)"
        presionado="si"
    }else if(presionado==="si"){
        enviar.style.transform="translateX(0) scale(1)"
        presionado="no"
    }
})

const inp=document.createElement("input")
inp.setAttribute("type","checkbox")
body.appendChild(inp)

const texto= document.createTextNode("hola como esta?")
contenido.value="hola"

// inp.innerHTML= 

// console.log(inp.textContent)
console.log(inp.parentNode)
const div2=document.querySelector(".div2")

console.log(div2.parentNode)

contenido.addEventListener("blur",()=>console.log("hola"));

console.log(Math.round(Math.random()*10));
