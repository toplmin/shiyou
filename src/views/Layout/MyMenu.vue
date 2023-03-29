<template>
  <el-menu
        mode="horizontal"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="route.path"
        text-color="#fff"
        router
      >
        <el-sub-menu index="/">
          <template #title>相机模块</template>
          <el-menu-item index="/showCamera">相机展示</el-menu-item>
          <el-menu-item index="/camCalibrate">相机标定</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/personTrace">人员轨迹</el-menu-item>
        <el-menu-item index="/subscription">订阅配置</el-menu-item>
        <el-menu-item index="/videoSource">视频源配置</el-menu-item>
      </el-menu>
</template>

<script>
import {useRoute} from 'vue-router'

export default{
    setup(){
      // 使用路由,实现菜单栏的路由跳转（https栏路径就可以根据点击的菜单项来变化）
      const route = useRoute()
      // console.log(route);
      return {
        route
      }
    }
}

</script>

<style scoped>
.el-menu-vertical-demo{
  /* position: fixed; */
  position: relative;
  width: 100%;
  
}
.el-menu-vertical-demo > el-menu-item__title{
  position: absolute;
  top:0;
  left:0;
  right:0;
}
.el-menu-vertical-demo > .el-menu-item{
  margin-left:160px;
}
.el-menu-vertical-demo > .el-sub-menu{
  margin-left:160px;
}

</style>