const app = Vue.createApp({
    data() {
        return{
            fullName:null
        }
    },
    methods:{
        deneme(event){
            console.log(event)
        }
    }
}).mount("#app")