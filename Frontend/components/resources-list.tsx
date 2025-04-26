import { ArrowRight, FileText, Home, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function ResourcesList() {
  const resources = [
    
    {
      "id" : 1,
      "facilty_name": "Dell Seton Medical Center at The University of Texas",
      "street_address": "1500 Red River St, Austin, TX 78701",
      "location": {
        "latitude": 30.2730,
        "longitude": -97.7313
      },
      "size": "large"
    },
    {
      "id" : 2,
      "facility_name": "Ascension Seton Medical Center Austin",
      "street_address": "1201 W 38th St, Austin, TX 78705",
      "location": {
        "latitude": 30.3065,
        "longitude": -97.7420
      },
      "size": "large"
    },
    {       
       "id" : 3,
      "facility_name": "St. David's Medical Center",
      "street_address": "919 E 32nd St, Austin, TX 78705",
      "location": {
        "latitude": 30.2925,
        "longitude": -97.7236
      },
      "size": "large"
    },
    {
      "id" : 4,
      "facility_name": "Austin Regional Clinic: ARC South 1st",
      "street_address": "1807 W Slaughter Ln, Austin, TX 78748",
      "location": {
        "latitude": 30.1726,
        "longitude": -97.8195
      },
      "size": "medium"
    },
    {
      "id" : 5,
      "facility_name": "CommUnityCare North Central Health Center",
      "street_address": "1210 W Braker Ln, Austin, TX 78758",
      "location": {
        "latitude": 30.3880,
        "longitude": -97.7091
      },
      "size": "medium"
    }
  
  
]
  return (
    <Card className="border-slate-200 shadow-sm">
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
