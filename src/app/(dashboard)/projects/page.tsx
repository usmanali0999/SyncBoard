'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Plus, Search, Filter, Grid3x3, List } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 'website-redesign',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with modern design',
    progress: 75,
    members: ['JD', 'AS', 'MK'],
    tasks: 20,
    completed: 15,
    color: 'from-blue-500 to-cyan-500',
    priority: 'high',
    dueDate: 'Dec 15, 2025',
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    description: 'iOS and Android app for customer engagement',
    progress: 45,
    members: ['RB', 'TG', 'NK', 'PL'],
    tasks: 32,
    completed: 14,
    color: 'from-purple-500 to-pink-500',
    priority: 'high',
    dueDate: 'Jan 30, 2026',
  },
  {
    id: 'marketing',
    name: 'Marketing Campaign Q4',
    description: 'Holiday season marketing across all channels',
    progress: 90,
    members: ['SL', 'AM'],
    tasks: 15,
    completed: 13,
    color: 'from-green-500 to-emerald-500',
    priority: 'medium',
    dueDate: 'Dec 20, 2025',
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    description: 'Third-party API integrations for payments',
    progress: 30,
    members: ['DK', 'RJ'],
    tasks: 18,
    completed: 5,
    color: 'from-orange-500 to-red-500',
    priority: 'low',
    dueDate: 'Feb 15, 2026',
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Internal analytics platform for insights',
    progress: 60,
    members: ['MK', 'JD', 'SC'],
    tasks: 25,
    completed: 15,
    color: 'from-indigo-500 to-purple-500',
    priority: 'medium',
    dueDate: 'Jan 10, 2026',
  },
  {
    id: 'user-onboarding',
    name: 'User Onboarding Flow',
    description: 'Improve first-time user experience',
    progress: 20,
    members: ['AS', 'PL'],
    tasks: 12,
    completed: 2,
    color: 'from-teal-500 to-cyan-500',
    priority: 'high',
    dueDate: 'Jan 5, 2026',
  },
]

const priorityColors = {
  high: 'bg-red-500/10 text-red-500 border-red-500/20',
  medium: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  low: 'bg-green-500/10 text-green-500 border-green-500/20',
}

export default function ProjectsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [search, setSearch] = useState('')

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="mt-1 text-muted-foreground">
            Manage and track all your projects
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <div className="flex items-center rounded-md border border-border">
            <Button
              variant={view === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setView('grid')}
              className="rounded-r-none"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={view === 'list' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setView('list')}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Link href={`/projects/${project.id}`}>
              <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
                {/* Gradient bar */}
                <div
                  className={cn(
                    'absolute inset-x-0 top-0 h-1 bg-gradient-to-r',
                    project.color
                  )}
                />

                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      'text-xs',
                      priorityColors[
                        project.priority as keyof typeof priorityColors
                      ]
                    )}
                  >
                    {project.priority}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between border-t border-border/40 pt-4">
                    <div className="flex -space-x-2">
                      {project.members.map((m, i) => (
                        <Avatar
                          key={i}
                          className="h-7 w-7 border-2 border-background"
                        >
                          <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                            {m}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project.completed}/{project.tasks} tasks
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Due {project.dueDate}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}