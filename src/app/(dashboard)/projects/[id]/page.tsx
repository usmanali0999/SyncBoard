'use client'

import { useState } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, Settings, Plus, Filter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { KanbanColumn } from '@/components/board/kanban-column'
import { TaskCard } from '@/components/board/task-card'

// ============================================
// TYPES
// ============================================
interface Task {
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

interface Column {
  id: string
  title: string
  color: string
  tasks: Task[]
}

// ============================================
// INITIAL DATA
// ============================================
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-slate-500',
    tasks: [
      {
        id: 't1',
        title: 'Design new landing page',
        description: 'Create modern landing page design',
        priority: 'high',
        assignees: ['JD', 'SC'],
        dueDate: 'Dec 20',
        comments: 3,
        attachments: 2,
        labels: ['Design'],
      },
      {
        id: 't2',
        title: 'Setup CI/CD pipeline',
        priority: 'medium',
        assignees: ['MK'],
        dueDate: 'Dec 22',
        comments: 1,
        labels: ['DevOps'],
      },
      {
        id: 't3',
        title: 'Write API documentation',
        priority: 'low',
        assignees: ['AS'],
        labels: ['Docs'],
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'bg-blue-500',
    tasks: [
      {
        id: 't4',
        title: 'Implement authentication',
        description: 'JWT-based auth system',
        priority: 'urgent',
        assignees: ['JD', 'MK', 'SC'],
        dueDate: 'Dec 18',
        comments: 8,
        attachments: 4,
        labels: ['Backend', 'Security'],
      },
      {
        id: 't5',
        title: 'Build dashboard UI',
        priority: 'high',
        assignees: ['AS'],
        dueDate: 'Dec 19',
        comments: 5,
        labels: ['Frontend'],
      },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    color: 'bg-purple-500',
    tasks: [
      {
        id: 't6',
        title: 'Code review: Payment integration',
        priority: 'high',
        assignees: ['MK', 'PL'],
        dueDate: 'Dec 17',
        comments: 12,
        labels: ['Review'],
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-green-500',
    tasks: [
      {
        id: 't7',
        title: 'Setup project structure',
        priority: 'medium',
        assignees: ['JD'],
        labels: ['Setup'],
      },
      {
        id: 't8',
        title: 'Install dependencies',
        priority: 'low',
        assignees: ['SC'],
      },
    ],
  },
]

// ============================================
// KANBAN BOARD PAGE
// ============================================
export default function ProjectBoardPage() {
  const [columns, setColumns] = useState<Column[]>(initialColumns)
  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  )

  const findColumn = (taskId: string): Column | undefined => {
    return columns.find((col) => col.tasks.some((t) => t.id === taskId))
  }

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const column = findColumn(active.id as string)
    if (column) {
      const task = column.tasks.find((t) => t.id === active.id)
      if (task) setActiveTask(task)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveTask(null)

    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    const activeColumn = findColumn(activeId)
    const overColumn =
      columns.find((c) => c.id === overId) || findColumn(overId)

    if (!activeColumn || !overColumn) return

    if (activeColumn.id === overColumn.id) {
      // Same column - reorder
      const oldIndex = activeColumn.tasks.findIndex((t) => t.id === activeId)
      const newIndex = activeColumn.tasks.findIndex((t) => t.id === overId)

      if (oldIndex !== newIndex) {
        setColumns((cols) =>
          cols.map((col) =>
            col.id === activeColumn.id
              ? { ...col, tasks: arrayMove(col.tasks, oldIndex, newIndex) }
              : col
          )
        )
      }
    } else {
      // Different column - move
      const draggedTask = activeColumn.tasks.find((t) => t.id === activeId)
      if (!draggedTask) return

      setColumns((cols) =>
        cols.map((col) => {
          if (col.id === activeColumn.id) {
            return {
              ...col,
              tasks: col.tasks.filter((t) => t.id !== activeId),
            }
          }
          if (col.id === overColumn.id) {
            return { ...col, tasks: [...col.tasks, draggedTask] }
          }
          return col
        })
      )
    }
  }

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href="/projects">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Website Redesign</h1>
            <p className="text-sm text-muted-foreground">
              Complete overhaul of company website
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {['JD', 'AS', 'MK', 'SC'].map((m, i) => (
              <Avatar
                key={i}
                className="h-8 w-8 border-2 border-background"
              >
                <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                  {m}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Button variant="outline" size="sm">
            <Users className="mr-2 h-4 w-4" />
            Invite
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </motion.div>

      {/* Board */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex h-full gap-4 pb-4">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                id={column.id}
                title={column.title}
                color={column.color}
                tasks={column.tasks}
              />
            ))}

            {/* Add Column */}
            <button className="flex h-fit w-80 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border/40 p-4 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
              <Plus className="h-4 w-4" />
              Add another list
            </button>
          </div>

          <DragOverlay>
            {activeTask && <TaskCard task={activeTask} />}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  )
}