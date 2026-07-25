'use client'

import { motion } from 'framer-motion'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

// ============================================
// DATA
// ============================================
const data = [
  { name: 'Completed', value: 148, color: '#22c55e' },
  { name: 'In Progress', value: 23, color: '#3b82f6' },
  { name: 'In Review', value: 12, color: '#a855f7' },
  { name: 'Overdue', value: 3, color: '#ef4444' },
]

const total = data.reduce((sum, item) => sum + item.value, 0)

// ============================================
// TASK DISTRIBUTION COMPONENT
// ============================================
export function TaskDistribution() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-xl border border-border/40 bg-card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Task Distribution</h3>
        <p className="text-sm text-muted-foreground">
          Breakdown by status
        </p>
      </div>

      <div className="relative h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{total}</span>
          <span className="text-xs text-muted-foreground">Total Tasks</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{item.value}</span>
              <span className="text-xs text-muted-foreground">
                ({Math.round((item.value / total) * 100)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}