<template>
    <a-card style="height: 100vh;">
      <div class="header-div">
        <a-dropdown >
            <template #overlay>
            <a-menu type = "text" @click="handleMenuClick">
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
      <HomeworkStatistics :data = "data"></HomeworkStatistics>
      <HomeworkList :data="data"></HomeworkList>
    </a-card>
  </template>
  
  <script setup lang="ts">
  import { UserOutlined, DownOutlined,CheckCircleTwoTone, ExclamationCircleTwoTone,InfoCircleTwoTone} from '@ant-design/icons-vue';
  import type { MenuProps } from 'ant-design-vue';
  import HomeworkList from '@/views/homework/components/HomeworkList.vue'
  import HomeworkStatistics from "@/views/homework/components/HomeworkStatistic.vue"
  //@ts-ignore
  import type {HomeworkDataFormat,MenuName} from '@/views/homework/interface/DataFormat'
  import {getSignData,searchSignData} from '@/api/sign'
  import { ref } from 'vue';

  const data = ref<Array<HomeworkDataFormat>>([
    {id: 1,isFinish:1, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    {id: 1,isFinish:1, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    {id: 1,isFinish:1, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    {id: 1,isFinish:0, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    {id: 1,isFinish:1, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    {id: 1,isFinish:0, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    {id: 1,isFinish:1, cousre: '高等数学', courseId: 1,class:"高等数学1班",classId:1,publisher:"许小龙", content:"第一章作业", beginTime: '2023-01-01 14:40:23',endTime:'2023-01-01 14:40:23' },
    
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
  