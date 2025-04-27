import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react"
import GoogleMaps from "./google-maps"

export function DisasterMap() {

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

  return (
    <Card className="border-slate-200 shadow-sm h-full w-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Disaster Map</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 px-2 text-slate-600">
            <Layers className="h-4 w-4 mr-1" />
            Layers
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-2 text-slate-600">
            <Navigation className="h-4 w-4 mr-1" />
            My Location
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 relative h-full w-full">
        <GoogleMaps markers={resources} />
      </CardContent>
    </Card>
  )
}
