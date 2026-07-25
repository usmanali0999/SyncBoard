export const siteConfig = {
  name: 'SyncBoard',
  description: 'Real-time collaborative project management platform',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  version: '1.0.0',
  author: {
    name: 'Your Name',
    url: 'https://github.com/yourusername',
  },
  links: {
    github: 'https://github.com/yourusername/sync-board',
  },
}

export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
}