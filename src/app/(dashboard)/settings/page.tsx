'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Bell, Lock, Palette, CreditCard, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
    updates: true,
  })

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              <Lock className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette className="mr-2 h-4 w-4" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="billing">
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Profile Information</h3>

              <div className="mb-6 flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-primary text-2xl text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Job Title</Label>
                  <Input defaultValue="Senior Developer" />
                </div>
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input defaultValue="TechCorp Inc." />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Bio</Label>
                  <Textarea
                    placeholder="Tell us about yourself"
                    defaultValue="Passionate developer with 5+ years of experience building scalable web applications."
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Notification Preferences
              </h3>

              <div className="space-y-4">
                {[
                  {
                    id: 'email',
                    label: 'Email Notifications',
                    desc: 'Receive email updates about your projects',
                  },
                  {
                    id: 'push',
                    label: 'Push Notifications',
                    desc: 'Get real-time notifications in your browser',
                  },
                  {
                    id: 'marketing',
                    label: 'Marketing Emails',
                    desc: 'Receive promotional content and offers',
                  },
                  {
                    id: 'updates',
                    label: 'Product Updates',
                    desc: 'Stay informed about new features',
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border/40 p-4"
                  >
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <Switch
                      checked={
                        notifications[item.id as keyof typeof notifications]
                      }
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          [item.id]: checked,
                        })
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Change Password</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>Confirm New Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleSave}>Update Password</Button>
              </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Two-Factor Authentication
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Theme Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Use the theme toggle in the navbar to change themes.
              </p>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Current Plan</h3>
              <div className="rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-bold">Pro Plan</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      $29/month · Billed monthly
                    </p>
                  </div>
                  <Button variant="outline">Upgrade</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}