import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 1.282302, lng: 103.858528 });
    const [zoom, setZoom] = useState(15);
    return (
      <div style={{ height: '100vh', width: '100%'}}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAp7ru3rVpWeAMnDGgcfybl8bWUTtDPQ0o' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={1.282302}
            lng={103.858528}
            name="Marina Bay Sands"
            color="Purple"
          />

          <Marker
            lat={1.2593896976095227}
            lng={103.8114511692685}
            name="Trick Eye Museum"
            color="Blue"
          />
          
          <Marker
            lat={1.2486635456102284}
            lng={103.82256619028487}
            name="Palawan Beach"
            color="Red"
          />

        <Marker
            lat={1.311786627257402}
            lng={103.81478690008169}
            name="National Orchid Garden"
            color="Green"
          />

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;