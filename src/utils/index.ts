// Re-export everything from lib/utils for convenience
export * from '@/lib/utils'

// ============================================
// LOCAL STORAGE UTILITIES
// ============================================
export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      console.error('Error saving to localStorage')
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  },

  clear: (): void => {
    if (typeof window === 'undefined') return
    localStorage.clear()
  },
}

// ============================================
// VALIDATION UTILITIES
// ============================================
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8
}

// ============================================
// MOCK DATA GENERATOR
// ============================================
export function generateMockUser() {
  return {
    id: Math.random().toString(36).substring(2, 9),
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}