'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle2,
  MessageSquare,
  UserPlus,
  FileText,
  AlertCircle,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

// ============================================
// ACTIVITY DATA
// ============================================
const activities = [
  {
    id: 1,
    user: 'Sarah Chen',
    initials: 'SC',
    action: 'completed task',
    target: 'Design new landing page',
    time: '2 minutes ago',
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    id: 2,
    user: 'Mike Johnson',
    initials: 'MJ',
    action: 'commented on',
    target: 'API Integration',
    time: '15 minutes ago',
    icon: MessageSquare,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    id: 3,
    user: 'Alex Turner',
    initials: 'AT',
    action: 'joined project',
    target: 'Mobile App Development',
    time: '1 hour ago',
    icon: UserPlus,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    id: 4,
    user: 'Emma Wilson',
    initials: 'EW',
    action: 'created document',
    target: 'Q4 Marketing Plan',
    time: '2 hours ago',
    icon: FileText,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    id: 5,
    user: 'David Kim',
    initials: 'DK',
    action: 'flagged',
    target: 'Bug in authentication',
    time: '3 hours ago',
    icon: AlertCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    id: 6,
    user: 'Lisa Park',
    initials: 'LP',
    action: 'completed task',
    target: 'Update user dashboard',
    time: '5 hours ago',
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
]

// ============================================
// ACTIVITY FEED COMPONENT
// ============================================
export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-xl border border-border/40 bg-card p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Team Activity</h3>
          <p className="text-sm text-muted-foreground">
            Real-time updates
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-medium text-green-500">Live</span>
        </div>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-muted/30"
            >
              <div className="relative">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                    {activity.initials}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    'absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background',
                    activity.bg
                  )}
                >
                  <activity.icon
                    className={cn('h-3 w-3', activity.color)}
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{activity.user}</span>{' '}
                  <span className="text-muted-foreground">
                    {activity.action}
                  </span>{' '}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  )
}