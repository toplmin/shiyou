<template>
  <div class="Container">
    <div class="buttonTop">
      <h2>视频源</h2>
      <el-select v-model="value" class="selectBox" placeholder="请选择视频源">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <button class="btn" @click="openVideo">打开</button>
      <button class="btn" @click="closeVideo">关闭</button>
    </div>
    <div class="videoBottom">
      <video ref="videoPlayer" class="video"  autoplay controls></video>
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

const value = ref('')
const options = [
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
        ]
</script>

<style scoped>
.Container{
  width: 100%;
  height: 100%;
  position: fixed;
}
.buttonTop{
  width:70%;
  height:10%;
  margin-top:3%;
  margin-left:10%;
  margin-right:10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.videoBottom{
  width:100%;
  height:80%;
}

.video{
  width: 70%;
  height: 80%;
  margin-left:10%;
  margin-top:1%;
}
.btn{
  width: 12%;
  height:35px;
}
</style>