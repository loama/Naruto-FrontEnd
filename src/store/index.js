import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  searchQuery: ''
}

const mutations = {
  updateSearchQuery (state, query) {
    state.searchQuery = query
  }
}

const actions = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
