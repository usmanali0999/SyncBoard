'use client'

import { Search, Plus, User, Settings, LogOut, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { CommandPalette } from '@/components/shared/command-palette'
import { NotificationsSheet } from '@/components/shared/notifications-sheet'
import { toast } from 'sonner'

export function Navbar() {
  return (
    <>
      <CommandPalette />
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border/40 bg-background/80 px-4 backdrop-blur-md sm:px-6">
        {/* Command Palette Trigger */}
        <button
          onClick={() => {
            const event = new KeyboardEvent('keydown', {
              key: 'k',
              metaKey: true,
              ctrlKey: true,
            })
            document.dispatchEvent(event)
          }}
          className="flex flex-1 items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted max-w-md"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left">Search anything...</span>
          <kbd className="hidden items-center gap-1 rounded border border-border bg-background px-1.5 py-0.5 text-xs sm:flex">
            <Command className="h-3 w-3" />
            K
          </kbd>
        </button>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:flex"
            onClick={() => toast.success('New project modal would open')}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>

          <ThemeToggle />
          <NotificationsSheet />

          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => toast.success('Logged out successfully')}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  )
}