<template>
  <a-card title="近期课程" style="margin-top: 16px;">
    <div style="display: flex;flex: 1;">
      <div :style="{ width: '300px', borderRadius: '4px' }">
        <a-calendar 
          v-model:value="value" 
          :fullscreen="false" 
          @panelChange="onPanelChange" 
          @select="onSelect" 
        />
      </div>
      <div>
        <CourseReminder :dayCourseInfo="filteredDayCourseInfo"/>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import CourseReminder from './CourseReminder.vue';
// @ts-ignore
import CourseInfo from '@/views/backEnd/personal/interface/DataFormat';
import { getDayCourse } from '@/api/course';

const value = ref<Dayjs>(dayjs());
const selectedDate = ref<Dayjs>(dayjs());

const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};

const dayCoursesInfo = ref<Array<CourseInfo>>([]);

//获取选择日期的课程的方法
const getSelectedDayCourse = async (selectedDate: string) => {
  const result = await getDayCourse(selectedDate);
  dayCoursesInfo.value = result.data.data;
};

//选择日期后执行的事件
const onSelect = (date: Dayjs) => {
  selectedDate.value = date;
  getSelectedDayCourse(date.format('YYYY-MM-DD'));
};

// 获取当天的课程信息
onMounted(() => {
  getSelectedDayCourse(dayjs().format('YYYY-MM-DD'));
});

// 测试数据
const dayCourseInfo = ref<Array<CourseInfo>> ([
  {
    name: '高等数学',
    time: {
      beginTime: '15:55:00',
      endTime: '17:35:00',
      duration: '100'
    },
    location: '文德S403'
  },
  {
    name: '概率统计',
    time: {
      beginTime: '15:55:00',
      endTime: '17:35:00',
      duration: '100'
    },
    location: '明德S403'
  },
  {
    name: '学术英语',
    time: {
      beginTime: '15:55:00',
      endTime: '17:35:00',
      duration: '100'
    },
    location: '揽江S403'
  },
  {
    name: '计算机网络',
    time: {
      beginTime: '15:55:00',
      endTime: '17:35:00',
      duration: '100'
    },
    location: '临江S403'
  },
])

const filteredDayCourseInfo = computed(() => {
  if (selectedDate.value) {
    // 假设课程信息有日期字段，进行过滤（这里假设日期格式为 'YYYY-MM-DD'）
    // 如果没有日期字段，需要补充日期字段和相应的逻辑
    return dayCourseInfo.value.filter(course => {
      // 比较逻辑，根据需要调整
      // return course.date === selectedDate.value.format('YYYY-MM-DD');
      return true; // 假设所有课程都显示，待具体日期字段添加后修改
    });
  }
  return dayCourseInfo.value;
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
.card {
  margin-bottom: 20px;
}
</style>
