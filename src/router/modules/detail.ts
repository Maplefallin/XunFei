import type{ RouteRecordRaw } from "vue-router"
import SiderBar from "@/components/SiderBar.vue"



const route:Array<RouteRecordRaw>=[
{
    name:"detail",
    path:"/detail",
    component:SiderBar,
    meta:{
        title:"详情信息"
    },
    children:[
        {
            name:"courseDetail",
            path:"courseDetail",
            //@ts-ignore
            component:()=>import('@/views/detail/CourseDetail.vue'),
            meta:{
                title:"课程详情"
            },
        }, 
        {
            name:"homeworkDetail",
            path:"homeworkDetail",
            //@ts-ignore
            component:()=>import('@/views/detail/HomeworkDetail.vue'),
            meta:{
                title:"作业详情"
            },
        },
        {
            name:"signDetail",
            path:"signDetail",
            //@ts-ignore
            component:()=>import('@/views/detail/SignDetail.vue'),
            meta:{
                title:"签到详情"
            },
        },
    

]
}]

export default route