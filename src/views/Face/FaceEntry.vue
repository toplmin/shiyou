<template>
  <div class="container">
    <!-- 最上方展示视频-->
    <div class="top">
      <!-- 左上方播放器 -->
      <div class="top-left">
        <span>摄像头</span>
        <div class="playerBorder">
          <canvas id="play_canvas" v-show="showCanvas" ref="videoCanvas" class="video-canvas"></canvas>
        </div>
      </div>
      <!-- 右侧打开关闭相机按钮和输入人员信息 -->
      <div class="top-right">
        <div class="vbtn">
          <el-button class="btn" type="primary" @click="startCamera">打开摄像头</el-button>
          <el-button class="btn" type="primary" @click="stopCamera">关闭摄像头</el-button>
        </div>
        <div class="people">
        <el-input class="ipt" v-model="id" placeholder="请输入人员id" />
        <el-input class="ipt" v-model="name" placeholder="请输入人员姓名" />
        <el-button class="sava_btn"  type="primary" @click="save">保存</el-button>
      </div>
      </div>
    </div>

    <!-- 下方展示框 -->
    <div class="bottom">
      <!-- 1.上面人脸展示 -->
      <div class="faceShow">
          <div class="face">
            <span>人脸正面</span>
            <img class="img1 " :src="img1_src"/>
            <div class="fbtn">
              <el-button type="primary" @click="takePhoto1" class="btn1">拍照</el-button>
              <el-button type="primary" @click="retake1" class="btn1">重拍</el-button>
              <el-button type="primary" @click="importPhote1" class="btn1">导入图片</el-button>
            </div>
          </div>
          <div class="face">
            <span>人脸左45度</span>
            <img class="img1 " :src="img2_src"/>
            <div class="fbtn">
              <el-button type="primary" @click="takePhoto2" class="btn1">拍照</el-button>
              <el-button type="primary" @click="retake2" class="btn1">重拍</el-button>
              <el-button type="primary" @click="importPhote2" class="btn1">导入图片</el-button>
            </div>
          </div>
          <div class="face">
            <span>人脸右45度</span>
            <img class="img1 " :src="img3_src"/>
            <div class="fbtn">
              <el-button type="primary" @click="takePhoto3" class="btn1">拍照</el-button>
              <el-button type="primary" @click="retake3" class="btn1">重拍</el-button>
              <el-button type="primary" @click="importPhote3" class="btn1">导入图片</el-button>
            </div>
          </div>
      </div>
      <!-- 2.下面特征抽取展示 -->
      <!-- <div class="featureShow">
          <div class="feature">
            <img class="img1 " :src="img4_src"/>
            <el-button class="fbtn1" type="primary">特征抽取</el-button>
          </div>
          <div class="feature">
            <img class="img1 " :src="img5_src"/>
            <el-button class="fbtn1" type="primary">特征抽取</el-button>
          </div>
          <div class="feature">
            <img class="img1 " :src="img6_src"/>
            <el-button class="fbtn1" type="primary">特征抽取</el-button>
          </div>
      </div> -->
    </div>
  </div>
</template>

<script setup >
import {ref} from 'vue'
import {Discount} from "@element-plus/icons-vue";
import axios from 'axios';
//========================================打开、关闭、拍照功能=======================================================

//定义图片实例
let img1_src = ref(require('@/assets/img/moren.webp'));
let img2_src = ref(require('@/assets/img/moren.webp'))
let img3_src = ref(require('@/assets/img/moren.webp'))

//定义拍照点击次数
// let clickCount = ref("0")
//拉流 定义播放器player  画布videoCanvas
const videoCanvas = ref(null);
const url = 'ws://127.0.0.1:3000';
let player = ref(null);
//showCanvas 通过v-if来控制canves的显示和隐藏
const showCanvas = ref(false);
//打开摄像头
function startCamera() {
  showCanvas.value = true;
  player = new JSMpeg.Player(url, {
    canvas: videoCanvas.value,
    preserveDrawingBuffer: true,
  });
  player.play();
};
//关闭摄像头
function stopCamera() {
  showCanvas.value = false
  img1_src = ref(require('@/assets/img/moren.webp'));
  img2_src = ref(require('@/assets/img/moren.webp'));
  img3_src = ref(require('@/assets/img/moren.webp'));

}
//拍照
function takePhoto1() {
  console.log(showCanvas.value)
  if (showCanvas.value == false) {
    ElMessage.error('请先打开摄像头')
  }
  else{
    var data = document.getElementById("play_canvas").toDataURL();
    img1_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。   
  }
}
function takePhoto2() {
  if (showCanvas.value == false) {
    ElMessage.error('请先打开摄像头')
  }
  else{
    var data = document.getElementById("play_canvas").toDataURL();
    img2_src.value = DataView
  }

}
function takePhoto3() {
  if (showCanvas.value == false) {
    ElMessage.error('请先打开摄像头')
  }
  else{
    var data = document.getElementById("play_canvas").toDataURL();
    img3_src.value = data
  }

}

