<template>
  <div class="container">
<!--      上半部分-->
    <div class="topPart">
      <div class="areaMap">
        <span class="text">园区地图</span>
        <div class="div1">
          <el-button class="btn">区域1</el-button>
          <el-button class="btn">区域1</el-button>
          <el-button class="btn">区域1</el-button>
        </div>
      </div>

      <div class="streamPart">
        <span class="text">已订阅监控视频流</span>
        <div class="div2">
          <div class="streamPart_top">
            <div class="block">
              <span>监控1</span>
              <div class="stream"></div>
            </div>
            <div class="block">
              <span>监控2</span>
              <div class="stream"></div>
            </div>
            <div class="block">
              <span>监控3</span>
              <div class="stream"></div>
            </div>
          </div>
          <div class="streamPart_bottom">
            <el-button class="stream_btn" type="primary">确定</el-button>
            <el-button class="stream_btn" type="primary">全部订阅</el-button>
            <el-button class="stream_btn" >全部取消</el-button>
          </div>
        </div>
      </div>

    </div>

<!--      下半部分-->
    <div class="bottomPart">
      <div class="monitorList">
        <span class="text">监控列表</span>
        <div class="div3">
          <div class="monitorList_top">
            <div class="block1">
              <span>监控1</span>
              <div class="stream1"></div>
            </div>
            <div class="block1">
              <span>监控2</span>
              <div class="stream1"></div>
            </div>
            <div class="block1">
              <span>监控3</span>
              <div class="stream1"></div>
            </div>
          </div>
          <div class="monitorList_bottom">
            <el-button class="monitor_btn" type="primary">添加</el-button>
            <el-button class="monitor_btn" >取消</el-button>
          </div>
        </div>
      </div>

      <div class="pushServer">
        <span class="text">推送目标服务器</span>
        <div class="div4">
          <div class="pushServer_top">
            <div>
              <span>IP:</span>
              <el-input class="input1" v-model="ip" placeholder="请输入IP"></el-input>
            </div>
            <div>
              <span>view_id:</span>
              <el-input class="input2" v-model="view_id" placeholder="请输入场景id"></el-input>
            </div>
            <div>
              <span>camera_id:</span>
              <el-input class="input3" v-model="camera_id" placeholder="请输入相机编号"></el-input>
            </div>
          </div>
          <div class="pushServer_bottom">
            <el-button class="pushServer_btn" type="primary" @click="subcripe">订阅</el-button>
            <el-button class="pushServer_btn" >取消</el-button>
          </div>
        </div>
      </div>

      <div class="traceLog">
        <span class="text">轨迹日志</span>
        <div class="div5">
          <div class="traceLog_top">
            <span>切换轨迹流：</span>
            <el-select v-model="value" class="select" placeholder="选择视频流" size="default">
            <el-option       v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value" />
            </el-select>
          </div>
          <div class="traceLog_bottom">
            <span class="traceLog_text">轨迹1</span>
            <span class="traceLog_text">轨迹2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  <el-button>gg</el-button>-->
<!--  <el-button>gg</el-button>-->
<!--  <el-button >gg</el-button>-->
</template>
<script setup>
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { ref} from 'vue'
const value = ref("")
const options = [
{
  value: 'Option1',
  label: 'Option1',
},
{
  value: 'Option2',
  label: 'Option2',
}
]
// import qs from 'qs';

const ip = ref("");
const view_id = ref("");
let camera_id = ref("")
console.log("carmera_id", camera_id.value)


function subcripe(){
  axios.post('/api/users/subscribe', {
    view_id: view_id.value,
    ip: ip.value,
    camera_id: parseInt(camera_id.value)
  }).then(resopnse=>{
    console.log("2023.5.8 resopnse 订阅：",resopnse);
    if(resopnse.data.code == 200){
      ElMessage.success("订阅成功！")
    }
  })
  console.log("打印parseInt(camera_id.value)的类型：", typeof parseInt(camera_id.value))
  // console.log("打印formData:",formData)
}

