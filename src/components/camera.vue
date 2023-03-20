<template>
  <div class="common-layout">

    <el-container>
      <el-aside width="40%">
        <el-row >
          <el-col>
<!--            <div id="divPlugin" width="500px" height="300px"></div>-->
            <video class="video" ref="video" width="960" height="680"></video>
            <img ref="photo" style="display: none;">
          </el-col>
        </el-row>

        <el-row class="level1">
          <el-button class="btn openVideo" type="primary" @click="startCamera" >打开摄像头</el-button>
          <el-button class="btn btn1 closeVideo" type="primary" @click="stopCamera">关闭摄像头</el-button>
        </el-row>

        <el-row >
          <el-button class="btn takePhoto" type="primary" @click="takePhoto">拍照</el-button>
          <el-button class="btn btn1 savePhoto" type="primary" >保存</el-button>
        </el-row>
      </el-aside>


      <el-main>
<!--        <canvas ref="canvas" width="300" height="300" ></canvas>-->
        <el-row>
          <el-col :span="10"><img class="img1 " v-bind:src="img1_src"/></el-col>
          <el-col :span="10"><img class="img1 " v-bind:src="img2_src"/></el-col>
        </el-row>
        <el-row style="margin-top: 10%">
          <el-col :span="10"><img class="img1 " v-bind:src="img3_src"/></el-col>
          <el-col :span="10"><img class="img1 " v-bind:src="img4_src"/></el-col>
        </el-row>

      </el-main>

    </el-container>
  </div>
</template>
<script>
// import {reactive} from 'vue'
// let mediaStream=reactive({})

