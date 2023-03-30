import { createRouter, createWebHistory } from 'vue-router';

// 登录页面
import Login from '../views/Login/login.vue'
// 首页
import Layout from '@/views/Layout'
// 人脸特征录入
import faceEntry from '@/views/Face/FaceEntry.vue'
// 人脸特征查询
import faceSearch from '@/views/Face/FaceSearch.vue'
// 骨骼特征录入
import boneEntry from '@/views/Bone/BoneEntry.vue'
// 骨骼特征查询
import boneSearch from '@/views/Bone/BoneSearch.vue'
// 步态特征录入
import gaitEntry from '@/views/Gait/GaitEntry.vue'
// 人员轨迹展示
import personTrack from '@/views/Track/PersonTrack.vue'
// 视频源配置
import videoSource from '@/views/Video/VideoSource.vue'
// 相机标定
import camCalibration from '@/views/Camera/CamCalibration.vue'
// 订阅配置
import subscription from '@/views/Sub/Subscription.vue'

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
        path: '/faceEntry',
        name: '人脸特征录入',
        component: faceEntry,
      },
      {
        path: '/faceSearch',
        name: '人脸特征查询',
        component: faceSearch,
      },
      {
        path: '/boneEntry',
        name: '骨骼特征录入',
        component: boneEntry,
      },
      {
        path: '/boneSearch',
        name: '骨骼特征查询',
        component: boneSearch,
      },
      {
        path: '/gaitEntry',
        name: '步态特征录入',
        component: gaitEntry,
      },
      {
        path:'/personTrack',
        name:'人员轨迹展示',
        component: personTrack,
      },
      {
        path:'/videoSource',
        name:'视频源配置',
        component: videoSource,
      },
      {
        path:'/camCalibration',
        name:'相机标定',
        component: camCalibration,
      },
      {
        path:'/subscription',
        name:'订阅配置',
        component: subscription,
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
