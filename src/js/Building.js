import React, { Component } from 'react';

import Box  from 'grommet/components/Box';
import Button from 'grommet/components/Button';
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
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import LayerIcon from 'grommet/components/icons/base/Layer';

let storage = window.sessionStorage;

class Body extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle: false
    };

    this.setToggle = this.setToggle.bind(this);
    this.getHouse = this.getHouse.bind(this);
    this.getSlides = this.getSlides.bind(this);
    this.getFirstFactList = this.getFirstFactList.bind(this);
    this.getSecondFactList = this.getSecondFactList.bind(this);
    this.getFeel = this.getFeel.bind(this);
  }

  componentWillMount(){
    this.setState({toggle:false});
  }

  componentWillReceiveProps(){
    this.setState({toggle:false});
  }

  getHouse(){
    let house = JSON.parse(storage.getItem('house'));
    if(house){
      let section = (

        <Box basis="full" justify="center" direction="column">

          <Box
            full="horizontal"
            size={{height:'large'}}
            texture={house.bg}
            align="end"
            justify="between"
            direction="row"
          >
            <Button
              primary={true}
              box={true}
              label="View Photos"
              type="button"
              plain={false}
              onClick={this.setToggle}
              margin="small"
            />
            <Box margin={{horizontal:"medium"}}>
              <Heading
                className="building-header"
                align="end"
              >
              {house.number} {house.street}</Heading>
            </Box>
          </Box>

          <Box
            margin="large"
          >
            <Columns
              maxCount={2}
              responsive={true}
              justify="center"
            >
              {this.getFirstFactList(house)}
              {this.getSecondFactList(house)}
            </Columns>
          </Box>

          {this.getSlides(house)}
          {this.getFeel(house)}
          {this.getUnits(house)}

        </Box>);
      return section;
    }
    return null;
  }

  setToggle(){
    if(this.state.toggle){
      this.setState({toggle:false});
    }
    else{
      this.setState({toggle:true});
    }
  }

  getUnits(house){
    let result = null;
    let tile = "small";
    if(house.units.length > 1){
      if(house.units.length <= 2){
        tile = "medium";
      }
      result = house.units.map((unit, index) => (
        <Tile key={index} flex={true}>
          <Card thumbnail={<Image size="medium" src={unit.images[0]} />}
                heading={this.getUnitHeading(unit)}
                textSize="small"
                size={tile}
                label={this.getRooms(unit)}
                contentPad="medium"
                link={<Anchor path='/unit' icon={<LayerIcon />} label="View Unit"
                  onClick={() => {storage.setItem('unit',JSON.stringify(unit))}}
                />}
          />
        </Tile>
      ));
    }
    return(
      <Tiles
        full="horizontal"
        basis="full"
        align="center"
        justify="center"
        pad={{vertical:"large"}}
        fill={true} flush={false}
        size="medium"
        colorIndex="light-2"
        margin={{vertical:"large"}}
      >
        {result}
      </Tiles>
    );
  }

  getRooms(unit){
    return(unit.beds + "bedrooms");
  }

  getUnitHeading(unit){
    return(
      unit.title
    );
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
    if(this.state.toggle){
      return (
        <Animate
          visible={this.state.toggle}
          enter = {{"animation": "fade", "duration": 1000, "delay": 250}}
          leave = {{"animation": "fade", "duration": 1000, "delay": 250}}
        >
          <Box pad="small" margin={{vertical:"small", horizontal:"large"}} colorIndex="light-2">
            <Carousel>{result}</Carousel>
          </Box>;
        </Animate>
      );
    }
    else{
      return null;
    }
  }

  getSecondFactList(house){
    let facts = (
      <Box pad={{horizontal:"small"}} align="center">
        <List>
          <ListItem justify="center" size="medium">
            <Paragraph margin="none" size="large">
              {this.getHeat(house.facts.heat)}
            </Paragraph>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Paragraph margin="none" size="large">
              {this.getAC(house.facts.ac)}
            </Paragraph>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Paragraph margin="none" size="large">
              {this.getWasher(house.facts.washer)}
            </Paragraph>
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
            <Paragraph margin="none" size="large">
              {this.getType(house.facts.type)}
            </Paragraph>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Paragraph margin="none" size="large">
              {this.getPets(house.facts.pets)}
            </Paragraph>
          </ListItem>
          <ListItem justify="center" size="medium">
            <Paragraph margin="none" size="large">
              {this.getParking(house.facts.parking)}
            </Paragraph>
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
        case "on-street":
          result = "On-street parking";
          break;
        case "off-street":
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
