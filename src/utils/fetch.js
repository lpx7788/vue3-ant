import axios from 'axios'
import instance from '@/main'

// 遮罩层组件
import {Loading} from 'element-ui'
// 消息通知组件
import {Notification} from 'element-ui'
import { MessageBox } from 'element-ui'
import {projectConfig} from '@/utils/projectConfig'
// 数据加载条显示组件

// 创建axios实例,用于请求后台,进行数据的交换
const service = axios.create({
  baseURL: process.env.HOST_NAME,
  timeout: 50000  // 请求超时时间
})

let loadingInstance

// request拦截器
service.interceptors.request.use(config => {
  // 获得请求的URL和请求的方法
  const requestUrl = config.url
  // 设置遮罩层
  if(config.data){
    if(config.data.loading){
      loadingInstance = Loading.service({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }
  }
  // 请求url上面加上时间戳
  if (requestUrl.indexOf('?') === -1 && requestUrl.lastIndexOf('&') === -1) {
    config.url = requestUrl + '?timestamp=' + new Date().getTime()
  } else if (requestUrl.lastIndexOf('&') !== -1) {
    config.url = requestUrl + 'timestamp=' + new Date().getTime()
  } else {
    config.url = requestUrl + '&timestamp=+' + new Date().getTime()
  }

  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// response,服务器端返回拦截器
service.interceptors.response.use(
  response => {
    // 关闭遮罩层
    if(loadingInstance){
      loadingInstance.close()
    }
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    let res = response.data
    if (response.headers['content-type'].indexOf('text/html') !== -1) {
      return response.data
    }
    if(res.errorCode === projectConfig.RESPONSE_CODE_SUCESS){
      return Promise.resolve(res); 
    }else{
      switch (res.errorCode){
        case projectConfig.RESPONSE_CODE_ERROR_COMPANY_NOJOIN:
          Notification.error({
            title: '错误',
            message: res.errorMsg
          })
          instance.$store.commit('verdictCompanyExist')
          return Promise.reject(res); 
          break;
        case projectConfig.RESPONSE_CODE_ERROR_WAREHOUSE_NULL:
          instance.$store.commit('warehouseDialogChange')
          return Promise.reject(res); 
          break;
        case projectConfig.RESPONSE_CODE_ERROR_LOG_OUT:
          // MessageBox.alert(('', '会话已过期, 请重新登陆')
          // , {
          //   type: 'warning'
          // }).then(() => {
            instance.$router.push({name:'logout'})
          // })
          return Promise.reject(res)
          break;
        case projectConfig.RESPONSE_CODE_ERROR_UPDATE_FLOATINGPRICE:
          instance.$store.commit('changeUpdateFloatingPriceTip')
          return Promise.reject(res)
          break;
        case projectConfig.RESPONSE_CODE_ERROR_UPDATE_PRODUCT_FLOATINGPRICE:
          instance.$store.commit('changeUpdateFloatingPriceTip')
          return Promise.reject(res)
          break;
        default:
          const _message = res.errorMsg
          Notification.error({
            title: '错误',
            message: _message
          })
          return Promise.reject(res); 
      }
    }
  },
  error => {
    // 关闭遮罩层
    if(loadingInstance){
      loadingInstance.close()
    }
    Notification.error({
      title: '错误',
      message: error.message
    })

    return Promise.reject(error)
  }
)

export default service
