import { ArrowUpRight, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      title: "Flood",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
      background: "https://www.ready.gov/sites/default/files/2020-04/Flooded-neighborhood_1.jpg"
    },
    {
      id: 2,
      title: "Fire",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
      background: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      title: "Tornado",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
      background: "data:image/jpeg;base64,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"
    },
    {
      id: 4,
      title: "Severe Weather",
      location: "Austin",
      time: "1 hour ago",
      severity: "high",
      background: "https://www.verywellhealth.com/thmb/JIhP1kxTPdyhKsG1wwej2NOB8eQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-107245918-c54bdf2e6ed048aeae92304cb0353282.jpg"
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

      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 z-0"></div>

      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5 text-slate-500" />
          What to do :
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 relative z-10">
        <ScrollArea className="h-[calc(100%-3.5rem)] max-h-[calc(100vh-20rem)]">
          <div className="px-4 pb-4 space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="relative border rounded-lg flex flex-col gap-2 hover:bg-slate-50 transition-colors bg-white/80 overflow-hidden"
              >

                <div className="z-50 p-3 ">
                  <div className="  flex justify-between items-start">
                    <h3 className="text-white font-medium">{alert.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity === "high" ? "Urgent" : alert.severity === "medium" ? "Warning" : "Info"}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300">{alert.location}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">{alert.time}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-white hover:bg-blue-50"
                    >
                      Details
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="z-0 absolute w-full h-full">
                  <Image
                    src={alert.background}
                    width={"100"}
                    height={"100"}
                    alt={"Illusration for " + alert.id}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                <div className="z-0 absolute w-full h-full bg-black/50" />
                  

              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
