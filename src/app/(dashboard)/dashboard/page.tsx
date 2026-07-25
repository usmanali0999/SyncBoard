import {
  FolderKanban,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react'

// ============================================
// STATS DATA
// ============================================
const stats = [
  {
    label: 'Total Projects',
    value: '12',
    change: '+2 this month',
    icon: FolderKanban,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    label: 'Completed Tasks',
    value: '48',
    change: '+12 this week',
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    label: 'In Progress',
    value: '23',
    change: '+5 today',
    icon: Clock,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    label: 'Overdue',
    value: '3',
    change: '-2 from yesterday',
    icon: AlertCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
]

// ============================================
// DASHBOARD PAGE
// ============================================
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* ============ HEADER ============ */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, John! 👋
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* ============ STATS GRID ============ */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border/40 bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </div>
              <div className={`rounded-lg p-3 ${stat.bg}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============ PLACEHOLDER SECTIONS ============ */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border/40 bg-card p-6">
          <h3 className="text-lg font-semibold">Recent Projects</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your recent projects will appear here.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 bg-card p-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your recent activity will appear here.
          </p>
        </div>
      </div>
    </div>
  )
}