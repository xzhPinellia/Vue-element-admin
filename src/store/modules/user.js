import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  toshow: 0,
  navcolor: 1
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  // 顶部导航
  add(state) {
    state.toshow = 1
  },
  reduciton(state) {
    state.toshow = 0
  },
  // 深色
  darkcolor(state) {
    state.navcolor = 2
  },
  // 亮色
  brightcolor(state) {
    state.navcolor = 1
  },
  // 主题色
  themecolor(state) {
    state.navcolor = 3
  }
}

const actions = {
  // user login
  // 登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
  // 顶部导航切换
  addFun(context) {
    context.commit('add')
  },
  // 侧边导航切换
  reducitonFun(context) {
    context.commit('reduciton')
  },
  // 深色
  darkColorFun(context) {
    context.commit('darkcolor')
  },
  // 亮色
  brightColorFun(context) {
    context.commit('brightcolor')
  },
  // 主题色
  themeColorFun(context) {
    context.commit('themecolor')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

