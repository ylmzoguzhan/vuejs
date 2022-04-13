<template>
  <div>
   <!--{{$store.state.fullName}}
    <button @click="updateName">Değiştir</button>
    <ul>
      <li v-for="item in woodItems" :key="item">{{item.title}}</li>
    </ul>
    {{activeUser}} -->
    <UserList/>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue"
import { mapGetters } from 'vuex'
export default {
  components:{
    UserList
  },
  created(){
    console.log(this.$store.getters.woodItems)
    console.log(this.$store.getters.activeUser)
    console.log(this.$store.state.user)
  },
  methods:{
    updateName(){
      this.$store.state.fullName = "değiştirildi"
    }
  },
  computed:{
    ...mapGetters(["woodItems","activeUser"]),

  }
}
</script>