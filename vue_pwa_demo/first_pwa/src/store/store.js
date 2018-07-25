import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types.js'

Vue.use(Vuex);
const state = {
  transitionName: 'slide-left',
}
const actions = {
  [types.SET_PAGE_TRANSITION]({commit}, transitionName) {
    commit('SET_PAGE_TRANSITION', transitionName)
  },
}
const getters = {
  [types.GET_PAGE_TRANSITION](state) {
    return state.transitionName
  },
}
const mutations = {
  [types.SET_PAGE_TRANSITION](state, transitionName) {
    state.transitionName = transitionName
  },
}


export default new Vuex.Store({
  state: state,
  actions: actions,
  getters: getters,
  mutations: mutations
})
