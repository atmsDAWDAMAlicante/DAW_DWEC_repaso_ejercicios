<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import GitHub from './components/GitHub.vue';

export default{
  components:{
    GitHub
  }, data(){
      return{
        titulo:"Buscar usuario en GitHub",
        color:true,
        amarillo: '#FFFF00',
        verde: '#00FF00',
        colorTitulo: this.amarillo
      }
  }, methods:{

  }
}
</script>

<template>
 
  <header class="container"><h1>{{titulo}}</h1></header>
  <div>
    <GitHub></GitHub>
  </div>
</template>

<style scoped>

h1{
  text-align: center;
  font-family: 'Comic Sans MS', Helvetica, Verdana, sans-serif;
  font-size: 3rem;
  margin-top:1px;
  text-shadow: 10px 10px 15px;
  color:yellow;
}



</style>
