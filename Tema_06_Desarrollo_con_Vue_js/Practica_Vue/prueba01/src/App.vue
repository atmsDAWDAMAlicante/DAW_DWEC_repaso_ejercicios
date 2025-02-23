<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import GitHub from './components/GitHub.vue';
//import GitHubRepo from './components/GitHubRepo.vue';
export default{
  components:{
    GitHub
   // GitHubRepo
  },
  data(){
    return{
      titulo:"Buscar usuario de GitHub",
      algo: "Esto es algo"
    }
  }
}
</script>

<template>
  <header><h1>{{ titulo }}</h1>
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

    <!--<div class="wrapper">-->
      <!--<HelloWorld msg="You did it!" />-->
    <!--</div>-->
  </header>
  <p>
  <GitHub :unProp="algo"></GitHub>
</p>
</template>

<style scoped>
h1{text-align: center;}
/*header {line-height: 1.5;}
.logo {display: block;margin: 0 auto 2rem;}
@media (min-width: 1024px) {
  header {display: flex;place-items: center;padding-right: calc(var(--section-gap) / 2);}
  .logo {margin: 0 2rem 0 0;}
  header .wrapper {display: flex;place-items: flex-start;flex-wrap: wrap;}}*/
</style>
