import { ArrowRight, Hospital, House, Building } from "lucide-react"
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
        "lat": 30.2730,
        "lng": -97.7313
      },
      "size": "large",
      "occupancy_type" : "clinic"
    },
    {
      "id" : 2,
      "facility_name": "Ascension Seton Medical Center Austin",
      "street_address": "1201 W 38th St, Austin, TX 78705",
      "location": {
        "lat": 30.3065,
        "lng": -97.7420
      },
      "size": "large",
      "occupancy_type" : "office"
    },
    {       
       "id" : 3,
      "facility_name": "St. David's Medical Center",
      "street_address": "919 E 32nd St, Austin, TX 78705",
      "location": {
        "lat": 30.2925,
        "lng": -97.7236
      },
      "size": "large",
      "occupancy_type" : "neighborhood"
    },
    {
      "id" : 4,
      "facility_name": "Austin Regional Clinic: ARC South 1st",
      "street_address": "1807 W Slaughter Ln, Austin, TX 78748",
      "location": {
        "lat": 30.1726,
        "lng": -97.8195
      },
      "size": "medium",
      "occupancy_type" : "clinic"
    },
    {
      "id" : 5,
      "facility_name": "CommUnityCare North Central Health Center",
      "street_address": "1210 W Braker Ln, Austin, TX 78758",
      "location": {
        "lat": 30.3880,
        "lng": -97.7091
      },
      "size": "medium",
      "occupancy_type" : "clinic"
    }
  
] 

const getOccupancy = (occupancy_type: string) => {
  switch (occupancy_type) {
    case "clinic":
      return { style :"text-red-700" , "bgColor":" bg-red-100 border-red-200" , Icon: Hospital }
    case "neighborhood":
      return {style:"text-amber-700" , "bgColor":" bg-amber-100 border-amber-200" ,  Icon: House  }
    case "office":
      return { style:"text-blue-700", "bgColor":" bg-blue-100 border-blue-200", Icon: Building   }
    default:
      return { style :"text-red-700", "bgColor":"bg-red-100  border-red-200", Icon: Hospital }
  }
}


  return (
    <Card className="border-slate-200  bg-transparent shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Resources & Safety Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea >
          <div className="flex gap-4 pr-16">
            {resources.map((resource) => {
              const { style , Icon, bgColor } = getOccupancy(resource.occupancy_type)
              return (
              <Card key={resource.id} className="min-w-[280px] border-slate-200 shadow-sm flex-shrink-0">
                <CardContent className="p-4">
                  
                  <div className="flex gap-4">
                    <div className={`rounded-full p-2 w-fit h-fit ${bgColor} items-center justify-center`}>
                      <Icon className={`${style}`} />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="font-medium text-slate-900">{resource.facility_name}</h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{resource.street_address}</p>
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
            )}
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
