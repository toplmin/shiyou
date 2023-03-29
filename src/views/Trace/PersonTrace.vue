<template>
  <div class="Container">
    <div class="div1">
      <div class="video_top">
        <video ref="videoPlayer" class="video"  autoplay controls></video>
      </div>
    </div>

    <div class="btn_bottom">
      <button class="btn" @click="openVideo">打开视频文件</button>
<!--      <el-button class="btn" @click="playVideo">播放</el-button>-->
<!--      <el-button class="btn" @click="stopVideo">暂停</el-button>-->
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const videoPlayer = ref(null);

const openVideo = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = handleFileUpload;
  input.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const fileUrl = URL.createObjectURL(file);
  videoPlayer.value.src = fileUrl;
  videoPlayer.value.play();
};
// function playVideo(){
//   videoPlayer.value.play();
// }
// function stopVideo(){
//   videoPlayer.value.pause();
// }
</script>

<style scoped>
.Container{
  width: 100%;
  height: 100%;
  /*background-color: #24ff80;*/
}
.div1{
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: cornflowerblue;*/
}
.video_top{
  width: 90%;
  height: 85%;
  border: 2px solid grey;
  /*background-color: pink;*/
}
.video{
  width: 100%;
  height: 100%;
}
.btn_bottom{
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin-left: 3%;
  justify-content: center;
}
.btn{
  width: 32%;
  height: 40px;

}
</style>