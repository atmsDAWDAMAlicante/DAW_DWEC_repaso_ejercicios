<script>
export default {
    name: "elHeaderDeArriba",
    data(){
        return{
            elTitulo: "HOLA SOY TU AMIGO EL COMPONENTE"
        }
    }
}
</script>

<template>
    <header><h1>{{ elTitulo }}</h1></header>
</template>

<style>
header{
  border: 2px solid #0000FF; 
  color: red;
  margin:10px;
  height: auto;
  width: 90%;
}
</style>