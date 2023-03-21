<template>
  <div class="all">
      <MyMenu/>
    <MyContent/>
  </div>
</template>

<script>
import MyMenu from '@/views/Layout/MyMenu.vue'
import MyContent from './MyContent.vue';

export default {
  components:{ MyMenu, MyContent}
}
</script>

<style lang="less" scoped>
.all{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>