<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import Cabecera from './components/Cabecera.vue'
import Cuerpo from './components/Cuerpo.vue'

export default {
  components:{
    Cabecera,
    Cuerpo
  },
  data(){
    return{
      propDePrueba: "Hola"
    }
  }
}

</script>

<template>
<Cabecera></Cabecera>
<Cuerpo></Cuerpo>

</template>

<style scoped>
template {
    width: 99% !important;
  }
</style>
