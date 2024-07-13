import { type RouteRecordRaw } from "vue-router";
import SiderBar from "@/components/SiderBar.vue";
import chatPage from "@/views/chat/ChatPage.vue";
const route:Array<RouteRecordRaw>=[
{
    name:"chat",
    path:"/chat",
    component:SiderBar,
    redirect:'chatPage ',
    meta:{
        title:"AI助教"
    },
    children:[{
        name:"chatPage",
        path:"chatroom",
        component:chatPage ,
        meta:{
            title:"聊天室"
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
    
}
]
export default route
    