<script>

export default {
    name:"componenteCabecera",
    data(){
        
        return{
            prueba:"Hola desde la cabecera"
        }
    },
    props:[
        "unProp"
    ]
}

</script>

<template>
<header>{{prueba}}</header>
<p>{{unProp}}</p>


</template>

<style>
header, p{color:black;}
</style>