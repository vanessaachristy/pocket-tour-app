import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 1.3485029645844109, lng: 103.68311323945537 });
    const [zoom, setZoom] = useState(15);
    return (
      <div style={{ height: '100vh', width: '100%'}}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBAVQ-dorKeBkIe1vlfH94vjYyQJkNtzhE' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={1.282302}
            lng={103.858528}
            name="My Marker"
            color="Purple"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;