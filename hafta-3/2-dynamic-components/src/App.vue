<template>
  <button @click="activeComponent='RedCmp'">Red</button>
  <button @click="activeComponent='BlueCmp'">Blue</button>
  
  <component :is="activeComponent" msg="active component">
    <template #title> 
      <h1>slot title</h1>
    </template>
    <template #content>
      <p>Lorem ipsum dolor sit amet.</p>
    </template>
  </component>
</template>
<script>
import RedCmp from "@/components/RedCmp.vue"
import BlueCmp from "@/components/BlueCmp.vue"
export default {
  components:{
    RedCmp,
    BlueCmp
  },
  data(){
    return{
      activeComponent:null
    }
  }
}
</script>