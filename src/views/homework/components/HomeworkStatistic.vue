<template>
    <a-row gutter={16} class="row-item" style="margin: 20px;">
      <!-- 未签到次数卡片 -->
      <a-col span={8} class="col-item">
        <a-card class = 'card-item' >
          <template #title>
            <a-icon type="close-circle" /> 未完成
          </template>
          <a-statistic :value="missedCheckIns" />
        </a-card>
      </a-col>
  
      <!-- 出勤率卡片 -->
      <a-col span={8} class="col-item">
        <a-card class = 'card-item'>
          <template #title>
            <a-icon type="pie-chart" /> 完成率
          </template>
          <a-statistic
            :value="attendanceRate"
            :precision="2"
            suffix="%"
          />
        </a-card>
      </a-col>
  
      <!-- 出勤状况卡片 -->
      <a-col span={8} class="col-item">
        <a-card class = 'card-item'>
          <template #title>
            <a-icon type="smile" /> 完成状况
          </template>
          <a-statistic :value="attendanceStatus" />
        </a-card>
      </a-col>
    </a-row>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { Card, Row, Col, Statistic,} from 'ant-design-vue';
  //@ts-ignore
  import type {HomeworkDataFormat} from '@/views/homework/interface/DataFormat'

  
  // 示例数据
  const props = defineProps<{
  data: Array<HomeworkDataFormat>;
}>();
  
  // 计算未签到次数
  const missedCheckIns =props.data.filter(item => item.isFinish === 0).length;
  
  // 计算出勤率
  const attendanceRate = ((props.data.length - missedCheckIns) / props.data.length) * 100;
  
  // 判断出勤状况
  const attendanceStatus = attendanceRate > 90 ? '良' : '差';
  
  
  </script>
  
  <style>
    .card-item{
        display: flex;
        flex: 1;
    }
    .row-item{
        display: flex;
        flex: 1;
        justify-content: space-between;

    }
    .col-item{
        display: flex;
        flex: 1;
        justify-content: space-between;
        padding: 5px;
    }
</style>