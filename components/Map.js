import React from "react";

import { BsFillHousesFill } from "react-icons/bs";

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 50.82327922058616,
      lng: 3.6387496453018042,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "60vh", width: "100%" }} className="mt-8">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAcvK5hc8_V3oZqh8-UodrRBJqH8h2QW1w" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <BsFillHousesFill
          lat={50.82327922058616}
          lng={3.6387496453018042}
          text="Architectenbureau Paul Kindt"
        />
      </GoogleMapReact>
    </div>
  );
}
