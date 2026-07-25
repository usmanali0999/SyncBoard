import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User, Project, Task, Notification } from '@/types'

// ============================================
// AUTH STORE
// ============================================
interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  setIsAuthenticated: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        setUser: (user) => set({ user }),
        setIsAuthenticated: (value) => set({ isAuthenticated: value }),
        setIsLoading: (value) => set({ isLoading: value }),
        logout: () =>
          set({ user: null, isAuthenticated: false }),
      }),
      { name: 'auth-storage' }
    )
  )
)

// ============================================
// PROJECT STORE
// ============================================
interface ProjectState {
  projects: Project[]
  activeProject: Project | null
  isLoading: boolean
  setProjects: (projects: Project[]) => void
  setActiveProject: (project: Project | null) => void
  addProject: (project: Project) => void
  updateProject: (id: string, project: Partial<Project>) => void
  deleteProject: (id: string) => void
  setIsLoading: (value: boolean) => void
}

export const useProjectStore = create<ProjectState>()(
  devtools((set) => ({
    projects: [],
    activeProject: null,
    isLoading: false,
    setProjects: (projects) => set({ projects }),
    setActiveProject: (project) => set({ activeProject: project }),
    addProject: (project) =>
      set((state) => ({ projects: [...state.projects, project] })),
    updateProject: (id, updatedProject) =>
      set((state) => ({
        projects: state.projects.map((p) =>
          p.id === id ? { ...p, ...updatedProject } : p
        ),
      })),
    deleteProject: (id) =>
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== id),
      })),
    setIsLoading: (value) => set({ isLoading: value }),
  }))
)

// ============================================
// TASK STORE
// ============================================
interface TaskState {
  tasks: Task[]
  activeTask: Task | null
  isLoading: boolean
  setTasks: (tasks: Task[]) => void
  setActiveTask: (task: Task | null) => void
  addTask: (task: Task) => void
  updateTask: (id: string, task: Partial<Task>) => void
  deleteTask: (id: string) => void
  moveTask: (taskId: string, newColumnId: string) => void
  setIsLoading: (value: boolean) => void
}

export const useTaskStore = create<TaskState>()(
  devtools((set) => ({
    tasks: [],
    activeTask: null,
    isLoading: false,
    setTasks: (tasks) => set({ tasks }),
    setActiveTask: (task) => set({ activeTask: task }),
    addTask: (task) =>
      set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (id, updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id ? { ...t, ...updatedTask } : t
        ),
      })),
    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
      })),
    moveTask: (taskId, newColumnId) =>
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === taskId ? { ...t, columnId: newColumnId } : t
        ),
      })),
    setIsLoading: (value) => set({ isLoading: value }),
  }))
)

// ============================================
// UI STORE
// ============================================
interface UIState {
  isSidebarOpen: boolean
  isModalOpen: boolean
  modalType: string | null
  notifications: Notification[]
  unreadCount: number
  toggleSidebar: () => void
  setSidebarOpen: (value: boolean) => void
  openModal: (type: string) => void
  closeModal: () => void
  addNotification: (notification: Notification) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isSidebarOpen: true,
    isModalOpen: false,
    modalType: null,
    notifications: [],
    unreadCount: 0,
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebarOpen: (value) => set({ isSidebarOpen: value }),
    openModal: (type) => set({ isModalOpen: true, modalType: type }),
    closeModal: () => set({ isModalOpen: false, modalType: null }),
    addNotification: (notification) =>
      set((state) => ({
        notifications: [notification, ...state.notifications],
        unreadCount: state.unreadCount + 1,
      })),
    markAsRead: (id) =>
      set((state) => ({
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, read: true } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      })),
    markAllAsRead: () =>
      set((state) => ({
        notifications: state.notifications.map((n) => ({
          ...n,
          read: true,
        })),
        unreadCount: 0,
      })),
  }))
)