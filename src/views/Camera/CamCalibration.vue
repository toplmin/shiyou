<!--相机标定页面-->
<template>
  <!--  <div style="width: 800px;height: 700px;background-color: greenyellow" >fff</div>-->
  
    <div class="Container">
      <div class="view_left">
        <div class="module">
          <div class="block">
            <div>
              <span>区域选择：</span>
              <el-select v-model="value11" class="selectArea" placeholder="请选择区域">
                <el-option
                    v-for="item1 in options11"
                    :key="item1.value11"
                    :label="item1.label11"
                    :value="item1.value11"
                />
              </el-select>
            </div>

            <div>
              <span>相机选择：</span>
              <el-select v-model="value1" class="selectCam" placeholder="请选择相机编号">
                <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label1"
                    :value="item.value1"
                />
              </el-select>
            </div>

            <div class="img"></div>
          </div>
  
          <div class="block">
            <div>
              <span>区域选择：</span>
              <el-select v-model="value11" class="selectArea" placeholder="请选择区域">
                <el-option
                    v-for="item1 in options11"
                    :key="item1.value11"
                    :label="item1.label11"
                    :value="item1.value11"
                />
              </el-select>
            </div>
            
            <div>
              <span>相机选择：</span>
              <el-select v-model="value1" class="selectCam" placeholder="请选择相机编号">
                <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label1"
                    :value="item.value1"
                />
              </el-select>
            </div>
            <div class="img"></div>
          </div>
  
          <div class="block">
            <div>
              <span>区域选择：</span>
              <el-select v-model="value11" class="selectArea" placeholder="请选择区域">
                <el-option
                    v-for="item1 in options11"
                    :key="item1.value11"
                    :label="item1.label11"
                    :value="item1.value11"
                />
              </el-select>
            </div>

            <div>
              <span>相机选择：</span>
              <el-select v-model="value3" class="selectCam" placeholder="请选择">
                <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label3"
                    :value="item.value3"
                />
              </el-select>
            </div>

            <div class="img"></div>
          </div>
  
          <div class="block">
            <div>
              <span>区域选择：</span>
              <el-select v-model="value11" class="selectArea" placeholder="请选择区域">
                <el-option
                    v-for="item1 in options11"
                    :key="item1.value11"
                    :label="item1.label11"
                    :value="item1.value11"
                />
              </el-select>
            </div>


            <div>
              <span>相机选择：</span>
              <el-select v-model="value3" class="selectCam" placeholder="请选择">
                <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label3"
                    :value="item.value3"
                />
              </el-select>
            </div>
            <div class="img"></div>
          </div>
  
          <div class="block">
            <div>
              <span>区域选择：</span>
              <el-select v-model="value11" class="selectArea" placeholder="请选择区域">
                <el-option
                    v-for="item1 in options11"
                    :key="item1.value11"
                    :label="item1.label11"
                    :value="item1.value11"
                />
              </el-select>
            </div>

            <div>
                <span>相机选择：</span>
                <el-select v-model="value3" class="selectCam" placeholder="请选择">
                  <el-option
                      v-for="item in options3"
                      :key="item.value3"
                      :label="item.label3"
                      :value="item.value3"
                  />
                </el-select>
            </div>
            <div class="img"></div>
          </div>
  
          <div class="block">
            <div>
              <span>区域选择：</span>
              <el-select v-model="value11" class="selectArea" placeholder="请选择区域">
                <el-option
                    v-for="item1 in options11"
                    :key="item1.value11"
                    :label="item1.label11"
                    :value="item1.value11"
                />
              </el-select>
            </div>

            <div>
              <span>相机选择：</span>
              <el-select v-model="value3" class="selectCam" placeholder="请选择">
                <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label3"
                    :value="item.value3"
                />
              </el-select>
            </div>
            <div class="img"></div>
          </div>
  
        </div>
  
      </div>
      <div class="view_right">
        <div class="allBtn">
          <el-button class="btn1" type="primary">导入图片</el-button>
          <el-button class="btn1" type="primary">校准</el-button>
          <el-button class="btn1" type="primary">保存结果</el-button>
        </div>
  
        <div class="resDiv">
          <span>相机信息查询结果</span>
          <div class="res"></div>
        </div>
  
        <div class="calibrateResDiv">
          <span>校准后结果</span>
          <div class="calibrateRes"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref} from 'vue'
  const value1 = ref("")
  const value2 = ref("")
  const value3 = ref("")
  const value4 = ref("")
  const value5 = ref("")
  const value6 = ref("")
  const options1 = [
    {
      value1:'1',
      label1:'1'
    },
    {
      value1:'2',
      label1:'2'
    },
    {
      value1:'3',
      label1:'3'
    }
  ]
  
  const options2 = [
    {
      value2:'1',
      label2:'1'
    },
    {
      value2:'2',
      label2:'2'
    },
    {
      value2:'3',
      label2:'3'
    }
  ]
  
  const options3 = [
    {
      value3:'1',
      label3:'1'
    },
    {
      value3:'2',
      label3:'2'
    },
    {
      value3:'3',
      label3:'3'
    }
  ]
  
  const options4 = [
    {
      value4:'1',
      label4:'1'
    },
    {
      value4:'2',
      label4:'2'
    },
    {
      value4:'3',
      label4:'3'
    }
  ]
  
  const options5 = [
    {
      value5:'1',
      label5:'1'
    },
    {
      value5:'2',
      label5:'2'
    },
    {
      value5:'3',
      label5:'3'
    }
  ]
  
  const options6 = [
    {
      value6:'1',
      label6:'1'
    },
    {
      value6:'2',
      label6:'2'
    },
    {
      value6:'3',
      label6:'3'
    }
  ]
  
  </script>
  
  <style scoped>
  .Container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .view_left{
    display: flex;
    width: 50%;
    height: 100%;
    /*background-color: orange;*/
  }
  .module{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 90%;
    /*background-color: pink;*/
    margin: 0% 2%;
  }
  .block{
    width: 40%;
    height: 30%;
    /*background-color: gold;*/
    margin: 3% 5%;
  }
  /* .select{
    width: 100%;

  } */
  .selectArea{
    width: 75%;
    margin-bottom: 1%;
  }
  .selectCam{
    width: 75%;
    margin-top: 1%;
  }
  .img{
    width: 90%;
    height: 85%;
    /*background-color: greenyellow;*/
    margin-top: 3%;
    border: 2px solid grey;
  }
  
  /*右半部分*/
  .view_right{
    width: 50%;
    height: 100%;
    /*background-color: cornflowerblue;*/
  }
  .allBtn{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /*margin-left: 8%;*/
    margin-top: 8%;
  }
  .btn1{
    width: 30%;
  }
  .resDiv{
    width: 90%;
    height: 55%;
    /*margin: 1%  5%;*/
    margin-top: 2%;
    margin-bottom: 5%;
  }
  .res{
    width: 100%;
    height: 100%;
    border:2px solid grey;
    margin-top: 1%;
  }
  .calibrateResDiv{
    width: 90%;
    height: 20%;
    /*margin-left: 10%;*/
  }
  .calibrateRes{
    width: 100%;
    height: 100%;
    border:2px solid grey;
    margin-top: 1%;
  
  }
  </style>