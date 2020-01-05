import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import { getToken } from '@/utils/auth' // 获取token令牌
import getPageTitle from '@/utils/get-page-title' // 获取动态的title

NProgress.configure({ showSpinner: false }) // 进度条的配置

const whiteList = ['/login'] // 重定向值不需要token值得页面

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // 确定用户是否已经登录
  const hasToken = getToken()
  // 有token
  if (hasToken) {
    if (to.path === '/login') {
      // 跳转到首页去
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // 移除令牌，重定向值登录页面
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 没有token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // 跳转到不需要token值得页面
      next()
    } else {
      // 没有访问权限的跳转至登录页去
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 进度条完成
  NProgress.done()
})
