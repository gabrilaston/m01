import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'one',
    component: ()=> import('../components/login.vue')
  },
  {
    path: '/reg',
    name: 'two',
    component: ()=> import('../components/reg.vue')
  }
];

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
