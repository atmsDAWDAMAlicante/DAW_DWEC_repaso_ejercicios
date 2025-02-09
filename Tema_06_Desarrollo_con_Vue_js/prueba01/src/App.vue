<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import elHeader from './components/elHeader.vue'
import elCuerpo from './components/elCuerpo.vue'

export default{
  components: {
  elHeader,
  elCuerpo
  },
  data(){
    return{
      mensaje:"Hola",
      jedis:[]
    }
  },
  methods:{
    recuperar:function(){
      fetch('src/assets/jedis.json')
      .then((data)=>data.json())
      .then((data)=>{
        console.log(data)
        this.jedis = data;
      })
      //console.log(this.jedis)
    }
  }
}




</script>

<template>

    <elHeader></elHeader>
    <main>
      <button @click="recuperar">APRETAR</button>
    </main>
    <elCuerpo v-if="jedis" :variableArray="jedis"></elCuerpo>
   <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

   <!-- <div class="wrapper">-->
    <!--  <HelloWorld msg="You did it!" />-->
   <!-- </div>-->
 

  <main>
   <!-- <TheWelcome />-->
  </main>
</template>

<style scoped>

/*
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>
