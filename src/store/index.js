import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    loaded (state) {
      state.loading = false
    }
  }
})
export default store
