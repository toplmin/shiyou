<template>
  <div class="container">
    <div class="box1">
      <div class="box2">
        <h2 class="title">人员定位跟踪系统</h2>
      </div>
      <div class="box3">
        <el-input class="input" v-model="username" placeholder="请输入账号" :prefix-icon="User">账号</el-input>
        <el-input class="input" type="password" v-model="password" placeholder="请输入密码" :prefix-icon="Key">密码</el-input>
        <div class="box4">
          <el-button class="btn1" type="primary" size="default" @click="reset">重 置</el-button>
          <el-button class="btn2" type="primary" size="default" @click="clickLogin">登 录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from 'vue'
import {User,Key, Message } from '@element-plus/icons-vue'
import router from "@/router";
import axios from 'axios'
const username = ref('')
const password = ref('')
// const baseURL = ref('http://127.0.0.1:8000');
const clickLogin = async()=>{
  try {
    const response = await axios.post('/api/users/login',{
      username:username.value,
      password:password.value
    });
    console.log('4.9',response.data)
    if (response.data.code === 200) {
      await router.push('/home')
       
    }else if(response.data.code === 500){
      ElMessage.error('用户名和密码不匹配~')
      // alert('用户名和密码不匹配~');
    }
  }catch (error){
    console.error(error)
  }
}

</script>

<style scoped>
.container{
  height: 100%;
  width: 100%;
  display: flex;
  /* background-color: greenyellow; */
  justify-content: center;
  align-items: center;

}
.box1{
  height: 40%;
  width: 40%;
  /*background-color: pink;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px 10px grey;
  border-radius: 20px;
}
.box2{
  height:10%;
}
.title {
    color: rgb(0, 136, 255);
    font-family: 'Times New Roman', Times, serif;
    text-shadow: 1px 1px 2px rgb(0, 136, 255);
  }
.box3{
  height: 50%;
  margin-top:5%;
}
.input{
  height: 15%;
  width:80%;
  margin-top: 5%;
  margin-left:10%;
}
.box4{
  height:50%;
}
.btn1{
  margin-top: 5%;
  /* align-items: center; */
  margin-left:28%;
}

.btn2{
  margin-top:5%;
  margin-left:10%;
}


</style>

