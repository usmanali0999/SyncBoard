import { WelcomeBanner } from '@/components/dashboard/welcome-banner'
import { StatsCards } from '@/components/dashboard/stats-cards'
import { ActivityChart } from '@/components/dashboard/activity-chart'
import { TaskDistribution } from '@/components/dashboard/task-distribution'
import { RecentProjects } from '@/components/dashboard/recent-projects'
import { ActivityFeed } from '@/components/dashboard/activity-feed'

// ============================================
// DASHBOARD PAGE
// ============================================
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <div>
          <TaskDistribution />
        </div>
      </div>

      {/* Projects & Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentProjects />
        <ActivityFeed />
      </div>
    </div>
  )
}