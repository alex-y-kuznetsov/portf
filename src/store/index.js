import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shownProject: 1,
    isAnimatingProject: false,
    isProjectsBlockShown: false
  },
  mutations: {
    setShownProject (state, value) {
      state.isAnimatingProject = true;
      setTimeout(function () {
        state.isAnimatingProject = false;
      }, 200)
      state.shownProject = value;
    },
    toggleProjectsBlock (state) {
      state.isProjectsBlockShown = !state.isProjectsBlockShown;
    }
  },
  actions: {
  },
  modules: {
  }
})
