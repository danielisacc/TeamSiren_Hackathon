import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react"
import GoogleMaps from "./google-maps"
import { Health } from "@/api/health_location"
import { ResourcesList } from "./resources-list"
import { useState } from "react"

export function DisasterMap({
  health_loc,
  location
}: {
  health_loc: Array<Health>,
  location: { lat: number, lng: number };
}) {

  const [locations,setLocations] = useState(health_loc)

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
        <GoogleMaps locations={locations} setLocations={setLocations} location={location} />
      </CardContent>
      <div className="absolute bottom-0 w-full h-fit">
        <ResourcesList health_loc={locations} location={location} locations={locations} setLocations={setLocations} />
      </div>
    </Card>
  )
}
