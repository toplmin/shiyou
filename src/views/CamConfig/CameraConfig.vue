<template>
    <div class="container">
        <div class="div1">
            <span class="span1" >ip:</span>
            <el-input v-model="ip" placeholder="请输入ip" ></el-input>
        </div>
        <div class="div2">
            <span class="span2" >camera_id:</span>
            <el-input v-model="camera_id" placeholder="请输入相机编号" ></el-input>
        </div>
        <div class="div3">
            <span class="span3">rota_matrx:</span>
            <el-input v-model="rota_matrx" placeholder="请输入旋转矩阵" ></el-input>
        </div>
        <div class="div4">
            <span class="span4">trans_ector:</span>
            <el-input v-model="trans_ector" placeholder="请输入平移向量" ></el-input>
        </div>
        <div class="div5">
            <span class="span5">dists:</span>
            <el-input v-model="dists" placeholder="请输入畸形系数 " ></el-input>
        </div>
        <div class="div6">
            <span class="span6">inner_matrx:</span>
            <el-input v-model="inner_matrx" placeholder="请输入内参矩阵" ></el-input>
        </div>
        <div class="div7">
            <span class="span7">rota_vector:</span>
            <el-input v-model="rota_vector" placeholder="请输入旋转向量" ></el-input>
        </div>
        <el-button type="primary" class="btn" @click="save">保存</el-button>
    </div>
</template>

<script setup >
import Vue, { ref } from 'vue'
import axios from 'axios';
import { ElMessage } from 'element-plus';
const ip = ref("")
const camera_id = ref("")
const rota_matrx = ref("")
const trans_ector = ref("")
const dists = ref("")
const inner_matrx = ref("")
const rota_vector = ref("")
function save(){
    axios.post('/api/camera/add_camera',{
         ip : ip.value,
         camera_id : parseInt(camera_id.value),
         rota_matrx : rota_matrx.value,
         trans_ector : trans_ector.value,
         dists : dists.value,
         inner_matrx : inner_matrx.value,
         rota_vector : rota_vector.value
    }).then(resopnse=>{
        console.log("2023.5.8 resopnse:",resopnse);
        if(resopnse.data.code == 200){
            ElMessage.success("保存成功！")
        }
    })
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
}

.container>div{
    width: 50%;
    display: flex;
    margin: 2% 25%;
}

.span1{
    margin-right: 6.8%;
}
.span2{
    margin-right: 1.5%;
}
.span3{
    margin-right: 1%;
}
.span4{
    margin-right: 1%;
}
.span5{
    margin-right: 5%;
}
.span6{
    margin-right: 0.5%;
}
.span7{
    margin-right: 1%;
}
.btn{
    width: 50%;
    height: 3%;
    margin-left: 25%;
    /* margin-left: 2%; */
}
</style>