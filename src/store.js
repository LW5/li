import Vue from 'vue'
import Vuex from 'vuex'
import goods from "./components/goods/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    goods
  }
})
