<template>
  <Layout class="layout">
    <UserHeader :name="name" :todayUseTime="todayUseTime"></UserHeader>
    <LayoutContent >
      <Row :gutter="16">
        <Col span="12">
          <CalendarWatch></CalendarWatch>
        </Col>
        <Col span="12">
          
        </Col>
      </Row> 
    </LayoutContent>
  </Layout>

</template>

<script setup  lang="ts">
//@ts-ignore
import UserHeader from '@/views/backEnd/personal/components/UserHeader.vue'
//@ts-ignore
import CalendarWatch from '@/views/backEnd/personal/components/CalendarWatch.vue'
//@ts-ignore
import CourseReminder from '@/views/backEnd/personal/components/CourseReminder.vue'
import { Layout,LayoutContent,Row,Col,LayoutFooter} from 'ant-design-vue';
import { ref } from 'vue';

const name = ref('吴彦祖')
const todayUseTime = ref('2 hour 34 minutes')

</script>

<style>
 .layout {
  min-height: 100vh;
}


</style>
