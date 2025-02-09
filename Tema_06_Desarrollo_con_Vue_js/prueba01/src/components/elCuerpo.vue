<script>
export default{
    name:"componenteHijo",
    data(){
        return{
            argo:""
        }
    },
    props:[
        "variableArray"
    ]
}
</script>


<template>
    <div>
        <ul>
            <li v-for="elemento in variableArray">{{ elemento.nombre }}</li>
        </ul>
        <pre>{{ variableArray }}</pre>
    </div>
</template>

<style>
li{
    color:aquamarine
}
pre{color:white}
</style>