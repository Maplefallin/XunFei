import { instance } from './AxiosConfig'
import userStore from '@/stores/UserStore'

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    let userTokenStore = userStore()
    //token不为空则设置请求头
    if(userTokenStore.token){
      config.headers.Authorization = userTokenStore.token
    }
    return config
  },
  (error) => Promise.reject('请求错误')
)

//我希望我请求的数据格式为{...,data:{
//     status:xxx
// }}
//相应拦截器
instance.interceptors.response.use(async (response) => {
  const { data } = await response

  if (!Reflect.has(data, 'status')) {
    return Promise.reject('错误的相应数据')
  }
  return new Promise<any>((resolve, reject) => {
    resolve(data)
  }).catch((error) => {
    throw new Error(error)
  })
})
