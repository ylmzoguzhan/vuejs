import { createStore } from "vuex";

const store = createStore({
    state:{
        person:{
            name:"oğuz",
            age:22
        },
        fullName:"oğuzhan yılmaz",
        itemList:[
            {id:1, title:"Masa", type:"mobilya"},
            {id:2, title:"Sandalye", type:"mobilya"},
            {id:3, title:"Monitör", type:"elektronik"},
            {id:4, title:"Klavye", type:"elektronik"}
        ],
        user:{
            tc:"111111",
            userName:"u1",
            password:"12345"
        },
        userList:["oğuzhan","ali","alp","ss"]
    },
    mutations:{
        newUser(state,user){
            state.userList.push(user)
        }
    },
    actions:{
        newUser(context,user){
            context.commit("newUser",user)
        }
    },
    getters:{
        woodItems(state){
            return state.itemList.filter(i=>i.type=="mobilya");
        },
        activeUser(state){
            const user = {
                ...state.user
            }
            delete user.password
            return user
        },
        userList(state){
            return state.userList
        }
    }
});
export default store