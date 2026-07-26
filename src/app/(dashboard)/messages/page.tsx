'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const contacts = [
  {
    id: 1,
    name: 'Sarah Chen',
    initials: 'SC',
    lastMessage: 'Sounds great! Let me know when...',
    time: '2m',
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: 'Design Team',
    initials: 'DT',
    lastMessage: 'Alex: Can everyone review the new mockups?',
    time: '15m',
    unread: 5,
    online: true,
    isGroup: true,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    initials: 'MJ',
    lastMessage: 'The API is ready for testing',
    time: '1h',
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    initials: 'EW',
    lastMessage: 'Thanks for the update!',
    time: '3h',
    unread: 0,
    online: true,
  },
  {
    id: 5,
    name: 'Dev Team',
    initials: 'DV',
    lastMessage: 'Standup at 10am tomorrow',
    time: '5h',
    unread: 0,
    online: true,
    isGroup: true,
  },
]

const messages = [
  {
    id: 1,
    text: 'Hey! How is the project going?',
    sender: 'them',
    time: '10:30 AM',
  },
  {
    id: 2,
    text: 'Going great! Just finished the dashboard design',
    sender: 'me',
    time: '10:32 AM',
  },
  {
    id: 3,
    text: 'That sounds amazing! Can you share the designs?',
    sender: 'them',
    time: '10:33 AM',
  },
  {
    id: 4,
    text: 'Sure! Let me send them over now',
    sender: 'me',
    time: '10:35 AM',
  },
  {
    id: 5,
    text: 'Perfect, waiting for them!',
    sender: 'them',
    time: '10:36 AM',
  },
  {
    id: 6,
    text: 'Sounds great! Let me know when you want to schedule a review meeting',
    sender: 'them',
    time: '10:40 AM',
  },
]

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [messageInput, setMessageInput] = useState('')

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-4">
      {/* Contacts Sidebar */}
      <div className="flex w-80 shrink-0 flex-col rounded-xl border border-border/40 bg-card">
        <div className="border-b border-border/40 p-4">
          <h2 className="mb-3 text-lg font-semibold">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-9" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {contacts.map((contact) => (
              <motion.button
                key={contact.id}
                whileHover={{ x: 2 }}
                onClick={() => setSelectedContact(contact)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors',
                  selectedContact.id === contact.id
                    ? 'bg-muted'
                    : 'hover:bg-muted/50'
                )}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback
                      className={cn(
                        'text-primary-foreground',
                        contact.isGroup ? 'bg-purple-500' : 'bg-primary'
                      )}
                    >
                      {contact.initials}
                    </AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate font-semibold text-sm">
                      {contact.name}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {contact.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="truncate text-xs text-muted-foreground">
                      {contact.lastMessage}
                    </p>
                    {contact.unread > 0 && (
                      <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col rounded-xl border border-border/40 bg-card">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-border/40 p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {selectedContact.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{selectedContact.name}</p>
              <p className="text-xs text-muted-foreground">
                {selectedContact.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  'flex',
                  msg.sender === 'me' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[70%] rounded-2xl px-4 py-2',
                    msg.sender === 'me'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={cn(
                      'mt-1 text-xs',
                      msg.sender === 'me'
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    )}
                  >
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t border-border/40 p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && messageInput.trim()) {
                  setMessageInput('')
                }
              }}
              className="flex-1"
            />
            <Button variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}