import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import { MapPinIcon } from '@heroicons/react/24/solid'

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)


    const [viewport, setViewport] = useState({
        width:'100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/davyp24/cl93b9v87002s14nx8hqartfa'
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={viewport}
            className=''
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker key={result.long}
                        longitude={result.long}
                        latitude={result.lat}
                        style={{color:'red'}}
                        
                    >
                        <MapPinIcon onClick={() => setSelectedLocation(result)} className='text-red-400 w-6 h-6 cursor-pointer'/>
                    </Marker>

                    {selectedLocation.long === result.long && (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={false}
                            latitude={result.lat}
                            longitude={result.long}
                            anchor='bottom'
                        >
                            {result.title}
                        </Popup>
                    )}

                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map