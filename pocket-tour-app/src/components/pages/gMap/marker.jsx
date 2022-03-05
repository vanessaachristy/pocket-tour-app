import React from 'react';
import './marker.css';

const Marker = (props) => {
    const {color, name} = props;
    return (
        <div className="wrapper">
          <div
            className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
          />
          <div className="pulse" />
        </div>
      );
    };

    export default Marker;