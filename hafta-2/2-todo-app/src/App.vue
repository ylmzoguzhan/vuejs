<template>
  <div>
    <h3>ToDo App</h3>
    <hr/>
    <!--<AddSection @add-todo="newItem" :addNewTodo="newItem" />
    <TodoList @remove-item="deleteItem" :data="todoList"/> -->
    <AddSection />
    <TodoList/>
    <ResultBar/>
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue"
import TodoList from "@/components/TodoList.vue"
import ResultBar from "@/components/ResultBar.vue"
export default {
  components:{
    AddSection,
    TodoList,
    ResultBar
  },
  data(){
    return{
      provideData: {
        todoList: [
        {id:1,text:"Bootcamp#1"},
        {id:2,text:"Bootcamp#2"},
        {id:3,text:"Bootcamp#3"},
        {id:4,text:"Bootcamp#4"},
        {id:5,text:"Bootcamp#5"}
        ]
      }
    };
  },
  methods:{
    deleteItem(todo){
      this.provideData.todoList = this.provideData.todoList.filter(t=>t!=todo)
    },
    newItem(todo){
      this.provideData.todoList.push({
        id: new Date().getTime, text: todo
      });
    },
  },
  provide(){
    return{
        provideData: this.provideData,
        removeItem: this.deleteItem,
        addNewTodo: this.newItem
    }
  }
}
</script>