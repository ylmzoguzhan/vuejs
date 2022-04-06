const app = Vue.createApp({
    data(){
        return{
            search: "",
            itemList: ["kalem","kağıt","defter","silgi"],
            data : "ss",
        }
    },
    methods:{
        rastgeleSayi(){
            return Math.floor((Math.random() * 100) + 1);
        }
    },
    computed:{
        searchList(){
            return this.itemList.filter(i=>i.includes(this.search))
        },
        deneme(){
            console.log("deneme çalıştı")
            return this.deneme
        }
    }
}).mount("#app")