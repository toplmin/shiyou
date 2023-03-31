<template>
    <div class="videoContent">
        <!-- 摄像头画面播放器 -->
        <div class="playerBorder">
            <canvas id="play_canvas" v-if="showCanvas" ref="videoCanvas" class="video_canvas"></canvas>
        </div>
        <div class="bg">
            <div class="span"><span>背景图片:</span></div>
            <!-- 上传图片按钮 -->
            <div class="upload-bg">
                <el-upload
                    ref="upload"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :limit="1"
                    :auto-upload="false"
                >
                    <template #trigger>
                        <el-button type="primary">上传背景图片</el-button>
                    </template>
                </el-upload>
            </div>
            <!-- 打开摄像头按钮 -->
            <div>
                <el-button class="btn " type="primary" @click="startCamera">打开</el-button>
            </div>
            <!-- 拍照按钮 -->
            <div>
                <el-button class="btn " type="primary" @click="takePhoto">拍照</el-button>
            </div>
        </div>
        <div class="source">
            <div class="span"><span>视频源:</span></div>
            <!-- 上传视频文件 -->
            <div class="upload-video">
                <el-upload
                ref="upload"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
                >
                    <template #trigger>
                        <el-button type="primary">上传视频文件</el-button>
                    </template>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

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
//拍照
function takePhoto() {
  if (!player) {
    return;
  }
  var data = document.getElementById("play_canvas").toDataURL();
  if(clickCount.value == 0){
    img1_src.value = data//因为ref定义的变量是实例  好像是得通过.value修改。。。
  }
  clickCount.value = clickCount.value % 1;
}

</script>

<style>
.playerBorder{
    width: 80%;
    height: 68%;
    margin-left:8%;
    border:3px solid #717274;
}
.video_canvas{
    width: 100%;
    height: 100%;
}
.bg ,
.source{
    display:flex;
    height:20%;
    text-align: center;
    margin-top:1%;
}
.span
{
    font-size: 13px;
    margin-top:2%;
    margin-left:8%;
}
.upload-bg{
    margin-left: 5%;
}
.btn{
    width: 80%;
    margin-left: 3%;
}
.upload-video{
    margin-left: 8%;
}
.upload-video > el-upload{
    width: 100%;
}

</style>