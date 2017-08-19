import React, { Component } from 'react';

import LightBox from 'react-image-lightbox';

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
import BuildingIconBar from "./components/BuildingIconBar";

let storage = window.sessionStorage;

class Body extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle: false,
      photoIndex: 0
    };

    this.setToggle = this.setToggle.bind(this);
    this.getHouse = this.getHouse.bind(this);
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

    const { toggle, photoIndex } = this.state;
    const images = house.images;

    if(house){
      let section = (

        <Box basis="full" justify="center" direction="column"  >

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

          <Box full="horizontal">

            <List>
              <ListItem><BuildingIconBar house = {house}/></ListItem>


          {/*<Box margin={{vertical:"large"}}>*/}
            {/*<Columns*/}
              {/*maxCount={2}*/}
              {/*responsive={true}*/}
              {/*justify="center" >*/}
              {/*{this.getFirstFactList(house)}*/}
              {/*{this.getSecondFactList(house)}*/}
            {/*</Columns>*/}
          {/*</Box>*/}

            <ListItem margin={{horizontal:"medium"}}>{this.getFeel(house)}</ListItem>
            <ListItem margin={{horizontal:"medium"}}>{this.getUnits(house)}</ListItem>

          </List>

          </Box>

          {toggle &&
          <LightBox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}

            onCloseRequest={() => this.setState({ toggle: false })}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })}
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })}
          />
          }

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
    let tile = "medium";
    if(house.units.length > 1){
      if(house.units.length <= 2){
        tile = "large";
      }
      result = house.units.map((unit, index) => (
        <Tile fill={true} key={index} flex={true}>
          <Card thumbnail={<Image size={tile} src={unit.bg} />}
                heading={this.getUnitHeading(unit)}
                textSize="small"
                size={tile}
                label={this.getRooms(unit)}
                contentPad="medium"
                margin={{horizontal:"medium"}}
                link={<Anchor path='/unit' icon={<LayerIcon />} label="View Unit"
                  onClick={() => {
                    storage.setItem('unit',JSON.stringify(unit));
                  }}
                />}
          />
        </Tile>
      ));
    }
    return(
      <Box basis="full">
        <Heading>The Units</Heading>
      <Box align="center" justify="center" margin={{horizontal:"medium"}}>
        <Tiles
          full="horizontal"
          basis="full"
          align="center"
          justify="center"
          pad={{vertical:"small"}}
          fill={true} flush={false}
          size="large"
          margin={{vertical:"small"}}
        >
          {result}
        </Tiles>
      </Box>
      </Box>
    );
  }

  getRooms(unit){
    return(unit.beds + " bedrooms");
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
        <Box>
          <Heading>The Space</Heading>
        <Box basis="full" justify="center" align="center" pad="small">
          <Paragraph size="large">{house.feel}</Paragraph>
        </Box>
        </Box>);
    }
    return result;
  }

  render(){
    return(
      <Box basis="full" justify="center">
        {/*<Animate enter={{"animation": "fade", "duration": 500, "delay": 250}}>*/}
          {this.getHouse()}
        {/*</Animate>*/}
      </Box>
    );
  }
}

export default Body;
