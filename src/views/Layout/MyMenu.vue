<template>
  <el-menu
        mode="horizontal"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
        <el-sub-menu index="/">
          <template #title>相机模块
            <el-icon><location /></el-icon>
          </template>
          <el-menu-item index="/showCamera">相机展示</el-menu-item>
          <el-menu-item index="/camCalibrate">相机标定</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="personTrace" >人员轨迹
          <el-icon><location /></el-icon>
        </el-menu-item>

        <el-sub-menu index="1">
          <template #title>第一模块
            <el-icon><location /></el-icon>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="/item1">item one</el-menu-item>
            <el-menu-item index="/item2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="/item3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="/item4">
            <template #title>item four</template>
            <el-menu-item index="/item4_1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>



        <el-menu-item index="4">第四模块
          <el-icon><setting /></el-icon>
        </el-menu-item>
      </el-menu>
</template>

<script setup>

</script>

<style scoped>
.el-menu-vertical-demo{
  position: fixed;
  width: 100%;
}
</style>