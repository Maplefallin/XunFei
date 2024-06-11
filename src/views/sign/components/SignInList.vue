<template>
  <a-table
    :columns="columns"
    :data-source="props.data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 540 }"
    style="margin: 10px;"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          <smile-outlined />
          课程名
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag v-if="record.tags === 'lose'" color="error">
            <template #icon>
              <close-circle-outlined />
            </template>
            lose
          </a-tag>
          <a-tag v-else-if="record.tags === 'finish'" color="success">
            <template #icon>
              <check-circle-outlined />
            </template>
            finish
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a-button type="link">查看</a-button>
          <a-divider type="vertical" />
          <a-button type="link">更多</a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SmileOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';
import type { TableColumnsType } from 'ant-design-vue';
import type { signinItem } from '@/views/sign/interface/SignInterface';

const props = defineProps<{
  data: Array<signinItem>;
}>();

const columns = ref<TableColumnsType>([
  {
    dataIndex: 'name',
    key: 'name',
    resizable: true,
    width: 150,
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    resizable: true,
    width: 100,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '状态',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '操作',
    key: 'action',
  },
]);
</script>

<style>
/* 添加你的样式 */
</style>
