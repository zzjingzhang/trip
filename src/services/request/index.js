import axios from 'axios'
import {BASE_URL,TIMEOUT} from './config'

class CommonRequest{
  constructor(baseURL,timeout=10000){
     // axios.create()  创建axios实例
    this.instance = axios.create({
      baseURL,
      timeout
    })

  }
  request(config){
    return new Promise((resolve,reject)=>{
      this.instance.request(config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  }
  get(config){
    return this.request({...config,method:'get'})
  }
  post(config){
    return this.request({...config,method:'post'})
  }

}

export default new CommonRequest(BASE_URL,TIMEOUT)
