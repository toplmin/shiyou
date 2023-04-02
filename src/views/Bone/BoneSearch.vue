<template>
    <div class="container">
      <div class="topPart">
        <span >人员姓名</span>
        <el-input class="input" v-model='perName' placeholder="请输入人员姓名"></el-input>
        <el-button class="btn">删除</el-button>
      </div>

      <div class="midPart">
        <span class="span1">剪影信息</span>
        <div class="imgInfo">剪影信息展示</div>
      </div>

      <div class="bottomPart">
        <span class="span2">特征信息</span>
        <div class="characterInfo">特征信息展示</div>
      </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const perName = ref('')
</script>

<style scoped>
.container{
  width:100%;
  height: 100%;
  /*background-color: pink;*/
  position: fixed;
}
/*上面部分*/
.topPart{
  width: 100%;
  height: 5%;
  display: flex;
  margin:0% 15% 0% ;
  align-items: center;
}

.input{
  width: 50%;
  height: 50%;
  margin-left: 10px;
}
.btn{
  margin-left: 1%;
}
/*中间不部分*/
.midPart{
  width: 100%;
  height: 50%;
  /*border: 2px solid grey;*/
  /*background-color: #36a3f7;*/
}
.span1{
  margin-left: 7%;
}
.imgInfo{
  width: 80%;
  height: 90%;
  /*background-color: greenyellow;*/
  border: 2px solid grey;
  margin: 0.5% 7%;
}
/*下面部分*/
.bottomPart{
  width: 100%;
  height: 45%;
  /*background-color: gold;*/
  /*border: 2px solid grey;*/
}
.span2{
  margin-left: 7%;
}
.characterInfo{
  width: 80%;
  height: 75%;
  /*background-color: darkkhaki;*/
  border: 2px solid grey;
  margin: 0.5% 7%;

}
</style>