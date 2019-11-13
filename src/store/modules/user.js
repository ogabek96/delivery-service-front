import jwt from 'jsonwebtoken'
import { setToken, getToken } from '@/utils/token'
const user = {
  state: {
    data: {},
    token: getToken()
  },
  mutations: {
    SET_USER: (state, user) => {
      state.data = user
    }
  },
  actions: {
    SaveToken ({ commit }, token) {
      return new Promise((resolve, reject) => {
        try {
          setToken(token)
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    },
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.token) {
          try {
            const { user } = jwt.decode(state.token)
            commit('SET_USER', user)
            resolve(user)
          } catch (err) {
            reject(err)
          }
        }
      })
    }
  }
}
export default user;
