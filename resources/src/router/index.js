import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard }
  ]
})
