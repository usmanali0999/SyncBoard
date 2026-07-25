// ============================================
// USER TYPES
// ============================================
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'member' | 'viewer'
  createdAt: Date
  updatedAt: Date
}

// ============================================
// PROJECT TYPES
// ============================================
export interface Project {
  id: string
  name: string
  description?: string
  color: string
  icon?: string
  ownerId: string
  members: ProjectMember[]
  boards: Board[]
  createdAt: Date
  updatedAt: Date
}

export interface ProjectMember {
  userId: string
  user: User
  role: 'admin' | 'member' | 'viewer'
  joinedAt: Date
}

// ============================================
// BOARD TYPES
// ============================================
export interface Board {
  id: string
  title: string
  projectId: string
  columns: Column[]
  createdAt: Date
  updatedAt: Date
}

// ============================================
// COLUMN TYPES
// ============================================
export interface Column {
  id: string
  title: string
  boardId: string
  order: number
  color?: string
  tasks: Task[]
  createdAt: Date
  updatedAt: Date
}

// ============================================
// TASK TYPES
// ============================================
export interface Task {
  id: string
  title: string
  description?: string
  columnId: string
  boardId: string
  assignees: User[]
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'todo' | 'in-progress' | 'in-review' | 'done'
  labels: Label[]
  dueDate?: Date
  order: number
  attachments: Attachment[]
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

// ============================================
// LABEL TYPES
// ============================================
export interface Label {
  id: string
  name: string
  color: string
}

// ============================================
// COMMENT TYPES
// ============================================
export interface Comment {
  id: string
  content: string
  taskId: string
  author: User
  createdAt: Date
  updatedAt: Date
}

// ============================================
// ATTACHMENT TYPES
// ============================================
export interface Attachment {
  id: string
  name: string
  url: string
  type: string
  size: number
  uploadedAt: Date
}

// ============================================
// NOTIFICATION TYPES
// ============================================
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  userId: string
  createdAt: Date
}

// ============================================
// ANALYTICS TYPES
// ============================================
export interface AnalyticsData {
  totalProjects: number
  totalTasks: number
  completedTasks: number
  pendingTasks: number
  overdueTask: number
  tasksByPriority: TasksByPriority[]
  tasksByStatus: TasksByStatus[]
  activityData: ActivityData[]
}

export interface TasksByPriority {
  priority: string
  count: number
}

export interface TasksByStatus {
  status: string
  count: number
}

export interface ActivityData {
  date: string
  tasks: number
  completed: number
}

// ============================================
// API TYPES
// ============================================
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

// ============================================
// FORM TYPES
// ============================================
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface CreateProjectForm {
  name: string
  description?: string
  color: string
}

export interface CreateTaskForm {
  title: string
  description?: string
  priority: Task['priority']
  dueDate?: Date
  assignees?: string[]
}