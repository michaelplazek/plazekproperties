import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const find = require('lodash.find');

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCmatde5HvRYF3_ZaGuPYEh3iHTaSSe-Us";

let history;
let house_list;
const GoogleMaps = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.5, lng: -80.05 }}>
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          {...marker}
          onClick = {setProperty.bind(this,marker)}
          onMouseOver={setLabel.bind(this,marker, props)}
          onMouseOut={clearLabel.bind(this,marker, props)}
        />
      ))}
    </GoogleMap>
);

function setProperty(marker){

  let house = find(house_list, function(o){
    return JSON.stringify(o.marker) === JSON.stringify(marker);
  });

  window.sessionStorage.setItem('house',JSON.stringify(house));
  history.push('/building')
}

function clearLabel(marker, props){

  marker.label = "";
  props.onMarkerHover(marker.key);
  // setTimeout(function(){ marker.label = ""; }, 1000);
  // setTimeout(function(){ props.onMarkerHover(marker.key); }, 250);
}

function setLabel(marker, props){

  // hacky, but it works
  marker.label = marker.key;
  props.onMarkerHover(marker.key);
}

class GoogleMapsWrapper extends Component{
  constructor(props){
    super(props);

    this.state = { text: "" };

    this.onMarkerHover = this.onMarkerHover.bind(this);
  }

  onMarkerHover(label){
    this.setState({ text: label});
  }

  render(){
    history = this.props.history;
    house_list = this.props.house_list;

    return(
      <GoogleMaps
        containerElement={
          <div style={{ height: this.props.height, width: '100%' }} />
        }
        mapElement={
          <div style={{ height: this.props.height, width: '100%'}} />
        }
        markers={this.props.markers}
        label={this.state.text}
        onMarkerHover={this.onMarkerHover}
    />
    );
  }
}

GoogleMapsWrapper.PropTypes = {
  height: PropTypes.number,
  markers: PropTypes.array
};

export default GoogleMapsWrapper;

