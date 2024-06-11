import type{ RouteRecordRaw } from "vue-router"
import SiderBar from "@/components/SiderBar.vue"



const route:Array<RouteRecordRaw>=[
{
    name:"selfPage",
    path:"/self",
    component:SiderBar,
    meta:{
        title:"控制台"
    },
    children:[{
        name:"modify",
        path:"modify",
        component:()=>import('@/views/backEnd/personal/PersonalInfo.vue'),
        meta:{
            title:"个人信息"
        }
}]
}]

export default route