<template>
  <div class="all">
    <!-- 1.头部条 -->
    <div class="header">
      <!-- 折叠菜单栏 -->
      <div class="icon">
        <el-icon v-if="isClose" @click="change"><Expand /></el-icon>
        <el-icon v-else @click="change"><Fold /></el-icon>
      </div>
      <!-- 显示时间和退出系统 -->
      <div class="right">
        <div class="time">2023-03-30</div>
      </div>
    </div>
    <!-- 2.内容界面 -->
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default{
  props:['isClose'],
  emits:['change'],
  setup(props,{emit}){
    // 切换菜单的折叠和展开
    const change = ()=>{
      emit('change')
    }

    return {
      change,
    }
  },
  
  
}
</script>

<style lang="less" scoped>
.all{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header{
  height: 4%;
  line-height:50px;
  background:#0d4f82;
  color:#fff;
  display:flex;
}
.wrapper{
  height:96%;
}
.icon{
  font-size:24px;
  flex:1;
  i{
    cursor:pointer;
  }
}
.right{
  // float:right;
  padding-right:20px;
  .time{
    font-size:14px;
  }
}

</style>