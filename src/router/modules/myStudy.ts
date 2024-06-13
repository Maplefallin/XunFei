import type{ RouteRecordRaw } from "vue-router"
import SiderBar from "@/components/SiderBar.vue"
import chatPage from "@/views/chat/ChatPage.vue";


const route:Array<RouteRecordRaw>=[
{
    name:"myStudy",
    path:"/myStudy",
    
    component:SiderBar,
    meta:{
        title:"我学的课"
    },
    children:[
        {
            name:"myCourse",
            path:"myCourse",
            //@ts-ignore
            component:()=>import('@/views/course/index.vue'),
            meta:{
                title:"我的课程"
            }
        },
        {
            name:"signin",
            path:"signin",
            component:()=>import('@/views/sign/index.vue'),
            meta:{
                title:"我的签到"
            }
        },
        {
            name:"homework",
            path:"homework",
            component:()=>import('@/views/backEnd/personal/PersonalInfo.vue'),
            meta:{
                title:"我的作业"
            }
        },
        {
            name:"record",
            path:"record",
            component:()=>import('@/views/backEnd/personal/PersonalInfo.vue'),
            meta:{
                title:"学习记录"
            }
        },
        {
            name:"chatPage",
            path:"chatroom",
            component:chatPage ,
            meta:{
                title:"AI助教"
            }
        },
        {
            name:"recommendCourse",
            path:"recommendCourse",
            component:()=>import('@/views/backEnd/personal/PersonalInfo.vue'),
            meta:{
                title:"AI推荐"
            }
        },
]
}]

export default route