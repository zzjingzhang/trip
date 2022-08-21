import commonRequest from '../request'

export function getCityAll(){
  return commonRequest.get({
    url:'/city/all'
  })
}
