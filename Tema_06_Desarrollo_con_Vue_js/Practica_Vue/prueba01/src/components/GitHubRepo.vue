<script>
export default{
    name: "Envio",
    data(){
        return {
            prueba: "Hola"
        }
    }, 
    props:[
        "recibido"
    ], 
    methods:{

    }
}
</script>

<template>
    <div v-for="elemento in recibido">{{elemento}}</div>
</template>

<style>
div {
    border: 1px solid blue;
    margin-top: 10px;
    width: 90%;
    margin-left: 5px;
}
</style>