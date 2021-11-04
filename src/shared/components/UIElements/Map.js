import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

function Map(props) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: props.coords.lat,
    longitude: props.coords.lng,
    zoom: 11,
  })

  return (
    <ReactMapGL
      className={`map ${props.className}`}
      style={props.style}
      mapStyle="mapbox://styles/poinch/ckvkwdyodivxh15mpq9wnkoab"
      mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_KEY}`}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  )
}

export default Map
