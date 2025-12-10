import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'
import { useAccountStore } from '../stores/account'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const config: CreateAxiosDefaults = {
  baseURL: '',
  withCredentials: true,
}

let _server: AxiosInstance

export function server() {
  if (!_server) {
    if (SERVER_URL) {
      config.baseURL = SERVER_URL
    } else {
      config.baseURL = location.protocol + '//'

      // TODO: Handle different subdomains
      if (location.hostname.includes('xxx')) {
        config.baseURL += 'api.'
      }

      config.baseURL += location.hostname
    }

    const server = axios.create(config)

    server.interceptors.response.use(
      function (response) {
        console.log(response)

        return response
      },
      function (error) {
        console.log(error)

        if (error.response.status === 401 || error.response.status === 501) {
          useAccountStore().needLogin()
          return
        }

        return Promise.reject(error)
      },
    )

    server.defaults.headers.common['X-Origin-URL'] =
      window.location.href.split('?')[0]

    _server = server
  }

  return _server
}

let renewalTimer: number
const renewedListeners: (() => void)[] = []

export function addRenewedListener(listener: () => void) {
  renewedListeners.push(listener)
}

async function renew() {
  await server().put('account/renew')

  for (const listener of renewedListeners) {
    listener()
  }

  useAccountStore().updateLoginStatus()

  console.log('Token renewed.')
}

export function startRenewal() {
  renew()
  renewalTimer = window.setInterval(renew, 25 * 60 * 1000)
}

export function stopRenewal() {
  clearInterval(renewalTimer)
}
