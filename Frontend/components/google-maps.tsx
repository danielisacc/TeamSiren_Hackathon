'use client'

import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

function GoogleMaps({markers}:{markers:[{location:{lat:number,lng:number}}]}) {
  const position = {lat: 53.54992, lng: 10.00678};

  return (
    <APIProvider apiKey={'AIzaSyAID7fThvDBWY21M3lysxPWfc841ORgfT0'}>
      <Map defaultCenter={markers[0].location} defaultZoom={10} mapId="DEMO_MAP_ID">
       { markers.map((marker, index) =>  (  <AdvancedMarker key={index} position={marker.location} />) )}
        
      </Map>
    </APIProvider>
  );
}

export default GoogleMaps;