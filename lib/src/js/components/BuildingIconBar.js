import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Heading from 'grommet/components/Heading';

import FontAwesome from 'react-fontawesome';

class BuildingIconBar extends Component{
  constructor(props){
    super(props);
  }

  getIcons(house){
    let arr = [];
    let result = null;

    result = (
      <Tile key="type">
        <Box justify="center" align="center">
          {this.getSize(house)}
        </Box>
      </Tile>
    );
    arr.push(result);

    result = (
      <Tile key="pets">
        <Box justify="center" align="center">
          {this.getPets(house)}
        </Box>
      </Tile>
    );
    arr.push(result);

    result = (
      <Tile key="heat">
        <Box justify="center" align="center">
          {this.getHeat(house)}
        </Box>
      </Tile>
    );
    arr.push(result);

    result = (
      <Tile key="ac">
        <Box justify="center" align="center">
          {this.getAC(house)}
        </Box>
      </Tile>
    );
    arr.push(result);

    result = (
      <Tile key="parking">
        <Box justify="center" align="center">
          {this.getParking(house)}
        </Box>
      </Tile>
    );
    arr.push(result);

    return arr;
  }

  getSize(house){
    let result = null;
    if(house.facts.type === 'single'){
      result = (
        <Box align="center">
          <Heading margin="none">1</Heading>
          <Label margin="small">Single</Label>
        </Box>
      );
    }

    else if(house.facts.type === 'duplex'){
      result = (
        <Box align="center">
          <Heading margin="none">2</Heading>
          <Label margin="small">Duplex</Label>
        </Box>
      );
    }

    else if(house.facts.type === 'triplex'){
      result = (
        <Box align="center">
          <Heading tag="h2" margin="none">3</Heading>
          <Label margin="small">Triplex</Label>
        </Box>
      );
    }

    else {
      result = (
        <Box align="center">
          <Heading tag="h2" margin="none">5</Heading>
          <Label margin="small">Multiple</Label>
        </Box>
      );
    }

    return result;
  }

  getPets(house){
    let result = null;
    if(house.facts.pets === 'yes'){
      result = (
        <Box align="center">
          <FontAwesome name="paw" size="2x"/>
          <Label margin="small">Pets allowed for additional fee</Label>
        </Box>
      );
    }

    return result;
  }

  getHeat(house){
    let result = null;
    if(house.facts.heat === 'central') {
      result = (
        <Box align="center">
          <FontAwesome name="fire" size="2x"/>
          <Label margin="small">Separate Central Heat</Label>
        </Box>
      );
    }

    return result;
  }

  getAC(house){
    let result = null;
    if(house.facts.ac === 'central'){
      result = (
        <Box align="center">
          <FontAwesome name="snowflake-o" size="2x"/>
          <Label margin="small">Separate Central A/C</Label>
        </Box>
      );
    }

    else if(house.facts.ac === 'window'){
      result = (
        <Box align="center">
          <FontAwesome name="snowflake-o" size="2x"/>
          <Label margin="small">Window Unit A/C</Label>
        </Box>
      );
    }

    return result;
  }

  getParking(house){
    let result = null;
    if(house.facts.parking === 'off-street'){
      result = (
        <Box align="center">
          <FontAwesome name="car" size="2x"/>
          <Label margin="small">Off-street Parking</Label>
        </Box>
      );
    }

    else if(house.facts.parking === 'on-street'){
      result = (
        <Box align="center">
          <FontAwesome name="car" size="2x"/>
          <Label margin="small">On-street Parking</Label>
        </Box>
      );
    }
    else {
      result = (
        <Box align="center">
          <FontAwesome name="car" size="2x"/>
          <Label margin="small">Garage Parking</Label>
        </Box>
      );
    }

    return result;
  }

  render(){

    let house = this.props.house;

    return (
      <Tiles
        align="center"
        justify="center"
        pad="medium"
        fill={true} flush={false}
        size="small"
      >
        {this.getIcons(house)}
      </Tiles>
    );
  }
}

export default BuildingIconBar;
