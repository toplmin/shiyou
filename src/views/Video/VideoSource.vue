<template>
    <div class="video">
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
        <VideoSet/>
    </div>
</template>

<script>
import VideoSet from '@/components/VideoSet.vue'
export default{
    props:{VideoSet},
    
}
</script>

<style scoped>
.video{
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-around;

    
}
</style>