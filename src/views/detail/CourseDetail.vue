<template>
  <Card style="height: 100vh;">
    <PageHeader>
      <h1 class="title-left"> {{ nameRef }} </h1>
      <p class="title-tag"> 主讲人： 许小龙   |   2023-2024-2</p>
    </PageHeader>

    <div class="video-container" id = 'dplayer'>
    
  </div>

  </Card>
</template>

<script setup lang="ts">
import { watch, ref,reactive,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Card,PageHeader } from 'ant-design-vue';
import 'video.js/dist/video-js.css';
import DPlayer from 'dplayer';


const route = useRoute();
const idRef = ref<number | null>(1); // id可能是数字，也可能是null
const nameRef = ref<string>('高等数学');

// 监控路由参数和查询参数的变化
watch(
  () => ({
    id: route.query.id?.toString(), 
    name: route.query.name?.toString() 
  }),
  ({ id, name }) => {
    // 确保id是数字，如果不是，则使用默认值1
    idRef.value = id ? parseInt(id, 10) : 1;
    // 更新nameRef的值
    nameRef.value = name || '高等数学';
  },
  // 初始时立即执行回调函数
  { immediate: true }
);

onMounted(() => {
  //视频插件
  const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'http://vjs.zencdn.net/v/oceans.mp4',
        pic: '/scr/assets/img/image.png',
        thumbnails: 'thumbnails.jpg',
        type: 'auto',
    },
});
    });



const onPlay = () => {
  console.log('视频开始播放');
};

const onPause = () => {
  console.log('视频暂停');
};
</script>

<style scoped>
.title-left {
  font-weight: bold; 
  font-size: 30px;
  text-align: left; 
}

.title-tag{
  color: gray;
  margin-top: 5px;
}
.video-container {
 width: 1000px;
 height: 600px;
 margin: 0 auto;
 margin-top: 20px;
 
}
</style>