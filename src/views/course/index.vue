<template>
   <a-card style="height: 100vh;">
      <div class="toolbar">
         <div style="margin: 10px">
            <Button type="primary" style="margin-right: 20px;" @click="showModal">添加课程</Button>
            <Button type="default">新建文件夹</Button>
         </div>
         <a-input-search 
         placeholder="搜索"
        style="width: 300px; float: right;"
        v-model:value = "searchItem" 
        @search="handleSearch"
        />
        <a-modal v-model:open="open" title="Title" @ok="handleOk" style="height: 60vh;width: 60vw;">
          
          <AddCourseComponent :data="data"></AddCourseComponent>
          <template #footer>
            <a-button key="back" @click="handleCancel">Return</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
          </template>
        </a-modal>
      </div>
      <CourseLayout :data="data"></CourseLayout>
   </a-card>
</template>

<script lang="ts" setup >

import CourseLayout from '@/views/course/components/CourseLayout.vue'
//@ts-ignore
import AddCourseComponent from '@/views/course/components/AddCourseComponent.vue'
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

const loading = ref<boolean>(false);
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    open.value = false;
  }, 2000);
};

const handleCancel = () => {
  open.value = false;
};
//伪数据
const data= ref<Array<CourseDataForm>>([
  {
    id:1,
    name : '计算机组成原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    //图片不能用相对路径
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:1,
    name : '计算机网络',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:1,
    name : '算法分析与设计',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  }, {
    id:1,
    name : '数据库原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:1,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
])

const searchItem = ref<String>('')

const handleSearch =(searchValue: string)=>{
  if (!searchValue) {
    return data.value;
  }
  data.value = data.value.filter(course =>
    course.name.includes(searchValue) ||
    course.teacher_name.includes(searchValue) ||
    course.semester.includes(searchValue)
  );
}

</script>

<style>
.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
</style>
