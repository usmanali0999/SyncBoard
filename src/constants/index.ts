export const APP_NAME = 'SyncBoard'
export const APP_DESCRIPTION =
  'Real-time collaborative project management platform'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROJECTS: '/projects',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
} as const

export const TASK_PRIORITIES = [
  { label: 'Low', value: 'low', color: '#22c55e' },
  { label: 'Medium', value: 'medium', color: '#f59e0b' },
  { label: 'High', value: 'high', color: '#f97316' },
  { label: 'Urgent', value: 'urgent', color: '#ef4444' },
] as const

export const TASK_STATUSES = [
  { label: 'To Do', value: 'todo', color: '#94a3b8' },
  { label: 'In Progress', value: 'in-progress', color: '#3b82f6' },
  { label: 'In Review', value: 'in-review', color: '#a855f7' },
  { label: 'Done', value: 'done', color: '#22c55e' },
] as const

export const PROJECT_COLORS = [
  '#ef4444', '#f97316', '#f59e0b',
  '#22c55e', '#3b82f6', '#a855f7',
  '#ec4899', '#14b8a6', '#6366f1',
] as const

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
} as const