import { createApp } from 'vue'
import App from './App.vue'
import { routerSetUp } from './router'
import pinia from './stores'
//@ts-ignore
import {createPersistedState} from 'pinia-persistedstate-plugin'

//把echarts的配置文件引入
import '@/hooks/ChartsConfig'
import '@/utils/axios/AxiosInteceptor'
import "@/style/main.css"

const persist = createPersistedState()
pinia.use(persist)
const app = createApp(App)
app.use(pinia)
app.use(routerSetUp())
app.mount('#app')
