<template>
    <a-card class="card">
      <div class="site-layout-content" style="padding: 24px; background: #fff;">
          <div class="profile">
            <a-avatar size="large"  />
            <div class="profile-info">
              <h3>欢迎回来~ {{props.name}}</h3>
              <p>本月共上 {{props.todayUseTime}}，击败了 60% 的老师，出勤率为 50%。</p>
              <a-progress percent={50} status="active" />
            </div>
          </div>
          <div>
            <a-divider type="vertical" style="height: 80px; background-color: #7cb305" />
          </div>
         <div class="options" style="height: 100%;">
          <div class="menu">
            <div class="menu-item" @click="navigateTo('/myStudy/signin')">
              <CheckOutlined class="menu-icon"  />
              <div class="menu-text">签到</div>
            </div>
            <div class="menu-item" @click="navigateTo('/myStudy/myCourse')">
              <BookOutlined class="menu-icon"  />
              <div class="menu-text">课程</div>
            </div>
            <div class="menu-item"@click="navigateTo('/myStudy/signin')">
              <CalendarOutlined class="menu-icon"  />
              <div class="menu-text">课程表</div>
            </div>
          </div>
         </div>
      </div>
    </a-card>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { getUsageTime } from '@/api/user';
  import { Divider } from 'ant-design-vue';
  import SkipOptions from './SkipOptions.vue';
  import { useRouter } from 'vue-router';
  import { CheckOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons-vue';
  
  const router = useRouter();
  
  const navigateTo = (path: string) => {
    router.push(path);
  };
  
  const props = defineProps<{
      name: string ;
      todayUseTime : string;
    }>();
  </script>
  
  <style scoped>


.card{
  height: 160px;
}

.site-layout-content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
}
.menu{
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.menu-item {
    width: 100px;
    text-align: center;
    margin-right: 40px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    padding: 20px;
    border-radius: 8px;
  }

.menu-item:hover {
    background-color: #f0f0f0;
}

.menu-icon {
    font-size: 18px;
    display: block;
    margin-bottom: 4px;
  }
.profile {
  display: flex;
  align-items: center;
}
.profile-info {
  margin-left: 16px;
}
  </style>
  