</script>

<style scoped>
.container{
width: 100%;
height: 100%;
position: fixed;
/*background-color: pink;*/
}
.text{
display: block;
margin-bottom: 6px;
}

/*-------------------------------------------------上半部分---------------------------------------------*/
.topPart{
display: flex;
height: 55%;
width: 100%;
/*background-color: #36a3f7;*/
}
/*============================================园区地图=============================================*/
.areaMap{
height: 90%;
width: 30%;
margin: 1% 1%;
}
.btn{
width: 90%;
height: 10%;
display: inline-block;
margin:2% 5%;
}
.div1{
height: 100%;
width: 100%;
border: 2px solid grey;
}
/*==========================================已订阅监控视频流===========================================*/
.streamPart{
height: 90%;
width: 60%;
margin: 1% 1%;
}
.div2{
height: 100%;
width: 100%;
border: 2px solid grey;
}
.streamPart_top{
display: flex;
width: 100%;
height: 65%;
/*background-color: pink;*/
}
.block{
width: 30%;
height: 90%;
/*background-color: #36a3f7;*/
margin: 1% 2%;
}
.stream{
width: 90%;
height: 90%;
border: 2px solid grey;
}
.streamPart_bottom{
width: 100%;
height: 35%;
}
.stream_btn{
width: 90%;
height: 12%;
display: inline-block;
margin:0.5% 5%;

}

/*----------------------------------------------------下半部分-----------------------------------------*/
.bottomPart{
display: flex;
height: 45%;
width: 100%;
/*background-color:forestgreen;*/
}
/*================================================监控列表============================================*/
.monitorList{
height: 80%;
width: 30%;
/*border: 2px solid grey;*/
margin-left: 1%;
}
.div3{
height: 100%;
width: 100%;
border: 2px solid grey;
}
.monitorList_top{
display: flex;
width: 100%;
height: 65%;
/*background-color: pink;*/
}
.block1{
width: 33%;
height: 90%;
/*background-color: #36a3f7;*/
margin: 1% 2%;
}
.stream1{
width: 100%;
height: 90%;
border: 2px solid grey;
}
.monitorList_bottom{
width: 100%;
height: 35%;
}
.monitor_btn{
width: 90%;
height: 20%;
display: inline-block;
margin:2% 5%;

}
/*==========================================推送目标服务器=====================================*/
.pushServer{
height: 80%;
width: 30%;
/*border: 2px solid grey;*/
margin-left: 1%;
}
.div4{
height: 100%;
width: 100%;
border: 2px solid grey;
}
.pushServer_top{
width: 90%;
height: 60%;
margin: 2% 5%;
}
.input1{
width: 80%;
margin-top: 1% ;
margin-bottom: 2%;
margin-left: 10%;
}
.input2{
width: 80%;
margin-top: 1% ;
margin-bottom: 2%;
margin-left: 4%;
}
.input3{
width: 80%;
margin-top: 1% ;
margin-bottom: 2%;
margin-left: 1%;
}
.pushServer_bottom{
width: 100%;
height: 40%;

}
.pushServer_btn{
width: 90%;
height: 20%;
display: inline-block;
margin:2% 5%;

}
/*=============================================轨迹日志============================================*/
.traceLog{
height: 80%;
width: 30%;
/*border: 2px solid grey;*/
margin-left: 1%;
}
.div5{
height: 100%;
width: 100%;
border: 2px solid grey;
}
.traceLog_top{
width: 100%;
height: 10%;
margin: 2% 2%;
}
.select{
width: 80%;
}
.traceLog_bottom{
width: 100%;
height: 90%;
margin: 2% 2%;
/*background-color: pink;*/
}
.traceLog_text{
display: block;
/*margin: 2% 2%;*/
margin-top: 2%;
border: 2px solid grey;
width: 90%;
}
</style>
