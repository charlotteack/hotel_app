import axios from 'axios'
axios.defaults.withCredentials = true;

export function require(config) {

  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    //携带token
    let pathname = location.pathname;
    if(localStorage.getItem('loginToken')){
      if(pathname !== '/' &&  pathname !== '/login'){
        config.headers.common['token'] = localStorage.getItem('loginToken');
      }
    }

    return config
  })


  //响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  },error => {    //错误的情况下，统一处理
    if(error.response) {
      if(error.response.status === 401) {   //未登录情况
        this.$UI.Message({
          showClose: true,
          message: '您还未登录，请先登录再进行相关操作',
          type: 'error',
        })
        window.localStorage.removeItem('loginToken')
        this.$router.push('/login')
      }else {    //其他情况下
        this.$UI.Message({
          showClose: true,
          message: '网络请求错误',
          type: 'error',
        })
      }
    }
  })

  return instance(config)
}
