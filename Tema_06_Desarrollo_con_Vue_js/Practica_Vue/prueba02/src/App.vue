<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import GitHub from './components/GitHub.vue';

export default{
  components:{
    GitHub
  }, data(){
      return{
        pruebaMaster:"Pasando un prop"
      }
  }
}
</script>

<template>
  <!--<header><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /><div class="wrapper"><HelloWorld msg="You did it!" /></div></header>-->
  <header><h1>Buscar usuario en GitHub</h1></header>
  <GitHub :recibido1="pruebaMaster"></GitHub>
  <!--<main><TheWelcome /></main>-->
</template>

<style scoped>

h1{
  text-align: center;
  font-family: 'Comic Sans MS', Helvetica, Verdana, sans-serif;
  font-size: 3rem;
  margin-top:-7px;
  text-shadow: 10px 10px 15px;
}



/*header {line-height: 1.5;}.logo {display: block;margin: 0 auto 2rem;}@media (min-width: 1024px) {header {display: flex;place-items: center;padding-right: calc(var(--section-gap) / 2);}.logo {margin: 0 2rem 0 0;}header .wrapper {display: flex;place-items: flex-start;flex-wrap: wrap;}}*/
</style>
