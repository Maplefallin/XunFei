import { createApp } from 'vue'
import App from './App.vue'
import { routerSetUp } from './router'
import pinia from './stores'
//@ts-ignore
import VueAMap from 'vue-amap'
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
app.use(VueAMap)

VueAMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  });