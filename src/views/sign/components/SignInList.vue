<template>
  <List 
    item-layout="horizontal" 
    :data-source="props.data"
    style="max-height: 70vh; overflow-y: auto; padding: 10px"
    >
    <template #renderItem="{ item }">
      <ListItem class="list-item" @click = "navigateTo(item)">
        <Checkbox v-model="selectedItems" :value="item" style="margin: 10px;"></Checkbox>
        <ListItemMeta>       >
          <template #title>
            <div style="display: flex;  margin-right:10px">
              <p style="font-size: large;font-weight: 500;">{{item.name}}</p>
              <a-tag color="red" v-if="item.tags === 'lose'" style="height: 20px; display: block; margin:5px ">lose</a-tag>
              <a-tag color="blue" v-else="item.tags === 'finish'" style="height: 20px; display: block; margin:5px ">finish</a-tag>
            </div>
          </template>
          <template #description>
            类型：{{item.type}}  -  {{item.time}}
          </template>
          <template #avatar>
            <avatar shape="square" style="background-color: #1890ff;" size="large">签到</avatar>
          </template>
        </ListItemMeta>
      </ListItem>    
    </template>
  </List>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { List, ListItem,ListItemMeta, Checkbox, Avatar, Badge } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import type { signinItem } from '@/views/sign/interface/SignInterface'

const router = useRouter();
const props = defineProps<{
  data: Array<signinItem>
}>();
const selectedItems = ref([]);

const navigateTo = (item:signinItem) => {
  const itemId = item.id
  const itemName = item.name
  const itemType = item.type
  router.push({path:"/detail/signDetail", query:{id:itemId,name:itemName,type:itemType}});
};
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
  border-radius: 0;
}

/* 移除操作按钮样式，因为当前模板中没有操作按钮 */
</style>