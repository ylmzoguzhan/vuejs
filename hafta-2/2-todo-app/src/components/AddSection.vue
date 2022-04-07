<template>
    <label for="todoText"></label>
    <input @keydown.enter="addNewTodo(data)" v-model="data" type="text" id="todoText" placeholder="ekleyiniz">
</template>

<script>
export default {
    //props:{
        //addNewTodo:{
            //type: Function,
            //required: true
        //}
    //},
    data(){
        return{
            data:""
        }
    },
    inject:["addNewTodo"]
}
</script>