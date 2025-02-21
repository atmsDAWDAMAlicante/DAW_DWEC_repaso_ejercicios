//alert("Hola")

const app = document.querySelector("#app");
const boton = document.querySelector("#boton");
let urlOK = new URL ("https://api.github.com/users/AngelTomasM")
let urlNoUser = new URL ("https://api.github.com/users/AngelTomasM2")
let urlMal = new URL("https://Xapi.github.com/users/AngelTomasM")
let urlPokemon = new URL ("https://pokeapi.co/api/v2/pokemon/ditto")
let resultado = "";
async function recuperar(url) {
    try{
    await fetch (url)
    .then((response)=>{
        if (response.status !=200){
            resultado = response.status;
            app.textContent = resultado;
            return;
        } else {
        resultado = `response antes de json() es ${typeof(response)}<br>`
        return response.json()
    }
    })
    .then((data)=>{
        resultado += `data después de json() es ${typeof(data)}<br>`
        app.innerHTML=resultado
        console.log(data)
    })
    
} catch {
    app.innerHTML= "ERROR"
}
}













boton.addEventListener("click", ()=>recuperar(urlNoUser));
