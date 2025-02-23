<script>
export default{
    name: "Envio",
    data(){
        return {
            prueba: "Hola"
        }
    }, 
    props:[
        "repo"
    ], 
    methods:{

    }
}
</script>

<template>
    <div class="cadaRepo">
        <dl><dt>Repositorio: <span class="marcadoverde">{{repo.name}}</span></dt>
            <dd>- Descripción: <span class="marcadoazul">{{repo.title}}</span></dd>
            <dd>- Lenguaje/s: <span class="marcadomorado">{{repo.language}}</span></dd>
            <dd>- Forks: <span class="marcadorojo">{{repo.forks}}</span></dd>
        </dl>
        </div>
</template>

<style scoped>
.cadaRepo {
    border: 1px solid blue;
    margin-top: 10px;
    width: 90%;
    margin-left: 5px;
}

.marcadorojo{color:red}
.marcadoverde{color:#339900}
.marcadoazul{color:blue}
.marcadomorado{color:purple}
</style>