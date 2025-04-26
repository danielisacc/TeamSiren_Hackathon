import { AlertStatus } from "@/components/alert-status"
import { DisasterMap } from "@/components/disaster-map"
import { Header } from "@/components/header"
import { RecentAlerts } from "@/components/recent-alerts"
import { ResourcesList } from "@/components/resources-list"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-13rem)]">
          {/* Left column - stacked cards */}
          <div className="flex flex-col gap-6 h-full">
            <AlertStatus />
            <RecentAlerts />
          </div>

          {/* Right column - map */}
          <div className="lg:col-span-2 h-full">
            <DisasterMap />
          </div>
        </div>

        {/* Bottom row - horizontal cards */}
        <div className="mt-auto">
          <ResourcesList />
        </div>
      </main>
    </div>
  )
}
