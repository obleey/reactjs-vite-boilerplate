import { apiRequest } from './Api'

export interface LoginRegisterResponse {
  user: User
  error?: string
}

export interface RegisterInput {
  email: string
  password: string
  first_name: string
  last_name: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface User {
  id: number
  first_name: string
  last_name: string
  created_at: Date
  updated_at: Date
}

export interface UserDetailsResponse {
  user: User
}

export const register = async (data: RegisterInput) =>
  apiRequest<RegisterInput, LoginRegisterResponse>('post', 'signup', data)

export const login = async (data: LoginInput) =>
  apiRequest<LoginInput, LoginRegisterResponse>('post', 'login', data)

export const getUserDetails = () =>
  apiRequest<undefined, UserDetailsResponse>('get', 'me')
