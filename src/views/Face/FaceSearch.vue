<template>
    <div class="searchBox">
        <span>人员姓名</span>
        <el-select v-model="value" class="m-2" placeholder="请输入人员姓名">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">删除</el-button>
    </div>
    <div class="searchResult">
        
    </div>
    <div class="faceShow">

    </div>
    <div class="featureShow">

    </div>
</template>

<script>
import { ref } from 'vue'
export default{
    setup(){
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
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
        ]
    }
}
</script>

<style scoped>
.searchBox{
    border: 1px solid grey;
}
.searchResult{
    border: 1px solid grey;
}
.faceShow{
    border: 1px solid grey;
}
</style>