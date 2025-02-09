<script>
export default {
    name:"NombreComponenteHeader",
    data(){
        return {
            titulo: "Este es el título"
        }
    }
}
</script>

<template>
    <header>
        {{titulo}}
    </header>
</template>


<style scoped>
header{color:#FFFF00;}
</style>