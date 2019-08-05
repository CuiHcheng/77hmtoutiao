// 存储信息的时候。  约定信息的KEY是什么   存储信息的值是什么
const KEY = 'hm-toutiao-77-user'

export default {
  setUser (user) {
    // 存储用户信息到sessionStorage
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  getUser () {
    // 获取用户信息从sessionStorage
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  clearUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
