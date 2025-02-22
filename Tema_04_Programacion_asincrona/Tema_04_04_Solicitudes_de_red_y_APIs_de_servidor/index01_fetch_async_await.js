//alert("Hola")

const resultado1 = document.querySelector("#resultado1");
const resultado2 = document.querySelector("#resultado2");
const botonAsync = document.querySelector("#botonAsync");
const botonThen = document.querySelector("#botonThen");
let url = [
new URL ("https://api.github.com/users/AngelTomasM"),
new URL ("https://api.github.com/users/AngelTomasM2"),
new URL("https://Xapi.github.com/users/AngelTomasM"),
new URL ("https://pokeapi.co/api/v2/pokemon/ditto")
];
// https://api.github.com/rate_limit

async function recuperarAsync(url) {
    let resultado = "";
    try{
    await fetch (url)
    .then((response)=>{
        if (response.status !=200){
            resultado = response.status;
            resultado1.textContent = resultado;
            return;
        } else {
        resultado = `response antes de json() es ${typeof(response)}<br>`
        return response.json()
    }
    })
    .then((data)=>{
        resultado += `data después de json() es ${typeof(data)}<br>`
        resultado1.innerHTML=resultado
        console.log(data)
        for (let i in data){
            console.log(i)
        }
    })
    
} catch {
    resultado1.innerHTML= "ERROR"
}
}

function recuperarThen(url) {
    let resultado = "THEN";
    //resultado2.innerHTML=resultado
    fetch (url)
    .then((response)=>{
        resultado += `${response.status}<br>`;
        if (response.status != 200){
            resultado += `Error: ${response.status}`;
        } else {
            return response.json();
        }
    })
    .then((data)=>{
        //resultado += data;
        console.log(data)
        resultado += "<h3>Datos del usuario</h3><ul>";
        for (let key in data) {
            resultado += `<li><b>${key}:</b> ${data[key]}</li>`;
        }
        resultado += "</ul>";
        console.log(resultado);
        resultado2.innerHTML += resultado;
    })
    //console.log(url)


}



botonAsync.addEventListener("click", ()=>recuperarAsync(url[0]));
botonThen.addEventListener("click", ()=>recuperarThen(url[3]));
