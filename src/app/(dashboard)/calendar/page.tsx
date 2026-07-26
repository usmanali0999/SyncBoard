'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const events = [
  { day: 5, title: 'Design Review', color: 'bg-blue-500', time: '10:00 AM' },
  { day: 5, title: 'Team Standup', color: 'bg-purple-500', time: '2:00 PM' },
  { day: 8, title: 'Client Meeting', color: 'bg-green-500', time: '11:00 AM' },
  { day: 12, title: 'Sprint Planning', color: 'bg-amber-500', time: '9:00 AM' },
  { day: 15, title: 'Product Launch', color: 'bg-red-500', time: '3:00 PM' },
  { day: 18, title: 'Team Building', color: 'bg-pink-500', time: '5:00 PM' },
  { day: 22, title: 'Quarterly Review', color: 'bg-indigo-500', time: '10:00 AM' },
  { day: 25, title: 'Design Workshop', color: 'bg-cyan-500', time: '2:00 PM' },
  { day: 28, title: 'Retrospective', color: 'bg-orange-500', time: '4:00 PM' },
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function CalendarPage() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const goToToday = () => {
    setCurrentMonth(today.getMonth())
    setCurrentYear(today.getFullYear())
  }

  const getEventsForDay = (day: number) => events.filter((e) => e.day === day)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="mt-1 text-muted-foreground">
            View and manage your schedule
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Event
          </Button>
        </div>
      </div>

      {/* Calendar Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border/40 bg-card p-6"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <Button variant="outline" size="sm" onClick={goToToday}>
              Today
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={goToPrevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Days of week header */}
        <div className="mb-2 grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-semibold text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells before first day */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[100px]" />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const dayEvents = getEventsForDay(day)
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()

            return (
              <motion.div
                key={day}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  'min-h-[100px] cursor-pointer rounded-lg border border-border/40 p-2 transition-all hover:border-primary/40 hover:shadow-md',
                  isToday && 'border-primary bg-primary/5'
                )}
              >
                <div
                  className={cn(
                    'mb-1 text-sm font-semibold',
                    isToday && 'text-primary'
                  )}
                >
                  {day}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event, i) => (
                    <div
                      key={i}
                      className={cn(
                        'truncate rounded px-1.5 py-0.5 text-xs text-white',
                        event.color
                      )}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-muted-foreground">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border border-border/40 bg-card p-6"
      >
        <h3 className="mb-4 text-lg font-semibold">Upcoming Events</h3>
        <div className="space-y-3">
          {events.slice(0, 5).map((event, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-lg border border-border/40 p-4 transition-colors hover:bg-muted/30"
            >
              <div className={cn('h-12 w-1 rounded-full', event.color)} />
              <div className="flex-1">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">
                  {monthNames[currentMonth]} {event.day} • {event.time}
                </p>
              </div>
              <Badge variant="outline">Upcoming</Badge>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}