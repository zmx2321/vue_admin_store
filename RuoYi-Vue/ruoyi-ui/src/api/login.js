import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  return request({
    url: process.env.VUE_APP_PROX + '/auth/login',
    method: 'post',
    data: { username, password, code, uuid }
  })
}

// 注册方法
export function register(data) {
  return request({
    url: process.env.VUE_APP_PROX + '/auth/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 刷新方法
export function refreshToken() {
  return request({
    url: process.env.VUE_APP_PROX + '/auth/refresh',
    method: 'post'
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: process.env.VUE_APP_PROX + '/system/user/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: process.env.VUE_APP_PROX + '/auth/logout',
    method: 'delete'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: process.env.VUE_APP_PROX + '/code',
    method: 'get',
    timeout: 20000
  })
}
