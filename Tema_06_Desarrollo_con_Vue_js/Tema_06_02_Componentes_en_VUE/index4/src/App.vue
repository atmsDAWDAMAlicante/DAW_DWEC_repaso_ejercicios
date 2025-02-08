<!--<script setup>-->
<script>

import HelloWorld from './components/HelloWorld.vue'
import EL_COMPONENTE from './components/EL_COMPONENTE.vue';
import TheWelcome from './components/TheWelcome.vue'

export default {
    components: {
        HelloWorld,
        EL_COMPONENTE
    }
}

</script>

<template>
<div>Hola mundo</div>
<div>
  <HelloWorld></HelloWorld>
  <EL_COMPONENTE></EL_COMPONENTE>
</div>
</template>

<style scoped>

</style>
