<template>
    <ul>
       <!-- <TodoListItem @remove-item="$emit('remove-item',$event)" :todoList="data"/> -->
       <TodoListItem/>
    </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem.vue"

export default {
    //props:["data"],
    components:{
        TodoListItem
    },

}
</script>