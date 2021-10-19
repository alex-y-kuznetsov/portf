import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shownProject: 1
  },
  mutations: {
    setShownProject (state, value) {
      state.shownProject = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
