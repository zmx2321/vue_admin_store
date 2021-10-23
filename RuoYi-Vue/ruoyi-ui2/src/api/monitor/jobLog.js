import request from '@/utils/request'

// 查询调度日志列表
export function listJobLog(query) {
  return request({
    url: process.env.VUE_APP_PROX + '/schedule/job/log/list',
    method: 'get',
    params: query
  })
}

// 删除调度日志
export function delJobLog(jobLogId) {
  return request({
    url: process.env.VUE_APP_PROX + '/schedule/job/log/' + jobLogId,
    method: 'delete'
  })
}

// 清空调度日志
export function cleanJobLog() {
  return request({
    url: process.env.VUE_APP_PROX + '/schedule/job/log/clean',
    method: 'delete'
  })
}
