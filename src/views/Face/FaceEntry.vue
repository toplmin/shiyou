<template>
    <div class="camera-container">
      <div class="videoLeft">
        <!-- 播放器-->
        <div class="playerBorder">
          <!-- <div id="player" class="jsmpeg" data-url="ws://127.0.0.1:3000" ></div>-->
          <canvas id="play_canvas" v-if="showCanvas" ref="videoCanvas" class="video_canvas"></canvas>
        </div>
        <div class="video-button">
          <div>
            <el-button class="btn " type="primary" @click="startCamera">打开摄像头</el-button>
          </div>
          <div>
            <el-button class="btn " type="primary" @click="stopCamera">关闭摄像头</el-button>
          </div>
          <div>
            <el-button class="btn " type="primary" @click="takePhoto">拍照</el-button>
          </div>
          <div>
            <el-button class="btn " type="primary">提交</el-button>
          </div>
          <div>
            <el-button class="btn " type="primary">人脸特征查询</el-button>
          </div>
          <div>
            <el-button class="btn " type="primary">导入图片</el-button>
          </div>
        </div>
        <div class="video_ipt">
          <div>
            <el-input class="ipt" v-model="id" placeholder="请输入人员id" />
          </div>
          <div>
            <el-input class="ipt" v-model="name" placeholder="请输入人员姓名" />
          </div>
          <div>
            <el-button class="sava_btn"  type="primary" @click="save">保存</el-button>
          </div>
        </div>
  
      </div>
      <div class="videoRight">
        <img class="img1 " :src="img1_src"/>
        <img class="img1 " :src="img2_src"/>
        <img class="img1 " :src="img3_src"/>
        <img class="img1 " :src="img4_src"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  //========================================打开、关闭、拍照功能=======================================================
  
  //定义图片实例
  let img1_src = ref(require('@/assets/img/moren.webp'));
  let img2_src = ref(require('@/assets/img/moren.webp'))
  let img3_src = ref(require('@/assets/img/moren.webp'))
  let img4_src = ref(require('@/assets/img/moren.webp'))
  //定义拍照点击次数
  let clickCount = ref("0")
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
  }
  //拍照
  function takePhoto() {
    if (!player) {
      return;
    }
    var data = document.getElementById("play_canvas").toDataURL();
    if(clickCount.value == 0){
      img1_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
    }
    else if(clickCount.value == 1){
      img2_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
    }
    else if(clickCount.value == 2){
      img3_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
    }
    else if (clickCount.value == 3){
      img4_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
    }
    clickCount.value = clickCount.value + 1;
    clickCount.value = clickCount.value % 4;
  }
  //========================================输入人员id和姓名进行“保存”功能=======================================================
  const id = ref("")
  const name = ref("")
  function save(){
    alert("保存成功")
  }
  //========================================将照片“提交”到算法模块功能=======================================================
  
  
  //========================================人脸特征查询 功能=======================================================
  
  
  //========================================从本地 导入图片 功能=======================================================
  
  </script>
  <style scoped>
  .camera-container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  
  .playerBorder {
    margin-top: 1%;
    margin-left: 10px;
    width: 50%;
    height: 50%;
    border: 2px solid grey;
  }
  
  .video_canvas {
    /*visibility:hidden;*/
    width: 100%;
    height: 100%;
  }
  
  .videoLeft {
    width: 40%;
    margin-top: 3%;;
  }
  
  .video-button {
    display: flex;
    padding: 3%;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .video-button div {
    width: 50%;
    margin-bottom:10px;
  }
  
  .btn {
    /*margin: 3%;*/
    width: 90%;
    height: 40px;
  }
  .video_ipt{
    /*display: flex;*/
    padding: 3%;
    /*justify-content: space-around;*/
    /*flex-wrap: wrap;*/
  }
  /*.video-ipt div {*/
  /*  width: 50%;*/
  /*}*/
  .ipt{
    margin-top: 1%;
    width: 100%;
    height: 40px;
  }
  .sava_btn{
    width: 100%;
    margin-top: 5%;
  }
  .videoRight {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    /*background-color: red;*/
    align-items: center;
    justify-content: space-evenly;
  }
  
  .videoRight img {
    width: 45%;
    height: 34%;
  }
  </style>
  