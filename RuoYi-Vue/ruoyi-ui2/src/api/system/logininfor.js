import request from '@/utils/request'

// 查询登录日志列表
export function list(query) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/logininfor/list',
    method: 'get',
    params: query
  })
}

// 删除登录日志
export function delLogininfor(infoId) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/logininfor/' + infoId,
    method: 'delete'
  })
}

// 清空登录日志
export function cleanLogininfor() {
  return request({
    url: process.env.VUE_APP_PROX + '/system/logininfor/clean',
    method: 'delete'
  })
}
