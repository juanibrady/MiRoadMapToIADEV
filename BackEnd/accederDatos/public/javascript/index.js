const section =document.querySelector("section")
const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const params = new URLSearchParams(new FormData(e.target))
    window.location.search=params.toString()
})

const params = window.location.search

const obtenerProductos = async ()=>{
    try {
        const conexion = await fetch("http://localhost:3000/api/productos"+params)
        const datos = await conexion.json()
        datos.forEach(p => {
            const div =document.createElement("div")
            div.innerHTML = `<h3>${p.nombre}</h3> <p>${p.precio}</p> <small>${p.descripcion}</small>`
            section.appendChild(div)
        });
    } catch (error) {
        console.log("ocurrio un error interno "+ error)
    }
}

obtenerProductos()


