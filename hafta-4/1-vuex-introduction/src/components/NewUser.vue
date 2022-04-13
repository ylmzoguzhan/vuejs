<template>
    <input type="text" @keydown.enter="add">
</template>

<script>
export default {
    methods:{
        add(event){
            this.$store.dispatch("newUser",event.target.value)
        }
    }
}
</script>