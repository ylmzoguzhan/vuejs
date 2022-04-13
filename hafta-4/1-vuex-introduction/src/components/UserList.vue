<template>
    <ul>
        <li v-for="user in userList" :key="user">{{user}}</li>
    </ul>
    <NewUser/>
</template>
<script>
import NewUser from "@/components/NewUser.vue"
import { mapGetters } from 'vuex'
export default {
    components:{
        NewUser
    },
    computed:{
        ...mapGetters(["userList"])
    }
}
</script>