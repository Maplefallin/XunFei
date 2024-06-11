import axios from 'axios'

const all_url: string =
  import.meta.env.VITE_BASE_REQUEST_URL + import.meta.env.VITE_BASE_URL_PREFIXER

const instance = axios.create({
  baseURL: all_url,
  timeout: 1000 * 1 //相当于1s
})
//导出axios实例
export { instance }
