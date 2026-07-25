'use client'

import { motion } from 'framer-motion'
import { MoreVertical, Users, CheckCircle2 } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// ============================================
// PROJECTS DATA
// ============================================
const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    progress: 75,
    members: ['JD', 'AS', 'MK'],
    tasks: { completed: 15, total: 20 },
    status: 'In Progress',
    color: 'bg-blue-500',
    priority: 'high',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'iOS and Android app for customers',
    progress: 45,
    members: ['RB', 'TG', 'NK', 'PL'],
    tasks: { completed: 9, total: 20 },
    status: 'In Progress',
    color: 'bg-purple-500',
    priority: 'high',
  },
  {
    id: 3,
    name: 'Marketing Campaign Q4',
    description: 'Holiday season marketing campaign',
    progress: 90,
    members: ['SL', 'AM'],
    tasks: { completed: 18, total: 20 },
    status: 'Almost Done',
    color: 'bg-green-500',
    priority: 'medium',
  },
  {
    id: 4,
    name: 'API Integration',
    description: 'Third-party API integrations',
    progress: 30,
    members: ['DK', 'RJ'],
    tasks: { completed: 6, total: 20 },
    status: 'In Progress',
    color: 'bg-orange-500',
    priority: 'low',
  },
]

// ============================================
// PRIORITY BADGE COLORS
// ============================================
const priorityColors = {
  high: 'bg-red-500/10 text-red-500 border-red-500/20',
  medium: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  low: 'bg-green-500/10 text-green-500 border-green-500/20',
}

// ============================================
// RECENT PROJECTS COMPONENT
// ============================================
export function RecentProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-xl border border-border/40 bg-card p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Recent Projects</h3>
          <p className="text-sm text-muted-foreground">
            Your active projects
          </p>
        </div>
        <Button variant="ghost" size="sm">
          View all
        </Button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className="group cursor-pointer rounded-lg border border-border/40 p-4 transition-all hover:border-primary/40 hover:bg-muted/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className={cn('h-10 w-1 rounded-full', project.color)} />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold group-hover:text-primary">
                      {project.name}
                    </h4>
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
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 space-y-3">
              {/* Progress */}
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {/* Meta info */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.members.map((member, i) => (
                    <Avatar
                      key={i}
                      className="h-7 w-7 border-2 border-background"
                    >
                      <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                        {member}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {project.members.length > 3 && (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                      +{project.members.length - 3}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.members.length}
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {project.tasks.completed}/{project.tasks.total}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}