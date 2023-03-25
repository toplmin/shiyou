<template>
  <div class="camera-container">
    <div class="videoLeft">
      <video class="video" ref="video" ></video>
      <div class="video-button">
        <div><el-button class="btn " type="primary" @click="startCamera" >打开摄像头</el-button></div>
        <div><el-button class="btn " type="primary" @click="stopCamera">关闭摄像头</el-button></div>
        <div><el-button class="btn " type="primary" @click="takePhoto">拍照</el-button></div>
        <div><el-button class="btn " type="primary" >保存</el-button></div>
      </div>
    </div>
    <div class="videoRight">
      <img class="img1 " :src="img1_src"/>
      <img class="img1 " :src="img2_src"/>
      <img class="img1 " v-bind:src="img3_src"/>
      <img class="img1 " v-bind:src="img4_src"/>
    </div>
  </div>
</template>
<script>
// import {reactive} from 'vue'
// let mediaStream=reactive({})
// window.addEventListener('resize', function(event){
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   // 根据需要调整元素的大小
// });
export default {
  data() {
    return {
      mediaStream: null,
      img1_src:require('../assets/img/moren.webp'),
      img2_src:require('../assets/img/moren.webp'),
      img3_src:require('../assets/img/moren.webp'),
      img4_src:require('../assets/img/moren.webp'),
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
.camera-container{
  width: 100%;
  height: 100%;
  /*background-color: orange;*/
  display: flex;

}
.videoLeft{
  width: 40%;
  margin-top: 3%;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center*/
;
}
.video{
  width: 100%;
  height: 61%;
}
.video-button{
  display: flex;
  padding: 8%;
  justify-content: space-around;
  flex-wrap: wrap;
}
.video-button div{
  width: 50%;
}
.btn{
  margin: 5%;
  width: 90%;
  height: 40px;
}
.video{
  margin-top: 20px;
  margin-left: 20px;
  border: 2px solid grey;
  width: 90%;
}
.videoRight{
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  /*background-color: red;*/
  align-items:center;
  justify-content: space-evenly;
}
.videoRight img{
  /*margin: 10px ;*/
  width: 45%;
  height: 34%;
}
</style>
