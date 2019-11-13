import request from '@/utils/request'

export function auth (login, password) {
  return request({
    url: '/auth',
    method: 'POST',
    data: {
      login,
      password
    }
  })
}
