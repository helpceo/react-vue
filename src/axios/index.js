import axios from 'axios'
import config from './config'

if (!axios) {
    console.error('You have to install axios')
}
//创建一个axios的实例,可以创建多个实例
let uaxios = axios.create(config)
// 通用拦截器
let interceptor = function(axios) {
    //添加一个请求拦截器
    axios.interceptors.request.use(config => {
        //在请求发出之前进行处理
        
        return config
        }, err => {
        //在请求错误的时候进行处理
        
        return Promise.reject(err)
    })
    // 添加一个响应拦截器
    axios.interceptors.response.use(
        response => {
            //在响应之后进行处理
  
            return response
        }, error => {
            //在响应错误的时候进行处理

            return Promise.reject(error)
    })
}
interceptor(uaxios)

export default uaxios