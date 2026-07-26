import Link from 'next/link'
import { Layout } from 'lucide-react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Branding */}
      <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-pink-600 lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <Link href="/" className="relative z-10 flex items-center gap-2 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
            <Layout className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold">SyncBoard</span>
        </Link>

        <div className="relative z-10 space-y-4 text-white">
          <blockquote className="text-2xl font-medium leading-relaxed">
            &quot;SyncBoard transformed how our team collaborates. We ship faster
            and our clients love it.&quot;
          </blockquote>
          <div>
            <p className="font-semibold">Sarah Chen</p>
            <p className="text-sm text-white/70">Product Manager at TechCorp</p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">
        {children}
      </div>
    </div>
  )
}