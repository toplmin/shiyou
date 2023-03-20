import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout';
import One from '@/views/One';
import FirstItem from '@/views/One/FirstItem.vue';
import SecondItem from '@/views/One/SecondItem.vue';
import Camera from '../components/camera.vue'
import Ex_camera from '../components/ex_camera.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
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
