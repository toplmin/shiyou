<template>
    <div class="camera-container">
      <!-- 最上方按钮 -->
      <div class="video-top">
        <div class="videoButton">
          <el-button class="btn" type="primary" @click="startCamera">打开摄像头</el-button>
          <el-button class="btn" type="primary" @click="takePhoto">拍照</el-button>
          <el-button class="btn" type="primary">导入图片</el-button>
          <el-button class="btn" type="primary">人脸特征抽取</el-button>
          <el-button class="btn" type="primary" @click="stopCamera">关闭摄像头</el-button>
        </div>
      </div>
      <!-- 下方的视频框 -->
      <div class="video-bottom">
        <div class="video-bottom-left">
          <!-- 1.播放器 -->
          <span>摄像头</span>
          <div class="playerBorder">
            <canvas id="play_canvas" v-if="showCanvas" ref="videoCanvas" class="video-canvas"></canvas>
          </div>
          <!-- 2.人脸照片 -->
          <div class="videoImg">
            <div>
              <span>人脸正面</span>
              <img class="img1 " :src="img1_src"/>
            </div>
            <div>
              <span>人脸左15度</span>
              <img class="img1 " :src="img2_src"/>
            </div>
            <div>
              <span>人脸右15度</span>
              <img class="img1 " :src="img3_src"/>
            </div>
          </div>
          <!-- 3.特征抽取框 -->
          <div class="featureImg">
            <div>
              <span>特征抽取</span>
              <img class="img1 " :src="img4_src"/>
            </div>
            <div>
              <span>特征抽取</span>
              <img class="img1 " :src="img5_src"/>
            </div>
            <div>
              <span>特征抽取</span>
              <img class="img1 " :src="img6_src"/>
            </div>
          </div>
        </div>
        <div class="video-bottom-right">
          <!-- 人员姓名输入框 -->
          <el-input class="ipt" v-model="id" placeholder="请输入人员id" />
          <el-input class="ipt" v-model="name" placeholder="请输入人员姓名" />
          <el-button class="sava_btn"  type="primary" @click="save">保存</el-button>
        </div>
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
  let img5_src = ref(require('@/assets/img/moren.webp'))
  let img6_src = ref(require('@/assets/img/moren.webp'))
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
    else if (clickCount.value == 4){
      img5_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
    }
    else if (clickCount.value == 5){
      img6_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
    }
    clickCount.value = clickCount.value + 1;
    clickCount.value = clickCount.value % 6;
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
    flex-direction: column;
  }
  .video-top{
    display: flex;
    width:100%;
    margin:10px;
    border-bottom:2px solid rgb(242, 238, 238);
  }
  .video-bottom{
    display: flex;
    width: 94%;
    border:2px solid rgb(242, 238, 238);
    margin-left:3%;
    margin-right:3%;
    margin-top:10px;
  }
  .videoButton{
    display: flex;
    width:100%;
    height:30%;
    padding-left:2%;
    margin-bottom:2px;
  }
  .btn{
    margin-right:8%;
    background-color: #36a3f7;
    width:30%;
  }
  
  .video-bottom-left {
    display: flex;
    flex-direction: column;
    width: 70%;
    height:100%;
    margin-top: 2%;
    margin-left:3%;
  }
  .video-bottom-right {
    display: flex;
    flex-direction: column;
    width: 20%;
    height:100%;
    margin-top: 25%;
    margin-left: 3%;
  }
  .video-bottom-left > span{
    width: 20%;
    margin-left: 45%;
    margin-bottom:10px;
  }
  .playerBorder {
    width: 50%;
    height: 60%;
    margin-left:25%;
    border: 1px solid #1b1c1d;
    background-color: rgb(242, 238, 238);
  }
  
  .video-canvas {
    width: 100%;
    height: 100%;
  }
  .videoImg{
    display: flex;
    width: 96%;
    height:55%;
    border:2px solid rgb(242, 238, 238);
    margin-top:3%;
    margin-left:2%;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(242, 238, 238);
  }
  .videoImg > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:16px;
    margin:5px;
  }

  .featureImg{
    display: flex;
    width: 96%;
    height:55%;
    border:2px solid rgb(242, 238, 238);
    margin-top:3%;
    margin-left:2%;
    margin-bottom:3%;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(242, 238, 238);
  }
  .featureImg > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:16px;
    margin:5px;
  }
  .img1{
    width: 45%;
    height: 65%;
    border:1px solid #1b1c1d;
    margin-top:5px;
  }
  .ipt{
    width: 100%;
    margin-bottom:10%;
    border:1px solid #36a3f7;
  }
  .sava_btn{
    width: 100%;
    background-color: #36a3f7;
  }

</style>
