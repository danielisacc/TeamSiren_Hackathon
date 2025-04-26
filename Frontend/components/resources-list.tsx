import { ArrowRight, FileText, Home, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function ResourcesList() {
  const resources = [
    {
      id: 1,
      title: "Emergency Contacts",
      description: "Important phone numbers and contacts for emergency services",
      icon: Phone,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      title: "Evacuation Guide",
      description: "Step-by-step instructions for safe evacuation procedures",
      icon: FileText,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      title: "Shelter Locations",
      description: "List of all available emergency shelters and capacities",
      icon: Home,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "First Aid Tips",
      description: "Basic first aid procedures for common emergency situations",
      icon: FileText,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 5,
      title: "Weather Updates",
      description: "Latest forecasts and weather-related emergency information",
      icon: FileText,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <Card className="border-slate-200 shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Resources & Safety Tips</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ScrollArea>
          <div className="flex gap-4 pb-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="min-w-[280px] border-slate-200 shadow-sm flex-shrink-0">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className={`h-10 w-10 rounded-full ${resource.bgColor} flex items-center justify-center`}>
                      <resource.icon className={`h-5 w-5 ${resource.color}`} />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="font-medium text-slate-900">{resource.title}</h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{resource.description}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
