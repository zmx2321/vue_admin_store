import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: process.env.VUE_APP_PROX + '/system/menu/getRouters',
    method: 'get'
  })
}
