<template>
  <div class="scrollable-container">
    <a-row :gutter="[16, 16]">
      <a-col 
        :span="6"
        v-for="(item) in props.data"
        :key="item.id"
      >
        <div class="item" @click="navigateTo(item)">
          <CourseItem :data="item"></CourseItem>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { CourseDataForm } from '../interface/DataFormat';
import { useRouter } from 'vue-router';
//@ts-ignore
import CourseItem from '@/views/course/components/CourseItem.vue'



const router = useRouter();

const navigateTo = (item:CourseDataForm) => {
  const itemId = item.id
  const itemName = item.name
  router.push({path:"/detail/courseDetail", query:{id:itemId,name:itemName}});
};

const props = defineProps<{
    data:Array<CourseDataForm>
  }>();
  
</script>

<style scoped>

.item{
  background: transparent;
  border: 0;
  font-size: 14px;
  line-height: 120px;
  border-radius: 4px;
  padding: 0;
}
.scrollable-container {
  max-height: 80vh; /* 父组件高度 */
  overflow-y: auto; /* 超出高度时滚动 */
  overflow-x: hidden
}


</style>