//重拍
function retake1(){
  if (showCanvas.value == false) {
    ElMessage.error('请先打开摄像头')
  }
  else{
    var data = document.getElementById("play_canvas").toDataURL();
    console.log(data)
    img1_src.value = data
  }
}
function retake2(){
  if (showCanvas.value == false) {
    ElMessage.error('请先打开摄像头')
  }
  else{
    var data = document.getElementById("play_canvas").toDataURL();
    img2_src.value = data
  }
}
function retake3(){
  if (showCanvas.value == false) {
    ElMessage.error('请先打开摄像头')
  }
  else{
    var data = document.getElementById("play_canvas").toDataURL();
    img3_src.value = data
  } 
}
//导入图片
function blobToBase64(url){
  //fetch方法是一个异步的操作，它返回一个promise对象，这个对象包含了一个response对象，
  //其中包含了响应的一些信息，如状态码、头部、内容等。
  return  fetch(url)
          .then( response => response.blob() )
          .then( blob => new Promise( callback =>{
              let reader = new FileReader() ;
              reader.onload = function(){ callback(this.result) } ;
              reader.readAsDataURL(blob) ;
          }) ) ;
    }
//图片上传
let fileUrl1 = ref("");
let fileUrl2 = ref("");
let fileUrl3 = ref("");
function handleFileUpload(event,num){
  let file = event.target.files[0];
  let fileUrl = URL.createObjectURL(file);
  // 想要从fetch方法中返回响应的内容，不能直接返回response或response.json()等，
  // 因为它们都是promise对象，而不是真正的数据。
  //then()或async/await等方式来处理promise对象，等待它们被解析后再返回数据
  if (num == 1) {
    fileUrl1 = fileUrl;
  }
  if (num == 2) {
    fileUrl2 = fileUrl;
  }
  if (num == 3) {
    fileUrl3 = fileUrl;
  }
  blobToBase64(fileUrl).then(dataUrl=>{
    if(num == 1){
      img1_src.value = dataUrl;
    }
    if(num == 2){
      img2_src.value = dataUrl;
    }
    if(num == 3){
      img3_src.value = dataUrl;
    }
  })
}; 

function importPhote1(){
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = (event) => handleFileUpload(event,1);
  input.click();
}
function importPhote2(){
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = (event) => handleFileUpload(event,2);
  input.click();
}
function importPhote3(){
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = (event) => handleFileUpload(event,3);
  input.click();
}
  
//========================================输入人员id和姓名进行“保存”功能=======================================================
const id = ref("")
const name = ref("")
//base64编码的格式c

function save() {
  console.log("fileUrl1", fileUrl1);
  console.log("fileUrl2", fileUrl2);
  console.log("fileUrl3", fileUrl3);

  console.log("name.value", name.value)
  console.log("id.value", id.value)

  console.log("typeof id.value",typeof parseInt(id.value))
  Promise.all([blobToBase64(fileUrl1), blobToBase64(fileUrl2), blobToBase64(fileUrl3)]).then(data => {
    axios.post("api/users/add_person", {
      name: name.value,
      id: parseInt(id.value),
      face_path_1: data[0],
      face_path_2: data[1],
      face_path_3: data[2]
      // name: "hhh",
      // id: 1,
      // face_path_1: "1",
      // face_path_2: "2",
      // face_path_3: "3"
    }).then((response) => {
      console.log(response)
      if (response.data.code == 200) {
        ElMessage.success("保存成功！")
      }
      if (response.data.code == 500) {
        ElMessage.error("保存失败")
      }
    })
    console.log("data[0]", data[0]),
    console.log("data[1]", data[1]),
    console.log("data[2]", data[2])
  }
     
  )
}

</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.top{
  display: flex;
  width:100%;
  height: 40%;
  /* margin-top:1%; */
}
.top-left{

  width:55%;
  /* background-color: pink; */

}

.top-left > span{
  display: inline-block;
  margin:1% 40%;
}
.top-left > .playerBorder{
  width: 60%;
  height: 90%;
  margin-left:12%;
  border: 1px solid #1b1c1d;
  background-color: rgb(242, 238, 238);
}
.video-canvas {
  width: 100%;
  height: 100%;
  /* position: fixed; */
}

.top-right{
  width:45%;
  margin-top: 1%;
  /* background-color: green; */
}
.top-right > .vbtn{
  width:100%;
  margin-top:3%;
  /* background-color: grey; */
}
.btn{
  width:25%;
  margin-right:8%;
  background-color: #36a3f7;
}
.people{
  width:100%;
  margin-top: 2%;
  /* display: flex;
  flex-direction: column; */
}
.ipt{
  width: 60%;
  margin-top:2%;
  border:1px solid #36a3f7;
}
.sava_btn{
  width: 60%;
  margin-top:2%;
  background-color: #36a3f7;
}
.bottom{
  display: flex;
  flex-direction: column;
  width:100%;
  height: 50%;
  margin-top: 2%;
}
.faceShow{
  display: flex;
  width:95%;
  height: 100%;
  margin-left:3%;
  background-color: rgb(242, 238, 238);
  justify-content: space-evenly;
}
.face{
  /* display: flex;
  flex-direction: column; */
  width: 30%;
}
.face > span{
  /* width:40%; */
  display: inline-block;
  margin:2% 38%;
}
.face > .img1{
  width: 100%;
  height: 85%;
  border:1px solid #1b1c1d;
}
.face > .fbtn{
  display: flex;
  width: 100%;
  margin-top: 1%;
  /* background-color: pink; */
}
.btn1{
  width: 80%;
}
.featureShow{
  display: flex;
  width:90%;
  margin-left:5%;
  margin-top:2%;
  background-color: rgb(242, 238, 238);
  justify-content: space-evenly;
}
.feature{
  display: flex;
  flex-direction: column;
}
.feature > .img1{
  width: 80%;
  height: 100%;
  border:1px solid #1b1c1d;
  margin-top:5px;
}
.feature > .fbtn1{
  width:40%;
  margin-left:18%;
}
</style>
