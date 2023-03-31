<template>
    <div class="gait">
        <div class="top">
            <div class="left">
                <!-- 视频框 -->
                <div class="playerBorder">
                    <canvas id="play_canvas" class="video-canvas"></canvas>
                </div>
                <!-- 按钮 -->
                <div class="buttonLeft">
                    <el-button class="btn" type="primary">重播</el-button>
                    <el-button class="btn" type="primary">暂停</el-button>
                    <el-button class="btn" type="primary">提取步态特征</el-button>
                </div>
                <!-- 人员姓名 -->
                <div class="person">
                    <el-input class="ipt" v-model="name" placeholder="请输入人员姓名" />
                    <el-button class="save_btn"  type="primary" @click="save">录入</el-button>
                </div>
            </div>
            <div class="right">
                <!-- 按钮 -->
                <div class="buttonRight">
                    <el-button class="btn" type="primary">导入背景图片</el-button>
                    <el-button class="btn1" type="primary">录制步态</el-button>
                    <el-button class="btn1" type="primary">导入视频</el-button>
                </div>
                <!-- 视频框 -->
                <div class="playerBorder2">
                    <canvas ref="videoCanvas" class="video-canvas"></canvas>
                </div>
            </div>
        </div>
        <div class="bottom">
            <h2>提示信息xxxxxxxxxxxxxxx</h2>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.gait{
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
}
.top,
.bottom{
    display: flex;
    width:80%;
    margin-top:4%;
    margin-left:10%;
    margin-right:10%;
}
.bottom{
    border:2px solid rgb(242, 238, 238);
}

.left,
.right{
    display: flex;
    flex-direction: column;
    width:50%;
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
.playerBorder2{
    margin-top:3%;
}
.video-canvas {
    width: 100%;
    height: 100%;
}

.buttonLeft,
.buttonRight{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.buttonLeft{
    margin-top:3%;
}
.person{
    display: flex;
    margin-top:3%;
}
.ipt{
    width:50%;
    margin-left:7%;
}
.save_btn{
    margin-left:23%;
}

</style>