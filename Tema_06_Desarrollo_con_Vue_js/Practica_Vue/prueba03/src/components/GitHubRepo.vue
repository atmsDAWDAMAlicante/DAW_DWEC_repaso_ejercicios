<script>

export default {
  name: "githubrepo",
  data(){
    return{
      prueba3: "Hola3"
    }
  }, props:[
    "envio"
  ],
  methods:{
    borrarConsola(){
      console.clear();
    }
  }
}

</script>

<template>
{{ prueba3 }} {{ envio }}
</template>

<style scoped>

</style>
