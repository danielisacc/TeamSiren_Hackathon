import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react"

export function DisasterMap() {
  return (
    <Card className="border-slate-200 shadow-sm h-full">
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
      <CardContent className="p-0 relative h-[calc(100%-3.5rem)]">
        <div className="absolute inset-0 bg-slate-100 rounded-b-lg overflow-hidden">
          {/* Map placeholder with styling to look like a map */}
          <div className="h-full w-full bg-[#e8ecf0] relative">
            {/* Water bodies */}
            <div className="absolute top-[20%] left-[10%] w-[40%] h-[30%] bg-blue-200 rounded-full opacity-70"></div>
            <div className="absolute bottom-[15%] right-[20%] w-[30%] h-[25%] bg-blue-200 rounded-full opacity-70"></div>

            {/* Land masses */}
            <div className="absolute inset-0 bg-[#e8ecf0]">
              {/* Roads */}
              <div className="absolute top-[30%] left-0 right-0 h-[2px] bg-slate-300"></div>
              <div className="absolute top-0 bottom-0 left-[40%] w-[2px] bg-slate-300"></div>
              <div className="absolute bottom-[20%] left-[20%] right-[20%] h-[2px] bg-slate-300"></div>
            </div>

            {/* Alert zones */}
            <div className="absolute top-[25%] left-[25%] w-[20%] h-[20%] bg-red-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[30%] right-[30%] w-[15%] h-[15%] bg-amber-400 rounded-full opacity-30"></div>

            {/* Markers */}
            <div className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-6 w-6 text-red-600" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-[30%] right-[30%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-6 w-6 text-amber-600" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Map controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white shadow-sm">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-white shadow-sm">
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-md shadow-sm border border-slate-200">
              <h4 className="text-xs font-semibold mb-2">Map Legend</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-xs">Active Disaster</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-xs">Warning Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Shelter Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
