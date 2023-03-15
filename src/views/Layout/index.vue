<template>
  <div class="menu">
    <MyMenu/>
  </div>
  <div class="content">
    <MyContent/>
  </div>
</template>

<script>
import MyMenu from '@/views/Layout/MyMenu.vue'
import MyContent from './MyContent.vue';

export default {
  components:{ MyMenu, MyContent }
}
</script>

<style lang="less" scoped>
.menu{
  position:fixed;
  top:0;
  left:0;
  right:0;
}

.content{
  padding-top:50px;
  border:1px solid yellow;
}
</style>