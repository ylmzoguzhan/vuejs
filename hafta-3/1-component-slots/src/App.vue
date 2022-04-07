<template>
  <ModalCmp> 
    <template #title> 
        <h3>Slot title</h3>
    </template>
    <template #content> 
      <p style="color:red">Lorem ipsum dolor sit amet.</p>
    </template>
    <template #button> 
      <button @click="deneme">Slot buton</button>
    </template>
  </ModalCmp>
</template>
<script>
import ModalCmp from "@/components/ModalCmp.vue"
export default {
  components:{
    ModalCmp
  },
  methods:{
    deneme(){
      console.log("deneme")
    }
  }
}
</script>