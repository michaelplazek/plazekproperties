import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCmatde5HvRYF3_ZaGuPYEh3iHTaSSe-Us";

const GoogleMaps = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.4288728, lng: -80.0977227 }}>
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          {...marker}
        />
      ))}
    </GoogleMap>
);

export default class GoogleMapsWrapper extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <GoogleMaps
        containerElement={
          <div style={{ height: this.props.height, width: '100%' }} />
        }
        mapElement={
          <div style={{ height: this.props.height, width: '100%'}} />
        }
        markers={this.props.markers}
    />
    );
  }
}

GoogleMapsWrapper.PropTypes = {
  height: PropTypes.number,
  markers: PropTypes.array
};

