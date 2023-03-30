<template>
    <div class="big">
        <span>摄像头设置</span>
        <img class="img" :src="img_src"/>
        <div class="bg">
            <span>背景图片</span>
            <!-- 上传图片按钮 -->
            <!-- 打开摄像头按钮 -->
            <!-- 拍照按钮 -->
        </div>
        <div class="source">
            <span>视频源</span>
            <!-- 上传视频文件 -->
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let img_src = ref(require('@/assets/img/moren.webp'));

</script>

<style>
.big{
    display:flex;
    flex-direction: column;
}
.big > span{
    text-align: center;
    font-weight: 700;
    font-size: 14px;
}
.img{
    width: 90%;
    height: 80%;
    margin-left:2%;
}
.bg{
    display:flex;
    text-align: left;
}
.bg > span{
    font-size:12px;
}
.source{
    display:flex;
    text-align: left;
}
</style>