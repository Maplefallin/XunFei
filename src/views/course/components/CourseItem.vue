<template>
    <a-card
      hoverable
      style="width: 100%;height: 100%; margin: 16px; position: relative;"
    >
      <template #cover>
        <img :src="props.data.cover_image" alt="Course Image" style="width: 100%; height: 135px; object-fit: cover; border-radius: 4px 4px 0 0" />
        <!-- <div class = "progress" style="">
          <span>任务点进度: 50%</span>
          <a-progress
            :percent="50"
            show-info="false"
            stroke-width="8px"
            style="width: 50%"
          />
          <span>50%</span>
        </div> -->
      </template>
      <a-card-meta
        :title="props.data.name"
        :description="`${props.data.teacher_name} - ${props.data.semester}`"
      />
    </a-card>
   
  </template>
  
  <script setup lang="ts">
  import { Card, Progress } from 'ant-design-vue';
  import type { CourseDataForm } from '../interface/DataFormat';
  
  const props = defineProps<{
      data : CourseDataForm[]
    }>();
  
  const components = {
    'a-card': Card,
    'a-card-meta': Card.Meta,
    'a-progress': Progress,
  };
  </script>
  
  <style scoped>
  .progress{
    position: absolute; 
    bottom: 0; 
    width: 100%; 
    background: rgba(0, 0, 0, 0.5);
     color: white; 
     padding: 8px; display: flex; 
     align-items: center; 
     justify-content: space-between;
  }
  </style>
  