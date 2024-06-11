<template>
    <div class="menu">
      <div class="menu-item" @click="navigateTo('/signin')">
        <CheckOutlined class="menu-icon" />
        <div class="menu-text">签到</div>
      </div>
      <div class="menu-item" @click="navigateTo('/record')">
        <BookOutlined class="menu-icon" />
        <div class="menu-text">课程</div>
      </div>
      <div class="menu-item" @click="navigateTo('/record')">
        <CalendarOutlined class="menu-icon" />
        <div class="menu-text">课程表</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { CheckOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons-vue';
  
  const router = useRouter();
  
  const navigateTo = (path: string) => {
    router.push(path);
  };
  </script>
  
  <style scoped>
  .menu {
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
  
  .menu-item {
    width: 50px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    padding: 20px;
    border-radius: 8px;
  }
  
  .menu-item:hover {
    background-color: #f0f0f0;
  }
  
  .menu-icon {
    font-size: 28px;
    display: block;
    margin-bottom: 4px;
  }
  
  .menu-text {
    font-size: 18px;
  }
  </style>
  