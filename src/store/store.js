import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            { name: "苹果", price: 100 },
            { name: "华为", price: 98 },
            { name: "小米", price: 88 },
            { name: "oppo", price: 85 },
        ],
    },
    getters: {
        discountProducts(state) {
            var discountProducts = state.products.map((val) => {
                return {
                    name: `优惠中的${val.name}`,
                    price: val.price / 2
                }
            })
            return discountProducts
        }
    },
    mutations: {
        reductionPrice(state) {
            state.products.forEach((val) => {
                val.price -= 1
            })
        },
        asyReductionPrice(state,payload) {
            state.products.forEach((val) => {
                val.price -= payload
            })
        }
    },
    actions:{
        asyReductionPrice(context,payload){
            setTimeout(() => {
                context.commit("asyReductionPrice",payload)
            }, 2000);
        }
    }
})