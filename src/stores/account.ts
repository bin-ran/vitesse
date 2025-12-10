import { AxiosError } from 'axios'
import Cookie from 'js-cookie'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { server, startRenewal, stopRenewal } from '../manager/server'

export interface User {
  id: number
  name: string
  username: string
  email: string
  phoneNumber: string
  avatar: string
  sex: number
  role?: number
}

export const useAccountStore = defineStore('account', () => {
  const isNeedLogin = ref(false)
  const user = ref<User>(JSON.parse(localStorage.getItem('user') || '{}'))

  const isLoggedIn = ref(Cookie.get('auth_status') === '1')

  function needLogin() {
    isNeedLogin.value = true
    stopRenewal()
  }

  function updateLoginStatus() {
    isLoggedIn.value = Cookie.get('auth_status') === '1'
  }

  async function login(username: string, password: string) {
    try {
      const data = (
        await server().post(
          'account/login',
          new URLSearchParams({
            username,
            password,
          }),
        )
      ).data.data

      isNeedLogin.value = false
      user.value = data
      localStorage.setItem('user', JSON.stringify(data))

      startRenewal()
    } catch (e) {
      console.log(e)

      if (e instanceof AxiosError) {
        switch (e.response?.status) {
          case 400:
            throw '用户名或密码错误'
          case 500:
            throw '服务器错误'
          default:
            throw '网络错误'
        }
      } else {
        throw '无法连接到服务器'
      }
    }
  }

  async function logout() {
    try {
      await server().post('account/logout')
      localStorage.clear()
      location.reload()
    } catch (err) {
      throw err
    }
  }

  async function changePassword(oldPassword: string, newPassword: string) {
    try {
      await server().put(
        'account/password',
        new URLSearchParams({ oldPassword, newPassword }),
      )
    } catch (e) {
      console.error(e)
      if (e instanceof AxiosError) {
        switch (e.response?.status) {
          case 400:
            throw e.response.data || '请求参数错误'
          case 500:
            throw '服务器错误'
          default:
            throw '网络错误'
        }
      } else {
        throw '无法连接到服务器'
      }
    }
  }

  return {
    isNeedLogin,
    user,
    isLoggedIn,
    needLogin,
    login,
    logout,
    updateLoginStatus,
    changePassword,
  }
})
