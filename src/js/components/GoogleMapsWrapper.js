import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { withRouter } from 'react-router-dom'

const find = require('lodash.find');

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCmatde5HvRYF3_ZaGuPYEh3iHTaSSe-Us";

let history;
let house_list;
const GoogleMaps = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.5, lng: -80.05 }}>
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          {...marker}
          onClick = {setProperty.bind(this,marker)}
          // label={state}
          // onMouseOver={(marker) => setLabel}
        />
      ))}
    </GoogleMap>
);

// onMarkerClick: () => (marker) => {
//   window.location = '/post/' + marker.slug;
// }

function setProperty(marker){

  let house = find(house_list, function(o){
    return JSON.stringify(o.number + " " + o.street) === JSON.stringify(marker.key);
  });

  // let house = house_list.map(house => {
  //   if(JSON.stringify(house.number + " " + house.street) === JSON.stringify(marker.key)) return house;
  // });

  console.log(house + " clicked!");
  window.sessionStorage.setItem('house',JSON.stringify(house));
  history.push('/building')
}

class GoogleMapsWrapper extends Component{
  constructor(props){
    super(props);
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
    />
    );
  }
}

GoogleMapsWrapper.PropTypes = {
  height: PropTypes.number,
  markers: PropTypes.array
};

export default GoogleMapsWrapper;

