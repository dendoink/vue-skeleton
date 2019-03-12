import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import login from './modules/login'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    login
  },
  getters
})

export default store
