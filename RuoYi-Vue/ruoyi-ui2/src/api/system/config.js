import request from '@/utils/request'

// 查询参数列表
export function listConfig(query) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config/list',
    method: 'get',
    params: query
  })
}

// 查询参数详细
export function getConfig(configId) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config/' + configId,
    method: 'get'
  })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config/configKey/' + configKey,
    method: 'get'
  })
}

// 新增参数配置
export function addConfig(data) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config',
    method: 'post',
    data: data
  })
}

// 修改参数配置
export function updateConfig(data) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config',
    method: 'put',
    data: data
  })
}

// 删除参数配置
export function delConfig(configId) {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config/' + configId,
    method: 'delete'
  })
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: process.env.VUE_APP_PROX + '/system/config/refreshCache',
    method: 'delete'
  })
}
