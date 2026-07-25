# 🚀 SyncBoard

A modern, real-time collaborative project management platform built with Next.js 16, TypeScript, and cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)


## ✨ Features

- 🎨 Modern UI/UX with dark mode support
- 📋 Kanban Boards with drag-and-drop functionality
- 👥 Real-time Collaboration with team members
- 📊 Analytics Dashboard with powerful insights
- 🔐 Role-based Access Control
- 🌓 Dark Mode support
- ⚡ Lightning Fast performance with Next.js 16
- 📱 Fully Responsive design


## 🛠️ Tech Stack

**Core**
- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- UI Components: shadcn/ui + Base UI

**State Management**
- Global State: Zustand
- Server State: TanStack Query (React Query)
- HTTP Client: Axios

**Forms & Validation**
- Forms: React Hook Form
- Validation: Zod

**UI & Animation**
- Animations: Framer Motion
- Drag & Drop: dnd-kit
- Charts: Recharts
- Icons: Lucide React
- Themes: next-themes

**Utilities**
- Dates: date-fns
- Class Names: clsx + tailwind-merge


## 📁 Project Structure

    sync-board/
    ├── src/
    │   ├── app/
    │   │   ├── (auth)/
    │   │   │   ├── login/
    │   │   │   └── register/
    │   │   ├── (dashboard)/
    │   │   │   ├── dashboard/
    │   │   │   ├── projects/
    │   │   │   ├── analytics/
    │   │   │   └── settings/
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── layout/
    │   │   ├── dashboard/
    │   │   ├── board/
    │   │   ├── modals/
    │   │   └── shared/
    │   ├── lib/
    │   ├── hooks/
    │   ├── store/
    │   ├── types/
    │   ├── config/
    │   ├── services/
    │   ├── utils/
    │   ├── styles/
    │   └── constants/
    ├── public/
    └── package.json


## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

Clone the repository:

    git clone https://github.com/yourusername/sync-board.git
    cd sync-board

Install dependencies:

    npm install

Run the development server:

    npm run dev

Open your browser at http://localhost:3000


## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start development server |
| npm run build | Build for production |
| npm run start | Start production server |
| npm run lint | Run ESLint |
| npm run format | Format code with Prettier |
| npm run type-check | Check TypeScript types |


## 🗺️ Roadmap

- [x] Project setup & architecture
- [x] Landing page
- [ ] Authentication (Login/Register)
- [ ] Dashboard layout
- [ ] Kanban board with drag & drop
- [ ] Task management (CRUD)
- [ ] Real-time collaboration
- [ ] Analytics dashboard
- [ ] Notifications system
- [ ] User settings & profile
- [ ] Role-based access control
- [ ] Testing & deployment


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!


## 📝 License

This project is MIT licensed.


## 👨‍💻 Author

**Usman Ali**

- GitHub: [@usmanali0999](https://github.com/usmanali0999)

---

⭐ If you like this project, please give it a star!