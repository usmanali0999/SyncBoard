import axios from 'axios'
import type { ApiResponse, PaginatedResponse } from '@/types'
import { apiConfig } from '@/config'

// ============================================
// AXIOS INSTANCE
// ============================================
const api = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ============================================
// REQUEST INTERCEPTOR
// ============================================
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('auth-token')
        : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ============================================
// RESPONSE INTERCEPTOR
// ============================================
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth-token')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

// ============================================
// GENERIC API FUNCTIONS
// ============================================
export const apiService = {
  get: async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await api.get<ApiResponse<T>>(url)
    return response.data
  },

  post: async <T>(url: string, data?: unknown): Promise<ApiResponse<T>> => {
    const response = await api.post<ApiResponse<T>>(url, data)
    return response.data
  },

  put: async <T>(url: string, data?: unknown): Promise<ApiResponse<T>> => {
    const response = await api.put<ApiResponse<T>>(url, data)
    return response.data
  },

  patch: async <T>(url: string, data?: unknown): Promise<ApiResponse<T>> => {
    const response = await api.patch<ApiResponse<T>>(url, data)
    return response.data
  },

  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await api.delete<ApiResponse<T>>(url)
    return response.data
  },

  getPaginated: async <T>(
    url: string,
    page = 1,
    limit = 10
  ): Promise<PaginatedResponse<T>> => {
    const response = await api.get<PaginatedResponse<T>>(url, {
      params: { page, limit },
    })
    return response.data
  },
}

export default api