export default {
  data() {
    return {
      mediaStream: null,
      img1_src:"",
      img2_src:"",
      img3_src:"",
      img4_src:"",
      current_index:0
    };
  },
  methods: {
    async startCamera() {
      // this.openCamera()
      try {
        const constraints = { video: true, audio: false };
        this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        this.$refs.video.srcObject = this.mediaStream;
        await this.$refs.video.play();

      } catch (error) {
        console.error('无法获取摄像头: ', error);
      }
    },
    stopCamera() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach((track) => track.stop());
        this.mediaStream = null;
        this.$refs.video.srcObject = null;
      }
    },
    takePhoto() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const photo = this.$refs.photo;
      console.log("@1",this.mediaStream)
      if(this.mediaStream)
      {
        const videoTracker = this.mediaStream.getVideoTracks()[0];
        console.log("@2",this.mediaStream)
        let imageCapture = new ImageCapture(videoTracker);
        imageCapture.takePhoto().then((blob)=>{
          if(this.current_index == 0)
            this.img1_src = URL.createObjectURL(blob)
          else if(this.current_index == 1)
            this.img2_src = URL.createObjectURL(blob)
          else if(this.current_index == 2)
            this.img3_src = URL.createObjectURL(blob)
          else
            this.img4_src = URL.createObjectURL(blob)
          this.current_index = (this.current_index + 1) % 4
        })
        // imageCapture.takePhoto().then((blob)=>{this.img2_src = URL.createObjectURL(blob)})
      }

      // canvas.getContext('2d').drawImage(video,0, 0, 300, 300);
      // const photoDataUrl = canvas.toDataURL('image/png');
      // photo.src = photoDataUrl;
      // photo.style.display = 'block';
    },

    //初始化
    init(){
      var ifSupport = window.WebVideoCtrl.I_SupportNoPlugin();
      if(!ifSupport){
        alert("浏览器不支持插件！");
        return;
      }
      else {
        console.log("@",ifSupport)
      }
      var g_iWndIndex = 0; //可以不用设置这个变量，有窗口参数的接口中，不用传值，开发包会默认使用当前选择窗口
      var version="websdk3.220191023"
      // 检查插件是否已经安装过
      var iRet = window.WebVideoCtrl.I_CheckPluginInstall();
      if (-1 == iRet) {
        alert("您还未安装过插件，双击开发包目录里的WebComponentsKit.exe安装！");
        return;
      }
      //嵌入播放插件
      WebVideoCtrl.I_InitPlugin(500, 300, {
        bWndFull: false,     //是否支持单窗口双击全屏，默认支持 true:支持 false:不支持
        // iPackageType: 2,
        //szColorProperty:"plugin-background:0000ff; sub-background:0000ff; sub-border:00ffff; sub-border-select:0000ff",   //2:PS 11:MP4
        iWndowType: 1,
        bNoPlugin: true,
        cbSelWnd: function (xmlDoc) {
          g_iWndIndex = parseInt($(xmlDoc).find("SelectWnd").eq(0).text(), 10);
          var szInfo = "当前选择的窗口编号：" + g_iWndIndex;
          console.log(szInfo)
          // showCBInfo(szInfo);
        },
        cbDoubleClickWnd: function (iWndIndex, bFullScreen) {
          var szInfo = "当前放大的窗口编号：" + iWndIndex;
          if (!bFullScreen) {
            szInfo = "当前还原的窗口编号：" + iWndIndex;
          }
          console.log(szInfo)
          // showCBInfo(szInfo);
        },
        cbInitPluginComplete: function () {
          WebVideoCtrl.I_InsertOBJECTPlugin("divPlugin");
          // 检查插件是否最新
          if (-1 == WebVideoCtrl.I_CheckPluginVersion()) {
            alert("检测到新的插件版本，双击开发包目录里的WebComponentsKit.exe升级！");
            return;
          }
        }
      });
    },

    //登录
    login(){
      var ip = "192.168.1.64"
      var port = "80"
      var username = "admin"
      var password = "12345qwer"
      // console.log("Md5", MD5(password))
      var iRet = WebVideoCtrl.I_Login(ip, 1, port, username, password, {
        success: function(xmlDoc) { //成功的回调函数
          console.log("登录成功")
          // console.log("@@",xmlDoc)
        },
        error: function(status,xml) { //失败的回调函数
          console.log("登录失败")
          // console.log(status,xml)
        }
      });
    },
    //开始预览
    openCamera(){
      console.log("open camera")
      var szDeviceIdf = "192.168.1.64_80"
      WebVideoCtrl.I_GetAnalogChannelInfo(szDeviceIdf,{
        success: function (xmldoc){
          console.log("get channel")
          console.log(xmldoc)
        },
        error: function (){
          console.log("error")
        }
      });
      var ret = WebVideoCtrl.I_StartRealPlay(szDeviceIdf,
          {
            iWndIndex: 0,
            iStreamType:1,
            iChannelID:1,
            bZeroChannel: false,
            success: function () {
              console.log("成功开始预览")
            },
            error: function () {
              console.log("error预览失败")
            }
            // 2023/03/19 21:43:46 [error] 16788#18668: *15 upstream timed out (10060: A connection attempt failed because
            // the connected party did not properly respond after a period of time, or established connection failed because
            // connected host has failed to respond) while connecting to upstream, client: 192.168.1.100, server: 192.168.1.100,
            // request: "GET /webSocketVideoCtrlProxy?version=0.1&cipherSuites=0&token=5bdabb5c702442528873ba70fc9521f6 HTTP/1.1",
            // upstream: "http://192.168.1.64:7681/101?version=0.1&cipherSuites=0&token=5bdabb5c702442528873ba70fc9521f6", host: "192.168.1.100"
          }
    )
    }
  },

  // mounted() {
  //   this.init()
  //   this.login()
  //
  // }
};


</script>


<style>
  .video{
    margin-top: 20px;
    margin-left: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: gray;
  }
  .btn {
    margin-left: 20%;
    margin-top: 50px;
    width: 28%;
    height: 40px;
  }
  .img1{
    width: 560px;
    height: 460px;
    border-style: solid;
    border-width: 2px;
    border-color: gray;
    margin-left: 9%;
  }
  .level1{
    margin-top: 70px;
  }

</style>
