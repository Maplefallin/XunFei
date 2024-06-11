import {type RouteRecordName, type Router} from 'vue-router'
import userStore from '@/stores/UserStore'

//@ts-ignore
import NProgress from 'nprogress'
import "nprogress/nprogress.css"



export const permissonSetUp=(router:Router)=>{
    beforeSetUp(router)
    afterSetUp(router)
}
//没有登陆的也可以进入
const whiteList:Array<String>=['/login']

//路由守卫
const beforeSetUp=(router:Router)=>{
    const uStore=userStore()
    router.beforeEach((from,to,next)=>{
        if(whiteList.includes(to.path)||uStore.token){
            next()
        }
        else{
            next({name:from.name as RouteRecordName})
        }
        NProgress.start()
    })
}


const afterSetUp=(router:Router)=>{
    router.afterEach((from,to)=>{
        NProgress.done()
    })
}
