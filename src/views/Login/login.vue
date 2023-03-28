<template>
  <div class="container">
    <div class="box1">
      <div class="box2">
        <el-input class="input" v-model="username" placeholder="请输入账号" :prefix-icon="User">账号</el-input>
        <el-input class="input" type="password" v-model="password" placeholder="请输入密码" :prefix-icon="Key">密码</el-input>
        <el-button class="btn" type="primary" size="default" @click="clickLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script setup >
import { ref } from 'vue'
import {User,Key } from '@element-plus/icons-vue'
import router from "@/router";
import axios from 'axios'
const username = ref('')
const password = ref('')
const baseURL = ref('http://127.0.0.1:8000');
const clickLogin = async()=>{
  try {
    const response = await axios.post(baseURL+'/api/users/login',{
      username:username.value,
      password:password.value
    });
    console.log(response.data)
    if(response.code === 200){
       await router.push('/home')
    }else if(response.code === 500){
      console.log("code = 500")
    }
  }catch (error){
    console.error(error)
  }
}
</script>
<style>
.container{
  height: 100%;
  width: 100%;
  display: flex;
  /*background-color: greenyellow;*/
  justify-content: center;
  align-items: center;

}
.box1{
  height: 50%;
  width: 50%;
  /*background-color: pink;*/
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px 10px grey;
  border-radius: 20px;
}
.box2{
  height: 50%;
}
.input{
  margin-top: 5%;
  height: 12%;
}
.btn{
  margin-top: 10%;
  align-items: center;
}


</style>

