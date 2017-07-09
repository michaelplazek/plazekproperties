import React, { Component } from 'react';

import Box  from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Headline  from 'grommet/components/Headline';
import Animate from 'grommet/components/Animate';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';
import Carousel from 'grommet/components/Carousel';
import Columns from "grommet/components/Columns";

import has from 'lodash.has';

class Body extends Component{
  constructor(props){
    super(props);

    this.getHouse = this.getHouse.bind(this);
    this.getSlides = this.getSlides.bind(this);
    this.getFirstFactList = this.getFirstFactList.bind(this);
    this.getSecondFactList = this.getSecondFactList.bind(this);
    this.getFeel = this.getFeel.bind(this);
  }

  getHouse(){
    let house = this.props.house;
    if(house){
      let section = (
        <Box basis="full" justify="center" direction="column">

          <Box direction="row" basis="full" justify="center" align="center" pad={{horizontal:"medium"}}>
            {this.getFirstFactList(house)}
            {this.getSecondFactList(house)}
          </Box>

          {this.getSlides(house)}
          {this.getFeel(house)}

          // TODO: add columns to link to apartments

        </Box>);
      return section;
    }
    return null;
  }

  getFeel(house){
    let result = null;
    if(house.feel){
      result = (
        <Box basis="full" justify="center" align="center" pad={{horizontal:"medium"}}>
          <Paragraph size="large">{house.feel}</Paragraph>
        </Box>);
    }
    return result;
  }

  getSlides(house){
    let result = house.images.map(image =>
      <Image key={image} src={image} />
    );
    return <Box pad={{vertical:"large"}} margin={{horizontal:"large"}}><Carousel>{result}</Carousel></Box>;
  }

  getSecondFactList(house){
    let facts = (
      <Box pad={{horizontal:"small"}} align="center">
        <List>
          <ListItem justify="center" size="medium">
            <Label margin="none" size="medium">
              {this.getHeat(house.facts.heat)}
            </Label>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Label margin="none" size="medium">
              {this.getAC(house.facts.ac)}
            </Label>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Label margin="none" size="medium">
              {this.getWasher(house.facts.washer)}
            </Label>
          </ListItem>
        </List>
      </Box>
    );
    return facts;
  }

  getFirstFactList(house){
    let facts = (
      <Box pad={{horizontal:"small"}} align="center">
        <List>
          <ListItem justify="center" size="medium">
            <Label margin="none" size="medium">
              {this.getType(house.facts.type)}
            </Label>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Label margin="none" size="medium">
              {this.getPets(house.facts.pets)}
            </Label>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Label margin="none" size="medium">
              {this.getParking(house.facts.parking)}
            </Label>
          </ListItem>
        </List>
      </Box>
    );
    return facts;
  }

  getWasher(washer){
    if(washer){
      let result = null;
      switch (washer){
        case "yes":
          result = "Washer/Dryer Included";
      }
      return result;
    }
  }

  getAC(ac){
    if(ac){
      let result = null;
      switch(ac){
        case "central":
          result = "Central A/C";
          break;
        case "window":
          result = "Window A/C Unit";
          break;
        case "none":
          result = "No A/C";
          break;
      }
      return result;
    }
  }

  getHeat(heat){
    if(heat){
      let result = null;
      switch(heat){
        case "central":
          result = "Central Heat";
          break;
        case "electric":
          result = "Electric Heat";
          break;
        case "none":
          result= "Portable Heat";
          break;
      }
      return result;
    }
  }

  getParking(parking){
    if(parking){
      let result = null;
      switch(parking){
        case "on":
          result = "On-street parking";
          break;
        case "off":
          result = "Off-street parking";
          break;
      }
      return result;
    }
  }

  getPets(pets){
    if(pets){
      let result = null;
      switch(pets){
        case "yes":
          result = "Pets allowed for additional fee";
          break;
        case "no":
          result = "No pets allowed";
          break;
      }
      return result;
    }
  }

  getType(type){
    if(type){
      let result = null;
      switch(type){
        case "triplex":
          result = "Triplex";
          break;
        case "duplex":
          result = "Duplex";
          break;
        case "single":
          result = "Single";
          break;
      }
      return result;
    }
  }

  render(){
    return(
      <Box basis="full" justify="center">
          <Animate enter={{"animation": "fade", "duration": 500, "delay": 250}}>
            {this.getHouse()}
          </Animate>
      </Box>
    );
  }
}

export default Body;
