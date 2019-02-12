import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: ''
  },
  mutations: {
    updateSearchQuery (state, query) {
      this.state.searchQuery = query
    }
  },
  actions: {

  }
})
