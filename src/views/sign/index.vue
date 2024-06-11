<template>
    <a-card style="height: 100vh;">
      <div class="header-div">
        <a-dropdown >
            <template #overlay>
            <a-menu @click="handleMenuClick">
                <a-menu-item v-for="menuItem in menuList" :key="menuItem.name">
                <CheckCircleTwoTone v-if="menuItem.name === 'FINISH'"/>
                <ExclamationCircleTwoTone v-if="menuItem.name === 'LOSE'"/>
                <InfoCircleTwoTone v-if="menuItem.name === 'ALL'"/>
                {{ menuItem.name }}
                </a-menu-item>
            </a-menu>
            </template>
            <a-button type="primary" style="margin-right: 20px;">
            {{ selectedType }}
            <DownOutlined />
            </a-button>
        </a-dropdown>

        <a-space direction="vertical">
            <a-input-search
            :value="searchValue"
            placeholder="input search text"
            enter-button
            @search="onSearch"
            />
        </a-space>

      </div>
      <SignStatistics :data = "data"></SignStatistics>
      <SignInList :data="data"></SignInList>
    </a-card>
  </template>
  
  <script setup lang="ts">
  import { UserOutlined, DownOutlined,CheckCircleTwoTone, ExclamationCircleTwoTone,InfoCircleTwoTone} from '@ant-design/icons-vue';
  import type { MenuProps } from 'ant-design-vue';
  import SignInList from '@/views/sign/components/SignInList.vue'
  import SignStatistics from "@/views/sign/components/SignStatistics.vue"
  import type {signinItem,MenuName} from '@/views/sign/interface/SignInterface'
  import {getSignData,searchSignData} from '@/api/sign'
  import { ref } from 'vue';

  const data = ref<Array<signinItem>>([
    {id: 1, name: '高等数学', type: '定位', time: '2023-01-01 14:40:23', tags: 'lose' },
    {id: 1, name: '高等数学', type: '普通', time: '2023-01-02 14:40:23', tags: 'finish'},
    {id: 1, name: '高等数学', type: '定位', time: '2023-01-01 14:40:23', tags: 'lose' },
    {id: 1, name: '高等数学', type: '普通', time: '2023-01-02 14:40:23', tags: 'finish'},
    {id: 1, name: '高等数学', type: '定位', time: '2023-01-01 14:40:23', tags: 'lose' },
    {id: 1, name: '高等数学', type: '普通', time: '2023-01-02 14:40:23', tags: 'finish'},
    {id: 1, name: '高等数学', type: '定位', time: '2023-01-01 14:40:23', tags: 'lose' },
    {id: 1, name: '高等数学', type: '普通', time: '2023-01-02 14:40:23', tags: 'finish'},
    {id: 1, name: '高等数学', type: '定位', time: '2023-01-01 14:40:23', tags: 'lose' },
    {id: 1, name: '高等数学', type: '普通', time: '2023-01-02 14:40:23', tags: 'finish'},
    {id: 1, name: '高等数学', type: '定位', time: '2023-01-01 14:40:23', tags: 'lose' },
    {id: 1, name: '高等数学', type: '普通', time: '2023-01-02 14:40:23', tags: 'finish'}
  ]);

  //当前查询的类型数据
  const selectedType = ref<string>('all');
  //当前查询的搜索数据
  const searchValue = ref<string>('')

    const getSignInData = async()=>{
      try{
        const result = await getSignData(selectedType.value)
        data.value = result.data.data
      }catch(error){
        console.error('Failed to fetch search results:', error);
      }
    }
    //进入界面直接获取
    // getSignInData()

    const onSearch = async () => {
      try {
        const result = await searchSignData(selectedType.value,searchValue.value);
        data.value = result.data.data;
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };

  const menuList = ref<Array<MenuName>>([
    { name: 'ALL' },
    { name: 'LOSE' },
    { name: 'FINISH' }
  ]);
  
  
  
  const handleMenuClick: MenuProps['onClick'] = e => {
    const menuItem = menuList.value.find(item => item.name === e.key);
    if (menuItem) {
      selectedType.value = menuItem.name;
      getSignInData()
    }
  };
  
  </script>
  
  <style>
  .header-div{
    margin: 20px;
    display: flex;
    justify-content: end;
  }
  
  </style>
  