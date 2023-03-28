import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout';
import Login from '../views/Login/login.vue'
import One from '@/views/One';
import FirstItem from '@/views/One/FirstItem.vue';
import SecondItem from '@/views/One/SecondItem.vue';
import Camera from '@/views/Camera'
import showCamera from '@/views/Camera/Camera.vue'
import camCalibrate from '@/views/Camera/CamCalibrate.vue'
import personTrace from '@/views/Trace/PersonTrace.vue'
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
        component: Camera,
        children: [
          {
            path: '/showCamera',
            component: showCamera,
          },
          {
            path: '/camCalibrate',
            component: camCalibrate,
          }
        ]
      },
      {
        path:'/personTrace',
        component: personTrace,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
