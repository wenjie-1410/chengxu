import vue from "vue"
import vuex from "vuex"
vue.use(vuex)
var store = new vuex.Store({
    state:{
        list:[],

        cart: JSON.parse(localStorage.getItem("key"))||[]
    },
    mutations:{
      jian(state,k){
          state.cart[k].num++
          localStorage.setItem("key",JSON.stringify(state.cart))
      },
      addcart(state,arr){
          state.cart = arr
      },
      del(state,ar){
          ar.forEach((v)=>{
              state.cart.forEach((itme,k)=>{
                  if(v==itme.id){
                     state.cart.splice(k,1)
                  }
              })
          })
          localStorage.setItem("key",JSON.stringify(state.cart))
      },
      
    },
    getters:{
        count(state){
            var nu = 0
            state.cart.forEach((v)=>{
               nu+=v.price*v.num
            })
            return nu
        },
    },


})
export default store