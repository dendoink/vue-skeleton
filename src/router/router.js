import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes,
})