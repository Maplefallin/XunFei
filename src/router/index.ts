import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
//@ts-ignore
//import Error from '@/views/404/404.vue'
import { permissonSetUp } from './permission'


export const routerSetUp=()=>{

const routes=import.meta.glob("./modules/*.ts",{eager:true})
const routeList:Array<RouteRecordRaw>=[]
Object.keys(routes).forEach(key=>{
  if(Array.isArray((routes[key] as any).default)){
    routeList.push(...(routes[key] as any).default)
  }
  else{
    routeList.push((routes[key] as any).default)
  }
})
const router = createRouter({
  history: createWebHistory(''),
  routes: routeList
})

permissonSetUp(router)
return router
}
//export default router
