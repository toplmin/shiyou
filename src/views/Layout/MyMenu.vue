<template>
  <el-menu 
      :default-active="route.path" 
      :collapse="isClose"  
      background-color="#112f50" 
      text-color="#fff"
      active-text-color="#ffd04b" 
      router
  >
    <el-menu-item>
      <template #title><span>人员定位跟踪系统</span></template>
    </el-menu-item>
    <el-menu-item index="/faceEntry">
      <!-- 图标 -->
      <el-icon><User /></el-icon>
      <template #title>
        <span>人脸特征录入</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/faceSearch">
      <el-icon><Search /></el-icon>
      <template #title>
        <span>人脸特征查询</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/boneEntry">
      <el-icon><Pointer /></el-icon>
      <template #title>
        <span>骨骼特征录入</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/boneSearch">
      <el-icon><Coin /></el-icon>
      <template #title>
        <span>骨骼特征查询</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/gaitEntry">
      <el-icon><Rank /></el-icon>
      <template #title>
        <span>步态特征录入</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/personTrack">
      <el-icon><MapLocation /></el-icon>
      <template #title>
        <span>人员轨迹展示</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/videoSource">
      <el-icon><VideoCamera /></el-icon>
      <template #title>
        <span>视频源配置</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/camCalibration">
      <el-icon><Camera /></el-icon>
      <template #title>
        <span>相机标定</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/subscription">
      <el-icon><SetUp /></el-icon>
      <template #title>
        <span>订阅配置</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/moduleConfig">
      <el-icon><Setting /></el-icon>
      <template #title>
        <span>模型配置</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from 'vue'
import {useRoute} from 'vue-router'

export default{
  props:['isClose'],
  setup(){
    // 定义是否折叠菜单栏的变量
    // const isCollapse = ref(false)
    // 使用路由,实现菜单栏的路由跳转（https栏路径就可以根据点击的菜单项来变化）
    const route = useRoute()
    return {
      // isCollapse,
      route
    }
  }
}

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
  min-height: 400px;
}
.el-menu{
  border-right:none;
}

</style>