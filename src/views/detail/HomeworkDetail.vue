<template>
  <Card style="height: 100vh;">
    <PageHeader>
      <h1 class="title-left">{{ nameRef }} : {{ contentRef }}</h1>
      <p class="title-tag"> 发布人： 许小龙 | 2023-2024-2</p>
    </PageHeader>

    <List
      item-layout="horizontal"
      :data-source="fileList"
      style="max-height: 30vh; overflow-y: auto; padding: 10px;"
    >
      <template #renderItem="{ item }">
        <ListItem class="list-item" @click="() => downloadFile(item.url)">
          <ListItemMeta
            :title="contentRef"
            :description="item.description"
          >
            <template #avatar>
              <Avatar
                shape="square"
                :style="{
                  backgroundColor: getBackgroundColor(item.type),
                  verticalAlign: 'middle',
                  color: '#fff'
                }"
                size="large"
              >
                {{ getTypeInitial(item.type) }}
              </Avatar>
            </template>
          </ListItemMeta>
          <!-- 预览按钮 -->
          <div class="actions">
            <Tooltip title="预览">
              <EyeOutlined
                style="font-size: 24px; color: #1890ff; cursor: pointer;"
                @click.stop="() => previewFile(item)"
              />
            </Tooltip>
          </div>
        </ListItem>
      </template>
    </List>

    <!-- 文件预览模态框 -->
    <Modal
      v-model:visible="previewVisible"
      title="文件预览"
      @ok="handlePreviewOk"
      @cancel="handlePreviewCancel"
      :width="800"
    >
      <component
        :is="getPreviewComponent(previewItem.type)"
        :src="previewUrl"
        style="width: 100%; height: 500px;"
      />
    </Modal>

    <div class="editor">
      <Editor></Editor>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Card, PageHeader, List, ListItem, ListItemMeta, Tooltip, Modal, Avatar } from 'ant-design-vue';
import { EyeOutlined } from '@ant-design/icons-vue';
//@ts-ignore
import Editor from "@/views/detail/component/Editor.vue"
//@ts-ignore
import PDFViewer from '@/views/detail/component/PDFViewer.vue';

const route = useRoute();
const idRef = ref<number | null>(1); // id可能是数字，也可能是null
const nameRef = ref<string>('高等数学');
const contentRef = ref<string>('');

// 监控路由参数和查询参数的变化
watch(
  () => ({
    id: route.query.id?.toString(),
    name: route.query.name?.toString(),
    content: route.query.content?.toString()
  }),
  ({ id, name, content }) => {
    // 确保id是数字，如果不是，则使用默认值1
    idRef.value = id ? parseInt(id, 10) : 1;
    // 更新nameRef的值
    nameRef.value = name || '高等数学';
    contentRef.value = content || '';
  },
  // 初始时立即执行回调函数
  { immediate: true }
);

const fileList = ref([
  { type: 'pdf', url: 'E:\Desktop\NUIST\算法分析与设计\实验\实验5\实验05_动态规划算法——多段图求解资源分配问题(1)', description: '这是一个PDF文件' },
  { type: 'word', url: 'http://example.com/file2.docx', description: '这是一个Word文件' },
  { type: 'other', url: 'http://example.com/file3.txt', description: '这是一个其他文件' },
]);

const previewVisible = ref(false);
const previewUrl = ref('');
const previewItem = ref<any>(null);

const downloadFile = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = ''; // 文件名根据实际需要设置
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const previewFile = (item: any) => {
  previewUrl.value = item.url;
  previewItem.value = item;
  previewVisible.value = true;
};

const handlePreviewOk = () => {
  // 处理预览确定按钮的逻辑
};

const handlePreviewCancel = () => {
  previewVisible.value = false;
};

const getBackgroundColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'pdf':
      return '#ff4d4f'; // 红色
    case 'word':
      return '#1890ff'; // 蓝色
    default:
      return '#ffc107'; // 黄色
  }
};

const getTypeInitial = (type: string) => {
  return type.charAt(0).toUpperCase();
};

const getPreviewComponent = (type: string) => {
  if (type.toLowerCase() === 'pdf') {
    return PDFViewer;
  }
  return 'iframe';
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

.actions {
  display: flex;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.editor{
  width: 98%;
  margin: 0 auto;
  position: absolute;
  bottom: 5%;
}
</style>
