<script>

export default {
    name: "bb",
    data(){
        return{
            prueba2: "Adios"
        }
    },
    props:[
        "repo"
    ]
}

</script>


<template>
    <div>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">{{ repo.name }}</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">{{ repo.language }}</h5>
                    <p class="card-text">{{ repo.forks_count }}</p>
                </div>
        </div>
    </div>

    

</template>

<style scoped>
div{color:purple}

</style>