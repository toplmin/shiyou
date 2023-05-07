<template>
    <div class="container">
<!-- //区域的添加和删除 -->
        <div class="area">
            <el-table :data="tableData" style="width: 100%" max-height="250">
                <el-table-column prop="area" label="区域" width="200" />

                <el-table-column  label="场景信息配置" width="150">
                    <el-button
                    link
                    type="primary"
                    size="small"
                    @click="areaDialogVisible = true"                        >
                    打开
                    </el-button>
                </el-table-column>

                <el-dialog v-model="areaDialogVisible" append-to-body="true" title="修改场景参数" width="500" >
                    <div>
                        <el-dialog v-model="innerVisible" width="30%" title="基准坐标信息" append-to-body="true">
                            <el-form :model="form3" label-width="90">

                                <el-form-item label="x基准">
                                    <el-input v-model="form3.x" />
                                </el-form-item>
                                <el-form-item label="y基准">
                                    <el-input v-model="form3.y" />
                                </el-form-item>
                                <el-form-item label="经度">
                                    <el-input v-model="form3.longitude" />
                                </el-form-item>
                                <el-form-item label="纬度">
                                    <el-input v-model="form3.latitude" />
                                </el-form-item>

                                <el-form-item>
                                    <!-- <template #footer> -->
                                        <span class="dialog-footer">
                                            <el-button type="primary" @click="innerVisible=false">确定</el-button>
                                            <el-button @click="innerVisible=false">取消</el-button>
                                        </span>
                                    <!-- </template> -->
                                </el-form-item>
                            </el-form>
                        </el-dialog>

                        <el-form :model="form1" label-width="90">
                            <el-form-item label="基准点ID">
                                <el-input v-model="form1.ID" />
                                <el-button link type="primary" size="small" @click="innerVisible = true">
                                    修改
                                </el-button>
                            </el-form-item>
                            <el-form-item label="水平偏移">
                                <el-input v-model="form1.x_offset" />
                            </el-form-item>
                            <el-form-item label="旋转偏移">
                                <el-input v-model="form1.y_offset" />
                            </el-form-item>
                            <el-form-item label="轨迹订阅">
                                <el-switch v-model="form1.openTraceSub" />
                            </el-form-item>
                            <el-form-item label="陌生人订阅">
                                <el-switch v-model="form1.strangerSub" />
                            </el-form-item>
                        </el-form>
                    </div>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button type="primary" @click="areaDialogVisible = false">
                                确定
                            </el-button>
                            <el-button @click="areaDialogVisible = false">取消</el-button>
                        </span>
                    </template>
                </el-dialog>

                <el-table-column  label="打开摄像头" width="150">
                    <el-button
                    link
                    type="primary"
                    size="small"
                    @click="fun1"
                    >
                    打开
                    </el-button>    
                </el-table-column>

                <el-table-column  label="打开二维码表" width="150">
                    <el-button
                    link
                    type="primary"
                    size="small"
                    @click="fun2"
                    >
                    打开
                    </el-button>
                </el-table-column>
                <el-table-column  label="控制删除" width="100">
                    <template #default="scope">
                        <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="deleteRow(scope.$index)"
                        >
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <el-button class="mt-4" style="width: 100%" @click="onAddItem"
                >添加区域</el-button
            >
        </div>
<!-- //摄像头添加和删除 -->
        <div class="carmera">
            <el-table :data="carmeraData" style="width: 100%" max-height="250">
                <el-table-column prop="carmera" label="摄像头" width="350" />
                <!-- <el-table-column prop="open" label="打开" width="350" /> -->
                <el-table-column  label="打开" width="350">
                    <el-button
                    text
                    link
                    type="primary"
                    size="small"
                    @click="dialogVisible = true"
                    >
                    打开
                    </el-button>
                </el-table-column>

                <el-dialog v-model="dialogVisible" append-to-body="true" title="修改摄像头参数" width="500" >
                    <!-- <span>It's a draggable Dialog</span> -->
                    <div>
                        <el-form :model="form2" label-width="80">
                            <el-form-item label="id">
                                <el-input v-model="form2.name1" />
                            </el-form-item>
                            <el-form-item label="ip">
                                <el-input v-model="form2.name2" />
                            </el-form-item>
                            <el-form-item label="类型">
                                <el-input v-model="form2.name3" />
                            </el-form-item>
                            <el-form-item label="型号">
                                <el-input v-model="form2.name4" />
                            </el-form-item>
                            <el-form-item label="内参矩阵">
                                <el-input v-model="form2.name5" />
                            </el-form-item>
                            <el-form-item label="外参矩阵">
                                <el-input v-model="form2.name6" />
                            </el-form-item>
                            <el-form-item label="畸变系数">
                                <el-input v-model="form2.name7" />
                            </el-form-item>

                            <el-form-item>
                                <template #footer>
                                    <span class="dialog-footer">
                                        <el-button type="primary" @click="onSubmit">确定</el-button>
                                        <el-button>取消</el-button>
                                    </span>
                                </template>
                            </el-form-item>
                        </el-form>
                    </div>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogVisible = false">取消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">
                                确定
                            </el-button>
                        </span>
                    </template>
                </el-dialog>

                <el-table-column  label="控制删除" width="100">
                    <template #default="scope">
                        <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="delCarmera(scope.$index)"
                        >
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <el-button class="mt-4" style="width: 100%" @click="onAddCarmera"
                >添加摄像头</el-button
            >
        </div>
