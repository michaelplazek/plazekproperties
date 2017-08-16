import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Animate from 'grommet/components/Animate';

import PropertySearch from './PropertySearch';
import GoogleMapsWrapper from './components/GoogleMapsWrapper';
import SearchBar from './components/SearchBar';

const json = require('./../../units.json');

class Properties extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: {},
      house: {},
      house_list: [],
      height: window.innerHeight,
      markers: this.setMarkers(json)
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount(){
    this.setState({house_list:json.houses});
    this.setState({markers:this.setMarkers(json)});
  }

  // get size of window for map dimensions
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  handleSearch(){
    let event = document.getElementById('search').value;
    this.setState({input:event});

    this.queryJSON(event);
  }

  queryJSON(event){
    let result = [];
    json.houses.forEach(house => {
      if(event && house.number.includes(event) || house.street.toLowerCase().includes(event) || house.city.toLowerCase().includes(event) || house.zip.includes(event)){
        if(this.state.house_list && this.state.house_list.length > 0){
          result.push(house);
        }
        else if(this.state.house_list && !this.state.house_list.includes(house)) {
          result.push(house);
        }
      }n
    });
    this.setState({house_list:result});
    let obj = {houses:result};
    this.setState({markers: this.setMarkers(obj)});
  }

  setMarkers(json){
    let result = null;
    if(json){
      result = (
        json.houses.map(house => {
        return house.marker;
      }));
    }

    result.forEach(marker => {
      marker.position.lat = parseFloat(marker.position.lat);
      marker.position.lng = parseFloat(marker.position.lng);
      marker.defaultAnimation = parseFloat(marker.defaultAnimation);
    });

    return result;
  }

  render(){

    return(
      <Split
        fixed={true}
        separator={true}
      >
        <Animate enter={{"animation": "slide-right", "duration": 300, "delay": 0}}
                 keep={true}>
          <GoogleMapsWrapper
            height={this.state.height}
            markers={this.state.markers}
          />
        </Animate>
        <Box>
          <Header basis="full" full="horizontal" justify="end" pad="small">
            <Box justify="end" pad="small" basis="medium" align="end">
              <SearchBar
                handleEvent={this.handleSearch}
              />
            </Box>
          </Header>
            <Box direction="row" basis="full">
              <PropertySearch
                input={this.state.input}
                house_list={this.state.house_list}
              />
            </Box>
        </Box>
      </Split>
    );
  }
}

export default Properties;
