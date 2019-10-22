import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper, withScriptjs, withGoogleMap } from 'google-maps-react';


class MapContainer extends Component {
  render() {
    return (
      <div className="MapContainer">
      <Map
      google={this.props.google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176}}
      >
      <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnIPlBWHZwc-Q7aV1p2nR-7D5O8YpKV-Q'
})(MapContainer);