<!-- //二维码添加和删除 -->
        <div class="QRcode">
            <el-table :data="QRCodeData" style="width: 100%" max-height="250">
                <el-table-column prop="x" label="二维码坐标x" width="350" />
                <el-table-column prop="y" label="二维码坐标y" width="350" />

                <el-table-column  label="控制删除" width="100">
                    <template #default="scope">
                        <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="delQRCode(scope.$index)"
                        >
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <el-button class="mt-4" style="width: 100%" @click="onAddQRCode"
                >添加二维码</el-button
            >
        </div>
<!-- //添加服务器 -->
        <div class="server">
            <el-table :data="serverData" style="width: 100%" max-height="250">
                <el-table-column prop="IP" label="服务器IP" width="300" />
                <el-table-column prop="GPUPara" label="CPU数量" width="200" />
                <el-table-column prop="GPUNum" label="CPU参数" width="200" />

                <el-table-column  label="控制删除" width="100">
                    <template #default="scope">
                        <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="delServer(scope.$index)"
                        >
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <el-button class="mt-4" style="width: 100%" @click="onAddServer"
                >添加二维码</el-button
            >
        </div>
    </div>
</template>

<script  setup>
import { ref } from 'vue'
import { reactive } from 'vue'

// 添加区域
const tableData = ref([])
const form1 = reactive({
  ID: '',
  x_offset: '',
  y_offset: '',
  openTraceSub: '',
  strangerSub: '',
})

const form3 = reactive({
  x: '',
  y: '',
  longitude: '',
  latitude: '',
})
const areaDialogVisible = ref(false);
const innerVisible = ref(false)
function fun1(){
    alert('右边显示打开所选区域的摄像头')
}
function fun2(){
    alert('下边显示打开所选区域的二维码表')
}
const deleteRow = (index)=>{
    tableData.value.splice(index,1)
}

const onAddItem = () =>{
    tableData.value.push({
        area:'区域' //传进来的区域
    })
}
//添加摄像头
const carmeraData = ref([])
const delCarmera = (index)=>{
    carmeraData.value.splice(index,1)
}

const onAddCarmera = () =>{
    carmeraData.value.push({
        carmera:'对应区域摄像头', //传进来的摄像头
        open:'打开'
    })
}
//打开摄像头参数配置
const dialogVisible = ref(false)

const form2 = reactive({
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: '',
  name6: '',
  name7: ''
})

const onSubmit = () => {
  console.log('submit!')
}
//添加二维码
const QRCodeData = ref([])
const delQRCode = (index)=>{
    QRCodeData.value.splice(index,1)
}

const onAddQRCode = () =>{
    QRCodeData.value.push({
        x:'x坐标' ,//传进来的二维码
        y:'y坐标'
    })
}
//服务器信息
const serverData = ref([])
const delServer = (index)=>{
    serverData.value.splice(index,1)
}

const onAddServer = () =>{
    serverData.value.push({
        IP:'1' ,//传进来的GPu
        GPUPara:'123456',
        GPUNum:"2"
    })
}
</script>

<style scoped>
.container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.area{
    margin:2% 2%;;
    border: 2px rgb(241, 241, 241) solid;
    width:45%;
    height: 30%;
}
.carmera{
    margin:2% 2%;;
    border: 2px rgb(241, 241, 241) solid;
    width:45%;
    height: 30%;
}
.QRcode{
    margin:2% 2%;;
    border: 2px rgb(241, 241, 241) solid;
    width:45%;
    height: 30%;
}
.server{
    margin:2% 2%;;
    border: 2px rgb(241, 241, 241) solid;
    width:45%;
    height: 30%;
}
</style>


