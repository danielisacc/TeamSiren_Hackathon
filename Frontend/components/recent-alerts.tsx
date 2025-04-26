import { ArrowUpRight, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      title: "Flood",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
    },
    {
      id: 2,
      title: "Fire",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
    },
    {
      id: 3,
      title: "Tornado",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
    },
    {
      id: 4,
      title: "Severe Weather",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200"
      case "medium":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "info":
        return "bg-blue-100 text-blue-700 border-blue-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  return (
    <Card className="border-slate-200 shadow-sm flex-1 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 z-0"></div>

      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5 text-slate-500" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 relative z-10">
        <ScrollArea className="h-[calc(100%-3.5rem)] max-h-[calc(100vh-20rem)]">
          <div className="px-4 pb-4 space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="p-3 border rounded-lg flex flex-col gap-2 hover:bg-slate-50 transition-colors bg-white/80"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-slate-900">{alert.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${getSeverityColor(alert.severity)}`}>
                    {alert.severity === "high" ? "Urgent" : alert.severity === "medium" ? "Warning" : "Info"}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{alert.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">{alert.time}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    Details
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
