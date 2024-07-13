<template>
  <List
    item-layout="horizontal"
    :data-source="props.dayCourseInfo"
    style="max-height: 300px;width: 320px; overflow-y: auto; padding: 10px; gap: 10px;"
  >
    <template #renderItem="{ item }">
      <ListItem class="list-item" @click = "navigateTo('/myStudy/signin')">
        <ListItemMeta>
          <template #title>
            <p>{{ item.name }}</p>
          </template>
          <template #description>
            {{ item.time.beginTime }} - {{ item.time.endTime }} | {{ item.location }}
          </template>
          <template #avatar>
            <Avatar  shape="square":style="{ backgroundColor: '#1890ff', verticalAlign: 'middle' }">
              {{item.name}}
            </Avatar>
          </template>
        </ListItemMeta>
      </ListItem>
    </template>
  </List>
</template>

<script lang="ts" setup>
import { List, ListItem, ListItemMeta, Avatar } from 'ant-design-vue';
//@ts-ignore
import { CourseInfo } from '@/views/backEnd/personal/interface/DataFormat';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const props = defineProps<{
      dayCourseInfo : Array<CourseInfo>
    }>();

const navigateTo = (path: string) => {
    router.push(path);
  };

</script>

<style>
.list-item{

  margin-bottom: 10px; 
  border: 1px solid #e8e8e8; 
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

</style>
