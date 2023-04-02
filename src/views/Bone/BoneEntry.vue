<template>
    <div class="boneEn">
        <div class="top">
            <!-- 图标 -->
            <el-icon size="30" color=""><Avatar /></el-icon>
            <!-- 输入人员姓名 -->
            <el-input class="ipt"  placeholder="请输入人员姓名" />
            <!-- 录入按钮 -->
            <el-button class="save_btn"  type="primary" >录入</el-button>
        </div>
        <div class="middle">
            <div class="left">
                <!-- 视频信息 -->
                <div class="playerBorder">
                    <canvas id="play_canvas" class="video-canvas"></canvas>
                </div>
                <!-- 三个按钮 -->
                <div class="buttonLeft">
                    <el-button class="btn" type="primary">重播</el-button>
                    <el-button class="btn" type="primary">暂停</el-button>
                    <el-button class="btn" type="primary">提取骨骼特征</el-button>
                </div>
            </div>
            <div class="right">
                <!-- 剪影信息 -->
                <div class="playerBorder2">
                    <canvas ref="videoCanvas" class="video-canvas"></canvas>
                </div>
                <!-- 三个按钮 -->
                <div class="buttonRight">
                    <el-button class="btn" type="primary">导入背景图片</el-button>
                    <el-button class="btn" type="primary">录制骨骼</el-button>
                    <el-button class="btn" type="primary">导入视频</el-button>
                </div>
            </div>
        </div>
        <div class="bottom">
            <!-- 提示信息文本框 -->
            <el-input type="textarea" :rows="10" placeholder="提示信息"/>
        </div>
    </div>
</template>

<style scoped>
.boneEn{
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.top{
    display:flex;
    width:80%;
    margin-left:30%;
    margin-top:2%;
}
.ipt{
    width:40%;
    margin-left:2%;
}
.save_btn{
    margin-left:1%;
}
.middle{
    display:flex;
    margin-top:3%;
    width:88%;
    height:120%;
    margin-left:6%;
}
.left,
.right{
    display:flex;
    flex-direction: column;
    width:45%;
    height:100%;
}
.right{
    margin-left:10%;
}
.playerBorder,
.playerBorder2{
    width: 100%;
    height: 80%;
    border: 1px solid #1b1c1d;
    background-color: rgb(242, 238, 238);
}
.video-canvas {
    width: 100%;
    height: 100%;
}
.buttonLeft,
.buttonRight{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:3%;
}
.btn{
    width:30%;
}
.bottom{
    width:88%;
    margin-top:3%;
    margin-left:6%;
}
</style>