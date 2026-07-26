'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Search,
  Plus,
  Mail,
  MoreVertical,
  Filter,
  UserPlus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const members = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah@company.com',
    role: 'Admin',
    department: 'Product',
    status: 'active',
    initials: 'SC',
    projects: 8,
    tasks: 42,
  },
  {
    id: 2,
    name: 'Mike Johnson',
    email: 'mike@company.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'active',
    initials: 'MJ',
    projects: 5,
    tasks: 28,
  },
  {
    id: 3,
    name: 'Alex Turner',
    email: 'alex@company.com',
    role: 'Designer',
    department: 'Design',
    status: 'active',
    initials: 'AT',
    projects: 6,
    tasks: 35,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    email: 'emma@company.com',
    role: 'Manager',
    department: 'Marketing',
    status: 'away',
    initials: 'EW',
    projects: 12,
    tasks: 58,
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david@company.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'offline',
    initials: 'DK',
    projects: 4,
    tasks: 22,
  },
  {
    id: 6,
    name: 'Lisa Park',
    email: 'lisa@company.com',
    role: 'Designer',
    department: 'Design',
    status: 'active',
    initials: 'LP',
    projects: 7,
    tasks: 31,
  },
  {
    id: 7,
    name: 'Tom Garcia',
    email: 'tom@company.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'active',
    initials: 'TG',
    projects: 3,
    tasks: 18,
  },
  {
    id: 8,
    name: 'Nina Kumar',
    email: 'nina@company.com',
    role: 'PM',
    department: 'Product',
    status: 'away',
    initials: 'NK',
    projects: 9,
    tasks: 45,
  },
]

const roleColors = {
  Admin: 'bg-red-500/10 text-red-500 border-red-500/20',
  Manager: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  Developer: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Designer: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
  PM: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
}

const statusColors = {
  active: 'bg-green-500',
  away: 'bg-amber-500',
  offline: 'bg-gray-500',
}

export default function TeamPage() {
  const [search, setSearch] = useState('')

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your team and their roles
          </p>
        </div>
        <Button onClick={() => toast.success('Invite modal would open')}>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: 'Total Members', value: '24', color: 'text-blue-500' },
          { label: 'Active Now', value: '18', color: 'text-green-500' },
          { label: 'Away', value: '4', color: 'text-amber-500' },
          { label: 'Departments', value: '6', color: 'text-purple-500' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border/40 bg-card p-4"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className={cn('mt-1 text-2xl font-bold', stat.color)}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search members..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-border/40 bg-card p-6 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="relative">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-lg text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    'absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background',
                    statusColors[member.status as keyof typeof statusColors]
                  )}
                />
              </div>
              <DropdownMenu>
  <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md opacity-0 transition-all hover:bg-accent group-hover:opacity-100">
    <MoreVertical className="h-4 w-4" />
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>View Profile</DropdownMenuItem>
    <DropdownMenuItem>Send Message</DropdownMenuItem>
    <DropdownMenuItem>Edit Role</DropdownMenuItem>
    <DropdownMenuItem className="text-destructive">
      Remove
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">
                {member.department}
              </p>
            </div>

            <Badge
              variant="outline"
              className={cn(
                'mt-3 text-xs',
                roleColors[member.role as keyof typeof roleColors]
              )}
            >
              {member.role}
            </Badge>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="h-3 w-3" />
              <span className="truncate">{member.email}</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/40 pt-4">
              <div>
                <p className="text-xs text-muted-foreground">Projects</p>
                <p className="text-lg font-semibold">{member.projects}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tasks</p>
                <p className="text-lg font-semibold">{member.tasks}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}