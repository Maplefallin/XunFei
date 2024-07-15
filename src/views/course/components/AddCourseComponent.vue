<template>
  <div class="toolbar">
    <div style="margin: 10px">
      <Button type="primary" @click="toggleBatchAddMode">{{ isBatchAddMode ? '完成' : '批量添加' }}</Button>
    </div>
    <a-input-search
      placeholder="搜索"
      style="width: 300px; float: right;"
      v-model:value="searchItem"
      @search="handleSearch"
    />
  </div>

  <div class="scrollable-container">
    <a-row :gutter="[16, 16]">
      <a-col
        :span="6"
        v-for="item in displayData"
        :key="item.id"
      >
        <div class="item" @click="isBatchAddMode ? toggleSelect(item) : navigateToDetail(item)">
          <CourseItem :data="item"></CourseItem>
          <a-checkbox v-if="isBatchAddMode" :checked="selectedCourses[item.id]" @change="onChangeCheck(item, $event.target.checked)"></a-checkbox>
        </div>
      </a-col>
    </a-row>
  </div>

  <div v-if="isBatchAddMode">
    <Button type="primary" @click="submitSelectedCourses">添加选中课程</Button>
  </div>
</template>


  <script setup lang="ts">
  import { ref, onMounted,defineEmits } from 'vue';
  import type { CourseDataForm,SelectedCoursesType } from '../interface/DataFormat';
  import { useRouter } from 'vue-router';
  import CourseItem from '@/views/course/components/CourseItem.vue';
  import { Button, Checkbox, InputSearch } from 'ant-design-vue';
  
  const router = useRouter();
  const emit = defineEmits(['update:data']);

  const navigateTo = (path: string,item:CourseDataForm) => {
    const itemId = item.id
    const itemName = item.name
    router.push({path:path,query:{id:itemId,name:itemName}});
  };


  //获取全部，不能是只读数据,待修改。
  const data= ref<Array<CourseDataForm>>([
  {
    id:1,
    name : '计算机组成原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    //图片不能用相对路径
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:2,
    name : '计算机网络',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:3,
    name : '算法分析与设计',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  }, {
    id:4,
    name : '数据库原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:5,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
])

const allCourse = ref<Array<CourseDataForm>>([
  {
    id:1,
    name : '计算机组成原理', 
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    //图片不能用相对路径
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:2,
    name : '计算机网络',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:3,
    name : '算法分析与设计',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  }, {
    id:4,
    name : '数据库原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:5,
    name : '高等数学',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:6,
    name : '概率论与数理统计',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:7,
    name : '软件建模与分析',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:8,
    name : '编译原理',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
  {
    id:9,
    name : '操作系统',
    teacher_id : 1,
    teacher_name : '许小龙',
    semester : '2023-2024-2',
    cover_image : '/src/assets/img/image.png',
  },
])

    const isBatchAddMode = ref<boolean>(false);
    const searchItem = ref<string>('');
    const displayData = ref<Array<CourseDataForm>>(allCourse.value);
    const selectedCourses = ref<SelectedCoursesType>({});
    console.log(data.value)  

    const handleSearch = (searchValue: string) => {
      const filteredData = searchValue ? allCourse.value.filter((item) =>
        item.name.includes(searchValue) ||
        item.teacher_name.includes(searchValue) ||
        item.semester.includes(searchValue)
      ) : allCourse.value;
      displayData.value = filteredData;
    };

    const toggleBatchAddMode = () => {
      isBatchAddMode.value = !isBatchAddMode.value;
    };

    const toggleSelect = (item: CourseDataForm) => {
      selectedCourses.value[item.id.toString()] = !selectedCourses.value[item.id.toString()];
    };

    const onChangeCheck = (item: CourseDataForm, checked: boolean) => {
      selectedCourses.value[item.id.toString()] = checked;
    };

    const navigateToDetail = (item: CourseDataForm) => {
      navigateTo(`/detail/courseDetail`,item);
    };

    const submitSelectedCourses = () => {
      const coursesToAdd = Object.entries(selectedCourses.value)
        .filter(([, isSelected]) => isSelected)
        .map(([id]) => allCourse.value.find(course => course.id.toString() === id)!);

      const existingCourseIds = data.value.map(course => course.id);
      const newCourses = coursesToAdd.filter(course => !existingCourseIds.includes(course.id));

      if (newCourses.length !== coursesToAdd.length) {
        alert('部分课程已添加，未重复添加');
      }

      data.value.push(...newCourses);
      
      console.log(data.value)

      //触发自定义事件，传递更新后的data数组给父组件
      emit('update:data', data.value);
      
      isBatchAddMode.value = false;
      selectedCourses.value = {};
    };

    onMounted(() => {
      handleSearch('');
    });
</script>

  <style scoped>
  
  .item{
    background: transparent;
    border: 0;
    font-size: 14px;
    line-height: 120px;
    border-radius: 4px;
    padding: 0;
    position: relative; /* 为定位做准备 */
    padding-left: 20px; /* 为复选框留出空间 */
  }
  .item .ant-checkbox-wrapper {
  border: 5px;
  position: absolute; /* 绝对定位相对于.item */
  left: 4px;
  top: 2px;
}
  .scrollable-container {
    max-height: 40vh; /* 父组件高度 */
    overflow-y: auto; /* 超出高度时滚动 */
    overflow-x: hidden
  }
  
  
  </style>
  