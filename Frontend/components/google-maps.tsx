'use client'

import { Health } from '@/api/health_location';
import { AdvancedMarker, APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { House } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function GoogleMaps({
  setLocations,
  locations,
  location
}: {
  setLocations: Dispatch<SetStateAction<Array<Health>>>
  locations: Array<Health>;
  location: { lat: number, lng: number }
}) {
  const [isFocus, setFocus] = useState(false)
  const [markers, setMarkers] = useState(locations)

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
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      {location && (
        <Map defaultCenter={location} defaultZoom={10} mapId="DEMO_MAP_ID">
          {locations.map((marker, index) => (

            <AdvancedMarker
              key={index}
              onClick={() => onFocus(marker)}
              position={{ lat: parseFloat(marker.street_address.latitude), lng: parseFloat(marker.street_address.longitude) }}
            />

          ))}
          <AdvancedMarker position={location} >
            <div style={{
              width: 24,
              height: 24,
              background: '#4285F4',
              border: '2px solid white',
              borderRadius: '50%',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} />
    
          </AdvancedMarker>
        </Map>
      )}
    </APIProvider>
  );
}

export default GoogleMaps;