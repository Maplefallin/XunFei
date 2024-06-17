<template>
   <a-card style="height: 100vh;">
      <div class="toolbar">
         <div style="margin: 10px">
            <Button type="primary"style="margin-right: 20px;">添加课程</Button>
            <Button type="default">新建文件夹</Button>
         </div>
         <a-input-search placeholder="搜索" style="width: 200px; float: right;" />
      </div>
      <CourseLayout :data="data"></CourseLayout>
   </a-card>
</template>

<script lang="ts" setup >

import CourseLayout from '@/views/course/components/CourseLayout.vue'
import { Button, Input } from 'ant-design-vue';
//@ts-ignore
import type { CourseDataForm } from './interface/DataFormat';
import { ref } from 'vue';
import { getUserAllCourse } from '@/api/course';

// const courseData = ref<Array<CourseDataForm>>([])

// const loadCourseData = async()=>{
//     const result = await getUserAllCourse()
//     courseData.value = result.data.data
// }

// //进入界面就渲染
// loadCourseData()


//伪数据
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

<style>
.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
</style>
