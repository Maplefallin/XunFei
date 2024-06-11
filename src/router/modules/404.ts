import type {RouteRecordRaw} from  'vue-router'


const route:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'',
        redirect:'/login',
        meta:{
            title:''
        }
    },
    {
        path:'/404',
        name:'404',
        //@ts-ignore
        component:()=>import('@/views/404/404.vue'),
        meta:{
            title:'登录'
        }
    }
]


export default route