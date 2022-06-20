import { makeAutoObservable } from 'mobx'
import * as API from 'api/Api'
import { makePersistable } from 'mobx-persist-store'

export interface AuthContextType {
  isAuthenticated: boolean
  user?: API.User
  error?: string | { [key: string]: string }
  reloadAuthentication: () => void
  login: () => void
  logout: () => void
}

class AuthStore {
  isAuthenticated = false
  isLoading = false
  user?: API.User = undefined
  error?: string | { [key: string]: string } = undefined

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['isAuthenticated', 'user'],
      storage: window.localStorage
    })
  }

  login(user: API.User) {
    this.isAuthenticated = true
    this.user = user
  }

  logout() {
    this.isAuthenticated = false
    this.user = undefined
  }

  reloadAuthentication() {
    console.log('authStore -> reloadAuthentication')
  }
}

const authStore = new AuthStore()
export default authStore
