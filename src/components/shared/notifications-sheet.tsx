'use client'

import { useState } from 'react'
import { Bell, Check, CheckCheck, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface Notification {
  id: string
  user: string
  initials: string
  action: string
  target: string
  time: string
  read: boolean
  type: 'mention' | 'assign' | 'complete' | 'comment'
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    user: 'Sarah Chen',
    initials: 'SC',
    action: 'mentioned you in',
    target: 'Website Redesign',
    time: '2 min ago',
    read: false,
    type: 'mention',
  },
  {
    id: '2',
    user: 'Mike Johnson',
    initials: 'MJ',
    action: 'assigned you to',
    target: 'API Integration Task',
    time: '15 min ago',
    read: false,
    type: 'assign',
  },
  {
    id: '3',
    user: 'Alex Turner',
    initials: 'AT',
    action: 'completed',
    target: 'Design Review',
    time: '1 hour ago',
    read: false,
    type: 'complete',
  },
  {
    id: '4',
    user: 'Emma Wilson',
    initials: 'EW',
    action: 'commented on',
    target: 'Mobile App Development',
    time: '2 hours ago',
    read: true,
    type: 'comment',
  },
  {
    id: '5',
    user: 'David Kim',
    initials: 'DK',
    action: 'shared',
    target: 'Q4 Marketing Plan',
    time: '5 hours ago',
    read: true,
    type: 'comment',
  },
]

const typeColors = {
  mention: 'bg-blue-500',
  assign: 'bg-purple-500',
  complete: 'bg-green-500',
  comment: 'bg-amber-500',
}

export function NotificationsSheet() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  const markAllRead = () => {
    setNotifications((n) => n.map((notif) => ({ ...notif, read: true })))
    toast.success('All notifications marked as read')
  }

  const clearAll = () => {
    setNotifications([])
    toast.success('All notifications cleared')
  }

  const markAsRead = (id: string) => {
    setNotifications((n) =>
      n.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    )
  }

  return (
    <Sheet>
      <SheetTrigger className="relative inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors">
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -right-1 -top-1 h-5 w-5 justify-center p-0 text-xs"
          >
            {unreadCount}
          </Badge>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Notifications</SheetTitle>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllRead}
                disabled={unreadCount === 0}
              >
                <CheckCheck className="mr-1 h-3 w-3" />
                Mark all
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                disabled={notifications.length === 0}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <SheetDescription>
            You have {unreadCount} unread notifications
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="mt-6 h-[calc(100vh-10rem)] pr-4">
          {notifications.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center text-center">
              <div className="mb-3 rounded-full bg-muted p-3">
                <Bell className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">No notifications</p>
              <p className="text-xs text-muted-foreground">
                You&apos;re all caught up!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => markAsRead(notif.id)}
                  className={cn(
                    'group cursor-pointer rounded-lg border border-border/40 p-3 transition-all hover:bg-muted/50',
                    !notif.read && 'bg-primary/5 border-primary/20'
                  )}
                >
                  <div className="flex gap-3">
                    <div className="relative">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                          {notif.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={cn(
                          'absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background',
                          typeColors[notif.type]
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{notif.user}</span>{' '}
                        <span className="text-muted-foreground">
                          {notif.action}
                        </span>{' '}
                        <span className="font-medium">{notif.target}</span>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {notif.time}
                      </p>
                    </div>
                    {!notif.read && (
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}