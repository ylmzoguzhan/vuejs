<template>
     <li v-for="todo in provideData.todoList" :key="todo.id">
        <span>{{todo.text}}</span>
       <!-- <button @click="$emit('remove-item',todo)">Sil</button> -->
       <button @click="removeItem(todo)">Sil</button>
    </li>
</template>
<script>

export default {
    //props:["todoList"],
    inject:[
        "provideData",
        "removeItem"
    ]
}
</script>