import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import LaundryIcon from 'grommet/components/icons/base/CoatCheck';

import FontAwesome from 'react-fontawesome';

class IconBar extends Component{
  constructor(props){
    super(props);
  }

  getIcons(unit){
    let arr = [];
    let result = null;

    result = (
      <Tile>
        <Box justify="center" align="center">
          <FontAwesome name="bed" size="2x"/>
          <Label margin="small">Beds: {unit.beds}</Label>
        </Box>
      </Tile>
    );
    arr.push(result);

    result = (
      <Tile>
        <Box justify="center" align="center">
          <FontAwesome name="bath" size="2x"/>
          <Label margin="small">Baths: {unit.baths}</Label>
        </Box>
      </Tile>
    );
    arr.push(result);

    result = (
      <Tile>
        <Box justify="center" align="center">
          <FontAwesome name="car" size="2x"/>
          <Label margin="small">Parking: {unit.parking}</Label>
        </Box>
      </Tile>
    );
    arr.push(result);

    if(unit.dishwasher === 'yes'){
      result = (
        <Tile>
          <Box justify="center" align="center">
            <FontAwesome name="window-maximize" size="2x"/>
            <Label margin="small">Dishwasher</Label>
          </Box>
        </Tile>
      );
      arr.push(result);
    }

    if(unit.washer === 'yes'){
      result = (
        <Tile>
          <Box justify="center" align="center">
            <LaundryIcon size="medium" />
            <Label margin="small">Laundry</Label>
          </Box>
        </Tile>
      );
      arr.push(result);
    }

    return arr;
  }

  render(){

    let unit = this.props.unit;

    return (
      <Tiles
        align="center"
        justify="center"
        pad="medium"
        fill={true} flush={false}
        size="small"
      >
        {this.getIcons(unit)}
      </Tiles>
    );
  }
}

export default IconBar;
