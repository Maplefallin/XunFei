<template>
   <a-card style="height: 100vh;">
      <div class="toolbar">
         <div style="margin: 10px">
            <Button type="primary"style="margin-right: 20px;">添加课程</Button>
            <Button type="default">新建文件夹</Button>
         </div>
         <a-input-search placeholder="搜索" style="width: 200px; float: right;" />
      </div>
      <CourseLayout></CourseLayout>
   </a-card>
</template>

<script lang="ts" setup >

import CourseLayout from '@/views/course/components/CourseLayout.vue'
import { Button, Input } from 'ant-design-vue';

import type { CourseDataForm } from './interface/DataFormat';

</script>

<style>
.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
</style>
