const app = Vue.createApp({
    data(){
        return{
            title: "Vue ders 1",
            content: "Lorem ipsum dolor sit amet.",
            url:"https://www.youtube.com"      
        }
    },
    methods:{
        changeTitle(title,event){
            this.title = title
            console.log(event)
        }
    }
}).mount("#app")