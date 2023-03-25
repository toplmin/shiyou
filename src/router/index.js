import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout';
import One from '@/views/One';
import FirstItem from '@/views/One/FirstItem.vue';
import SecondItem from '@/views/One/SecondItem.vue';
import Camera from '../components/camera.vue'
import Login from '../views/Login/login.vue'
const routes = [
  {
    path: '/',
    name:'登录页面',
    component: Login,
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: '第一模块',
        component: One,
        children: [
          {
            path: '/item1',
            component: FirstItem
          },
          {
            path: '/item2',
            component: SecondItem
          },
        ]
      },
      {
        path: '/camera',
        name: '相机模块',
        component: Camera
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
