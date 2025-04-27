"use client"

import { ResourcesList } from "@/components/resources-list"
import { useEffect, useState } from "react"
import { fetchHealth, fetchLocations, Health } from "@/api/health_location"
import { AlertStatus } from "@/components/alert-status"
import { DisasterMap } from "@/components/disaster-map"
import { Header } from "@/components/header"
import Modal from "@/components/modal"
import { Alerts, RecentAlerts } from "@/components/recent-alerts"

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [health_loc, setHealth_Loc] = useState<Array<Health>>([])
  const [alert, setAlert] = useState<Alerts>( {
    "event": "Test Tornado Warning", 
    "headline": "\ud83d\udea8 [TEST] Tornado Warning!", 
    "description": "This is a test tornado warning for system integration.", 
    "instruction": "Seek shelter immediately (test only).", 
    "fips_code": "48001", 
    "urgency": "Immediate", 
    "created_at": "2025-04-27T15:30:14.873Z",
    "background": "data:image/jpeg;base64,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"
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const getHealth = async () => {
      const data = await fetchHealth()
      setHealth_Loc(data)
      await fetchLocations()
    }
    getHealth()
  }, [])
  
  if (loading) {
    return (<div className="flex h-screen w-screen items-center justify-center">Loading...</div>)
  }
  
  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* Main content */}
      <main className="flex-1 w-full flex flex-col">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full">
          {/* Left column - stacked cards */}
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0">
              <Header />
            </div>
            <div className="flex-shrink-0">
              <AlertStatus />
            </div>
            <div className="flex-grow overflow-hidden">
              <RecentAlerts showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>


          {/* Right column - map */}
          <div className="col-span-2 h-full flex flex-col overflow-hidden">
            <div className="relative h-full w-full overflow-hidden">
              {health_loc.length > 0 && (
                <div className="w-full h-full">
                  <DisasterMap health_loc={health_loc} location={location} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="z-50">
          <Modal alert={alert!} showModal={showModal} setShowModal={setShowModal} />
        </div>
      </main>
    </div>
  )
}