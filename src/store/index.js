import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

store.dispatch('initStore') // we can use similar behaviour to load every initStore in every module by making auto-calling this for every module

export default store
