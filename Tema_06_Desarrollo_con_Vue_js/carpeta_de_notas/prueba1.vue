<template><!-- Dentro de template tiene que haber una sola etiqueta padre-->
<div><!-- ETIQUETA PADRE -->
<p>{{ saludo1 }}</p>
</div><!-- ETIQUETA PADRE -->
</template>

<script>
// no se hace la app como en appCreate
// hay que exportar
// export default {OBJETO}

export default {
    name: "NombreComponente", // se añade el nombre
    data(){
        return{
           saludo1: "Hola Don Pepito"
        }
    },
    methods:{

    },
    computed:{

    }
}



// en el archivo que sea
// import NombreComponente form './NombreComponente.vue'
// si se exporta default el objeto está disponible sin llaves, si se exporta con nombre estará disponible con llaves

</script>


<!-- Si va scoped los estilos solo se aplicarán a la plantilla de ese componente el template -->
<style scoped>
</style>