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
          <template #title>
            <el-icon><location /></el-icon>
            <span>第一模块</span>
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
        <el-menu-item index="/camera">
          <el-icon><icon-menu /></el-icon>
          <span>相机模块</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>第三模块</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>第四模块</span>
        </el-menu-item>
      </el-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>