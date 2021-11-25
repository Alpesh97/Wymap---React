import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapDisplay(props) {
  return (
    <div className="map-container">
      <Map google={props.google} zoom={2}>
        <Marker
          name="Marker 1"
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
      </Map>
    </div>
  );
}

const LoadingContainer = () => "";

export default GoogleApiWrapper({
  apiKey: "AIzaSyAugjXtQ_s6WFleSpUn3KZWPq2r5VwoKGk",
  LoadingContainer: LoadingContainer,
})(MapDisplay);
