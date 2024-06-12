<template>
    <a-card style="margin-top: 10px;height: 485px" title="公告栏">
      <div class="list-container">
        <a-list
          item-layout="horizontal"
          :data-source="leftColumnData"
          class="list-column"
        >
          <template #renderItem="{ item }">
            <a-list-item class="list-item">
              <a-list-item-meta>
                <template #title>
                  <p>{{ item.title }}</p>
                </template>
                <template #description>
                    <Tag :bordered="false" color="blue">
                    {{item.type}}
                     </Tag>
                </template>
                <template #avatar>
                    
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
        <a-list
          item-layout="horizontal"
          :data-source="rightColumnData"
          class="list-column"
        >
          <template #renderItem="{ item }">
            <a-list-item class="list-item">
              <a-list-item-meta>
                <template #title>
                  <p>{{ item.title }}</p>
                </template>
                <template #description>
                  <Tag :bordered="false" color="blue">
                    {{item.type}}
                  </Tag>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </div>
      <div class="pagination-container">
        <a-pagination
          :current="current"
          :total="total"
          :pageSize="pageSize"
          @change="handlePageChange"
        />
      </div>
    </a-card>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { List, ListItem, ListItemMeta, Avatar, Pagination,Tag} from 'ant-design-vue';
  
  interface DataItem {
    title: string;
    type : string 
  }
  
  const data: DataItem[] = [
    { 
        title: '关于南京信息工程大学暑假留校工作',
        type: '日程安排'
    },
    { 
        title: '关于南京信息工程大学暑假留校工作',
        type: '日程安排' 
    },
    { 
        title: '关于南京信息工程大学暑假留校工作',
        type: '日程安排'
    },
    { 
       title: '关于南京信息工程大学暑假留校工作',
        type: '日程安排'
    },
    { 
        title: '关于举办2024届毕业晚会',
        type: '校园活动'
     },
    { 
      title: '关于举办2024届毕业晚会',
        type: '校园活动'
     },
    { 
        title: '关于举办2024届毕业晚会',
        type: '校园活动'
     },
    { 
        title: '关于举办2024届毕业晚会',
        type: '校园活动' 
    },
    { 
        title: '关于举办2024届毕业晚会',
        type: '校园活动'
    },
    { 
       title: '关于举办2024届毕业晚会',
        type: '校园活动'
     },
  ];
  
  const current = ref(1);
  const pageSize = ref(8);
  const total = ref(data.length);
  
  const handlePageChange = (page: number) => {
    current.value = page;
    updateCurrentPageData();
  };
  
  const leftColumnData = ref<DataItem[]>([]);
  const rightColumnData = ref<DataItem[]>([]);
  
  //更新开始结束的索引
  const updateCurrentPageData = () => {
    const startIndex = (current.value - 1) * pageSize.value;
    const endIndex = startIndex + pageSize.value;
    const pageData = data.slice(startIndex, endIndex);
    leftColumnData.value = pageData.slice(0, Math.ceil(pageData.length / 2));
    rightColumnData.value = pageData.slice(Math.ceil(pageData.length / 2));
  };
  
  updateCurrentPageData();
  </script>
  
  <style scoped>
  .list-container {
    display: flex;
    justify-content: space-between;
  }
  
  .list-column {
    width: 48%;
  }
  
  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .list-item {
    margin-bottom: 10px;
    border: 1px solid #e8e8e8;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  </style>
  