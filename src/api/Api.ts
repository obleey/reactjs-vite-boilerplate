import Axios from 'axios'

export async function apiRequest<D = Record<string, unknown>, R = unknown>(
  method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch',
  path: string,
  input?: D,
  options?: any
) {
  const res = await Axios.request<R>({
    url: `${import.meta.env.VITE_API_URL}/${path}`,
    method: method,
    data: input,
    withCredentials: true
  })

  return res.data
}

export * from './User'
