<template>
  <div>
    <div class="amap-page-container">
      <!-- 地图组件 -->
      <el-amap
        ref="map"
        vid="amapDemo"
        :amap-manager="amapManager"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="amap-demo"
      ></el-amap>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { AMapManager } from 'vue-amap';

// 获取实例
const amapManager = new AMapManager();
const zoom = ref(12);
const center = ref([120.19, 30.26]);
const plugin = ref([]);  // 假设您需要使用的插件列表
const events = {
  init: (o) => {
    o.getCity((result) => {
      console.log(result);
    });
  },
  click: (e) => {
    console.log(e);
  },
};

onMounted(() => {
  // 任何需要在组件挂载后执行的代码
});
</script>

<style scoped>
.amap-page-container {
  width: 100%;
  height: 400px;
}
</style>
