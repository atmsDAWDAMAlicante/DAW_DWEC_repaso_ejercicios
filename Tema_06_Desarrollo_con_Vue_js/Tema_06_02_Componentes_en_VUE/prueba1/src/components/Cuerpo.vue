<script>

export default {
    data(){
        return{
            saludo:"Hola",
            etiquetas:["a","b","c"]
        }
    },
    props:[
        'numero'
    ],
    methods:{

    }
}
</script>

<template>
<main><section v-for="elemento in etiquetas">{{ elemento }}</section>

</main>
</template>
<style>
</style>