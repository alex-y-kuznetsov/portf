import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shownProject: 1,
    isAnimatingProject: false
  },
  mutations: {
    setShownProject (state, value) {
      state.isAnimatingProject = true;
      setTimeout(function () {
        state.isAnimatingProject = false;
      }, 100)
      state.shownProject = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
