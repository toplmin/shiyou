<template>
  <div class="all">
    <MyMenu/>
    <MyContent/>
  </div>
</template>

<script setup>
import MyMenu from '@/views/Layout/MyMenu.vue'
import MyContent from './MyContent.vue';

</script>

<style lang="less" scoped>
.all{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>