import React, { useEffect } from "react";
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

 

export const Maps =()=>{
    const mapRef = React.useRef();
    const [lat, setLat] = React.useState(36.8189700)
    const [lng, setLng] = React.useState(10.1657900)

    const [viewport, setViewport] = React.useState({
      longitude:  lng||10.1657900,
      latitude:  lat || 36.8189700,
      zoom: 8,
    });
    useEffect(()=>{
        setViewport({
            longitude:  10.1657900,
            latitude:  lat || 36.8189700,
            zoom: 8,
          })    },[lat])
    return(
        <>
             <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={"pk.eyJ1Ijoid29ya3NwYWNlODU0IiwiYSI6ImNsbDlnZHgxbzFmNmQzY2w3cnlteDF6cmQifQ.0mKeOtdHiEMHDyGzUef0fw"}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onClick={(event) => {
            const { lng, lat } = event.lngLat;

           setLat(lat)

        }}

      >
                <Marker
        latitude={lat}
        longitude={lng}
        draggable
        onDragEnd={(e) => {
            console.log('data',e.lngLat)
            setLat(e.lngLat.lat)
            setLng(e.lngLat.lng)

        }

        }
    />
      </ReactMapGL>
        </>

    )
}
 
 
// in render()
