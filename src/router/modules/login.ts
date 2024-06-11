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
        path:'/login',
        name:'Login',
        component:()=>import('@/views/login/LoginRegister.vue'),
        meta:{
            title:'登录'
        }
    }
]


export default route