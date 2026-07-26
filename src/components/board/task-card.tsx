'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { MessageSquare, Paperclip, Calendar } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface TaskCardProps {
  task: {
    id: string
    title: string
    description?: string
    priority: 'low' | 'medium' | 'high' | 'urgent'
    assignees: string[]
    dueDate?: string
    comments?: number
    attachments?: number
    labels?: string[]
  }
}

const priorityColors = {
  low: 'bg-green-500/10 text-green-500 border-green-500/20',
  medium: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  high: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  urgent: 'bg-red-500/10 text-red-500 border-red-500/20',
}

export function TaskCard({ task }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        'cursor-grab rounded-lg border border-border/40 bg-card p-4 transition-all hover:shadow-md active:cursor-grabbing',
        isDragging && 'shadow-lg ring-2 ring-primary'
      )}
    >
      {/* Labels */}
      {task.labels && task.labels.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-1">
          {task.labels.map((label) => (
            <span
              key={label}
              className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h4 className="mb-1 font-medium text-sm">{task.title}</h4>

      {/* Description */}
      {task.description && (
        <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">
          {task.description}
        </p>
      )}

      {/* Priority */}
      <Badge
        variant="outline"
        className={cn('mb-3 text-xs', priorityColors[task.priority])}
      >
        {task.priority}
      </Badge>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {task.assignees.map((a, i) => (
            <Avatar key={i} className="h-6 w-6 border-2 border-background">
              <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                {a}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {task.dueDate}
            </div>
          )}
          {task.comments !== undefined && task.comments > 0 && (
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              {task.comments}
            </div>
          )}
          {task.attachments !== undefined && task.attachments > 0 && (
            <div className="flex items-center gap-1">
              <Paperclip className="h-3 w-3" />
              {task.attachments}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}