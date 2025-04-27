
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { ArrowRight, Hospital, House, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Health } from "@/api/health_location"
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';

export function ResourcesList({
  health_loc,
  location,
  setLocations,
  locations
}: {
  health_loc: Array<Health>,
  location: { lat: number, lng: number };
  setLocations: Dispatch<SetStateAction<Array<Health>>>
  locations: Array<Health>;
}) {
  
  const [isFocus, setFocus] = useState(false)
  const [markers, setMarkers] = useState(locations)

  const getOccupancy = (occupancy_type: string) => {
    switch (occupancy_type) {
      case "Clinic":
        return { style: "text-red-700", "bgColor": " bg-red-100 border-red-200", Icon: Hospital }
      case "Neighborhood":
        return { style: "text-amber-700", "bgColor": " bg-amber-100 border-amber-200", Icon: House }
      case "Office":
        return { style: "text-blue-700", "bgColor": " bg-blue-100 border-blue-200", Icon: Building }
      default:
        return { style: "text-red-700", "bgColor": "bg-red-100  border-red-200", Icon: Hospital }
    }
  }

  const onFocus = (marker: Health) => {
    if (isFocus) {
      setLocations(markers)
    } else {
      setMarkers(locations)
      setLocations([marker])
    }
    setFocus(!isFocus)
  }

  return (
    <Card className="border-slate-200 bg-transparent shadow-sm h-full  flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Resources & Safety Tips</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden borde">
        <ScrollArea className=" w-full">
          <div className="flex gap-4">
            {locations.map((resource) => {
              const { style, Icon, bgColor } = getOccupancy(resource.occupancy_type)
              return (
                <button className='min-w-[280px]' onClick={()=>onFocus(resource)}>
                  <Card key={resource.id}
                    className="
                     
                      w-full
                      border-slate-200
                      shadow-sm 
                      flex-shrink-0
                      hover:scale-95
                      transition duration-300 ease-in-out
                    "
                  >
                    <CardContent className="p-4">

                      <div className="flex gap-2">
                        <div className={`rounded-full p-2 w-fit h-fit ${bgColor} items-center justify-center`}>
                          <Icon className={`${style}`} />
                        </div>
                        <div className="space-y-1 flex-1">
                          <h3 className="font-medium text-start text-slate-900">{resource.facility_name}</h3>
                          <p className="text-sm text-slate-500 line-clamp-2 text-start">{JSON.parse(resource.street_address.human_address).address}</p>
                        </div>
                      </div>


                      <div className="mt-3 flex justify-end">
                        {resource.website && (

                          <Button onClick={() => window.open(resource.website.url)} variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                            View Details
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>

                        )}

                      </div>

                    </CardContent>
                  </Card>
                </button>
              )
            }
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
