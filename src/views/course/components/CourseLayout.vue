<template>
  <a-row :gutter = "[16,16]" >
    <a-col 
    :span="6"
    v-for="(item) in data"
    :key="item.id"
    >
      <div class="item" @click = "navigateTo('/myStudy/signin')">
        <CourseItem :data="item" ></CourseItem>
      </div>
    </a-col>
  </a-row>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { CourseDataForm } from '../interface/DataFormat';
import { useRouter } from 'vue-router';
//@ts-ignore
import CourseItem from '@/views/course/components/CourseItem.vue'


const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

// const props = defineProps<{
//     name: string ;
//     todayUseTime : string;
//   }>();

const data : CourseDataForm []= [
  {
    id:1,
    name : '计算机组成原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '@/assets/img/image.png',
  },
  {
    id:1,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '@/assets/img/image.png',
  },
  {
    id:1,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '@/assets/img/image.png',
  },
  {
    id:1,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '@/assets/img/image.png',
  },
  {
    id:1,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '@/assets/img/image.png',
  },
  {
    id:1,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '@/assets/img/image.png',
  },
]
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

:deep(#components-grid-demo-playground) [class~='ant-col'] {
 
}
:deep(#components-grid-demo-playground) [class~='ant-col'] > div {
  
}
:deep(#components-grid-demo-playground) pre {
  padding: 8px 16px;
  font-size: 13px;
  background: #f9f9f9;
  border-radius: 6px;
}
:deep(#components-grid-demo-playground) pre.demo-code {
  direction: ltr;
}
:deep(#components-grid-demo-playground) .ant-col {
  
}

</style>
