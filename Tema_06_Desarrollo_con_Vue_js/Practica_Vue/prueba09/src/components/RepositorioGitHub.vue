<script>

export default {
  name: "Secundario",
  data(){
    return{
        titulo:"HOLA, PROBANDO"
    }
  },
  props:[
    "unRepo"
  ]
}


</script>

<template>
  <h2>{{ unRepo.id }}</h2>
</template>

<style scoped>
h2{color:red;}
</style>