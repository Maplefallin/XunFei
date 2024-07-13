<template>
  <List
    item-layout="horizontal"
    :data-source="props.data"
    style="max-height: 70vh; overflow-y: auto; padding: 10px;"
  >
    <template #renderItem="{ item }">
      <ListItem class="list-item" @click="navigateTo('/detail/homeworkDetail', item)">
        <Checkbox v-model="selectedItems" :value="item" style="margin: 10px;"></Checkbox>
        <ListItemMeta>
          <template #title>
            <p style="font-size: large; font-weight: 500;">作业：{{ item.cousre }} {{ item.content }}</p>
          </template>
          <template #description>
            发布人：{{ item.publisher }}
          </template>
          <template #avatar>
            <Badge dot v-if="item.isFinish === 0">
              <Avatar shape="square" :style="{ backgroundColor: '#1890ff', verticalAlign: 'middle' }" size="large">
                作业
              </Avatar>
            </Badge>
            <Badge v-else="item.isFinish === 1">
              <Avatar shape="square" :style="{ backgroundColor: '#1890ff', verticalAlign: 'middle' }" size="large">
                作业   
              </Avatar>
            </Badge>
          </template>
        </ListItemMeta>
      </ListItem>
    </template>
  </List>

 
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { List, ListItem, Checkbox, ListItemMeta, Avatar, Badge } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { id } from 'element-plus/es/locales.mjs';

const router = useRouter();
const props = defineProps<{
  data: Array<HomeworkDataFormat>
}>();
const selectedItems = ref([]);
const isModalVisible = ref(false);
const targetGroup = ref('')

const navigateTo = (path:string, item:HomeworkDataFormat) => {
  const itemId = item.id
  const itemName = item.course
  router.push({ path:path,query:{id:itemId,course:itemName} });
};

// const moveTo = () => {
//   isModalVisible.value = true;
// };

// const handleMove = () => {
//   console.log('Move to:', targetGroup.value);
//   // 在这里添加移动逻辑
//   isModalVisible.value = false;
// };

// const handleCancel = () => {
//   isModalVisible.value = false;
// };

// const deleteItems = () =>{
    
  
//   }
  
</script>

<style scoped>
.list-item {
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid #e8e8e8;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.list-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.list-item:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* 添加操作按钮的样式 */
.list-item .actions {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: none;
}

.list-item:hover .actions {
  display: block;
}
</style>