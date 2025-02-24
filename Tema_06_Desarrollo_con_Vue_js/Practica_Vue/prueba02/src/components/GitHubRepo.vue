<script>

export default {
    name: "bb",
    data(){
        return{
            prueba2: "Adios"
        }
    },
    props:[
        "recibido2"
    ],
    methods:{

    }
}

</script>


<template>
    <div>
        {{ recibido2 }}
    </div>

    

</template>

<style scoped>
div{color:aquamarine}

</style>