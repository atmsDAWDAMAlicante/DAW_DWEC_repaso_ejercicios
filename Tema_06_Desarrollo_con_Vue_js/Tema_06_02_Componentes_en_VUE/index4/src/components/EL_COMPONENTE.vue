<script>
export default {
    name: "elComponente",
    data(){
        return{
            saludo1: "Hola soy tu amigo el componente",
            unArray: [1,3,4,56,4,2345,25,4254,56423,54,452345,2],
            verde:true
        }
    }

}
</script>
<template>
    <div>
   <p>
<span class="marcadoazul"> {{ saludo1 }}</span>
   </p>
   <ul>
    <li v-for="numero in unArray">{{ numero }}</li>
   </ul>
</div>
</template>

<style>
.marcadorojo{color:#FF0000;}
.marcadoazul{color:#00FF00;font-size:1.9em;}
div{
    background-color: black;
}
</style>