<template>
    <div class="video">
        <div class="first">
            <div class="one">
                <span class="title">摄像头1设置</span>
                <VideoSetContent/>
            </div>
            <div class="two">
                <span class="title">摄像头2设置</span>
                <VideoSetContent/>
            </div>
            <div class="three">
                <span class="title">摄像头3设置</span>
                <VideoSetContent/>
            </div> 
        </div>
        <div class="second">
            <div class="four">
                <span class="title">摄像头4设置</span>
                <VideoSetContent/>
            </div>
            <div class="five">
                <span class="title">摄像头5设置</span>
                <VideoSetContent/>
            </div>
            <div class="six">
                <span class="title">摄像头6设置</span>
                <VideoSetContent/>
            </div> 
        </div>
        <div class="third">
            <div class="seven">
                <span class="title">摄像头7设置</span>
                <VideoSetContent/>
            </div>
            <div class="eight">
                <span class="title">摄像头8设置</span>
                <VideoSetContent/>
            </div>
            <div class="nine">
                <span class="title">摄像头9设置</span>
                <VideoSetContent/>
            </div> 
        </div>
    </div>
</template>

<script>
import VideoSetContent from '@/components/VideoSetContent.vue'
import {Search} from "@element-plus/icons-vue";
export default{
  components: {Search},
  props:{ VideoSetContent}
}
</script>

<style scoped>
.video{
    width: 100%;
    height: 100%;
  position: fixed;
}
.first,.second,.third{
    width: 100%;
    height:31%;
    display:flex;
    margin-left:1%;
}
  .one,
  .two,
  .three,
  .four,
  .five,
  .six,
  .seven,
  .eight,
  .nine
  {
    display:flex;
    flex-direction: column;
    background-color:  rgb(242, 238, 238);
    margin-top:1%;
    height:95%;
    width:29.5%;
    margin-left:1%;
}
.title{
    text-align: center;
    font-weight: 700;
    font-size: 14px;
}
</style>