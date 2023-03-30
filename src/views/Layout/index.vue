<template>
  <div class="menu">
    <MyMenu :isClose="isClose" />
  </div>
  <div class="content" :class="{active:isClose}">      
    <MyContent :isClose="isClose" @change="change"/>
  </div>
</template>

<script>
import MyMenu from '@/views/Layout/MyMenu.vue'
import MyContent from './MyContent.vue';
import {ref} from 'vue'

export default{
  components:{ MyMenu, MyContent },
  setup(){
    // 定义变量,左侧菜单栏是否折叠
    let isClose = ref(false);
    // 修改变量
    const change = ()=>{
      isClose.value = !isClose.value
    }

    return {
      isClose,
      change
    }
  }
}

</script>

<style lang="less" scoped>
.menu{
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  background:#112f50 ;
}
.content{
  padding-left:151px;
}
.active{
  padding-left:64px;
}
</style>