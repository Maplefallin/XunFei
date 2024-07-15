<template>
    <Card style="height: 100vh;">
      <PageHeader>
        <h1 class="title-left">{{ nameRef }}</h1>
        <p class="title-tag">{{ typeRef }}</p>
      </PageHeader>
  
      <div v-if="!signInMessage" class="center-content">
        <template v-if="typeRef === '普通'">
          <a-button type="primary" shape="circle" size="large" @click="signIn">签到</a-button>
        </template>
  
        <template v-if="typeRef === '定位'">
          <!-- <Location></Location> -->
          <a-button type="primary" size="large" @click="signIn">签到</a-button>
        </template>
      </div>
  
      <div v-if="signInMessage">
        <template v-if="signInStatus === 'success'">
          <Success></Success>
        </template>
        
        <template v-if="signInStatus === 'error'">
         <Error></Error>
        </template>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { watch, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { Card, PageHeader, Button, message } from 'ant-design-vue';
  //@ts-ignore
  import Location from '@/views/detail/component/Location.vue';
  //@ts-ignore
  import Success from '@/views/detail/component/Success.vue';
  //@ts-ignore
  import Error from '@/views/detail/component/Error.vue';
  import { CloseCircleOutlined } from '@ant-design/icons-vue';

  
  const route = useRoute();
  const idRef = ref<number | null>(1); // id可能是数字，也可能是null
  const nameRef = ref<string>('高等数学');
  const typeRef = ref<string>('普通');
  const signInMessage = ref<string>('');
  const signInStatus = ref<string>(''); // 添加状态变量
  
  // 监控路由参数和查询参数的变化
  watch(
    () => ({
      id: route.query.id?.toString(),
      name: route.query.name?.toString(),
      type: route.query.type?.toString()
    }),
    ({ id, name, type }) => {
      // 确保id是数字，如果不是，则使用默认值1
      idRef.value = id ? parseInt(id, 10) : 1;
      // 更新nameRef的值
      nameRef.value = name || '高等数学';
      typeRef.value = type || '普通';
    },
    // 初始时立即执行回调函数
    { immediate: true }
  );
  
  const signIn = async () => {
    try {
      // 模拟网络请求
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      signInMessage.value = '签到成功';
      signInStatus.value = 'error';
      message.success('签到成功');
    } catch (error) {
      signInMessage.value = '签到失败';
      signInStatus.value = 'error';
      message.error('签到失败');
    }
  };
  
  const resetSignIn = () => {
    signInMessage.value = '';
    signInStatus.value = '';
  };
  
  const updateLocation = (location: string) => {
    // 处理定位组件传递来的位置信息
    signInMessage.value = location;
  };
  
  onMounted(() => {
    // 初始化逻辑
  });
  </script>
  
  <style scoped>
  .title-left {
    font-weight: bold;
    font-size: 30px;
    text-align: left;
  }
  
  .title-tag {
    color: gray;
    margin-top: 5px;
  }
  
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(70vh - 100px);
  }
  
  .center-content .ant-btn {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
    font-size: 35px;
  }
  
  .desc p {
    margin-bottom: 1em;
  }
  </style>
  