<script>

export default {
    name:"componenteCabecera",
    data(){
        
        return{
            // URL
            urlCompleta: "",
            urlParteFija: "https://api.github.com/users/",
            urlUsuario: "",
            // GET
            login:"",
            avatar_url:"",
            html_url:"",
            repos_url:"",
            // Booleanos
            mostrar: false,
            primeraVez: true
            
        }
    },
    props:[
        "unProp"
    ],
    methods:{
        borrarConsola(){
            console.clear();
        },
        llamadaGitHub(){
            this.primeraVez=false;
            // Formación de la URL
            this.urlCompleta = new URL(`${this.urlParteFija}${this.urlUsuario}`)
            console.log(`Se llama a la URL: ${this.urlCompleta}`)

            // Fetch
            fetch(`${this.urlCompleta}`)
            .then((response)=>{
                
                if(response.status !=200){
                    this.mostrar = false;
                    console.log(`Usuario inexistente: error ${response.status}`);
                } else {
                    console.log(`Usuario OK: ${response.status}`);
                    this.mostrar = true;
                    return response.json();
                }
            }).then((data)=>{
                this.login=data.login;
                this.avatar_url=data.avatar_url;
                this.html_url=data.html_url;
                this.repos_url=data.repos_url;

            }).catch((error)=>{
                console.log(`Error de conexión: error ${response.status}`)
            })

        }
    }
}

</script>

<template>
<main>
    <div>
        <input type="text" v-model="urlUsuario" @keydown.enter="llamadaGitHub">
        <button @click="borrarConsola">Borrar consola</button> Búsqueda: {{ urlParteFija }}{{ urlUsuario }}
    </div>
    
    <template v-if="primeraVez == false">
        <div v-if="mostrar == true" class="usuarioExistente">
            <dl><dt>El usuario {{ urlUsuario }} SÍ existe:</dt>
                <dd>Usuario: <span class="marcadorojo">{{ login }}</span></dd>
                
                <dd>HTML URL: <a :href="html_url" target="_blank"><span class="marcadoazul">{{ html_url }}</span></a></dd>
                <dd>Repositorios: <a :href="repos_url" target="_blank"><span class="marcadoverde">{{ repos_url }}</span></a></dd>
            </dl>
            <figure><img :src="avatar_url" alt="Avatar">
                <figcaption>Url del avatar: <a :href="avatar_url" target="_blank"><span class="marcadoverde">{{ avatar_url }}</span></a></figcaption>
            </figure>

        </div>

        <div v-else class="usuarioInexistente">
            El usuario {{ urlUsuario }} NO existe.
        </div>


    </template>
  </main>
</template>

<style scoped>
header, p{color:black;}

.usuarioInexistente{
    border: 1px solid red;
    background-color: rgb(248, 228, 228);
    color: red;
    font-weight: bold;
}

.usuarioExistente{
    border: 1px solid blue;
    background-color: rgb(229, 251, 255);
    font-weight: bold;
}

.marcadorojo{color:red}
.marcadoverde{color:#339900}
.marcadoazul{color:blue}
.marcadomorado{color:purple}

</style>