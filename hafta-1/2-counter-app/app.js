const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0
        }
    },
    methods:{
        rastgeleSayi(){
            console.log("rastgele sayı")
            return Math.floor((Math.random() * 100) + 1);
        }
 
    },
    computed:{
        kontrol(){
            console.log("kontrol1")
            if(this.counter>5)
                return 'BÜYÜK'
            else
                return 'KÜÇÜK'
        },
        kontrol2(){
            console.log("control2")
            if(this.counter2>5)
                return 'BÜYÜK'
            else
                return 'KÜÇÜK'
        },


    },
    watch:{
        counter(newValue,oldValue){
            console.log(newValue,oldValue)
        },
        kontrol2(newValue,oldValue){
            console.log(newValue,oldValue)
        },
    }
}).mount("#app")