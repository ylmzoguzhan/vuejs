<template>
    <div>
        <h3>{{counter}}</h3>
        <button @click="counter--">Azalt</button>
        <button @click="counter++">Artır</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0,
        }
    }
}
</script>