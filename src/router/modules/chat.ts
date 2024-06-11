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
        title:"智慧Chat"
    },
    children:[{
        name:"chatPage",
        path:"chatroom",
        component:chatPage ,
        meta:{
            title:"聊天室"
        }
    }]
    
}
]
export default route
    