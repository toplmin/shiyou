import { createRouter, createWebHistory } from 'vue-router';
// 布局/首页
import Layout from '@/views/Layout';
// 登录页面
import Login from '../views/Login/login.vue'
// 相机模块
import Camera from '@/views/Camera'
import showCamera from '@/views/Camera/ShowCamera.vue'
import camCalibrate from '@/views/Camera/CamCalibrate.vue'
// 人员轨迹
import personTrace from '@/views/Trace/PersonTrace.vue'
// 订阅配置
import subscription from '@/views/Sub/Subscripe.vue'
// 视频源配置
import videoSource from '@/views/Video/VideoSource.vue'

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
        path: '/camera',
        name: '相机模块',
        component: Camera,
        children: [
          {
            path: '/showCamera',
            name:'相机展示',
            component: showCamera,
          },
          {
            path: '/camCalibrate',
            name:'相机标定',
            component: camCalibrate,
          }
        ]
      },
      {
        path:'/personTrace',
        name:'人员轨迹',
        component: personTrace,
      },
      {
        path:'/subscription',
        name:'订阅配置',
        component: subscription,
      },
      {
        path:'/videoSource',
        name:'视频源配置',
        component: videoSource,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
