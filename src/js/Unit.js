import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';

import IconBar from './components/UnitIconBar';
import EmailForm from './components/EmailForm';

let storage = window.sessionStorage;

export class UnitBase extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle: false,
      photoIndex: 0
    };

    this.setToggle = this.setToggle.bind(this);
  }

  componentWillMount(){
    this.setState({toggle:false});
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
}

  componentWillReceiveProps(){
    this.setState({toggle:false});
  }

  getUnit(){
    let unit = JSON.parse(storage.getItem('unit'));

    const { toggle, photoIndex } = this.state;
    const images = unit.images;

    if(unit){
      let section = (

        <Box basis="full" justify="center" direction="column">

          <Box
            full="horizontal"
            size={{height:'large'}}
            texture={unit.bg}
            align="start"
            justify="between"
            direction="column"
            >

            <Box
              align="start"
              pad="small">
              <Button
                label="Back"
                icon={<LinkPreviousIcon />}
                primary={true}
                path="/building" />
            </Box>

            <Box
              justify="between"
              full="horizontal"
              align="end"
              direction="row">
              <Button

                primary={true}
                box={true}
                onClick={this.setToggle}
                label="View Photos"
                type="button"
                plain={false}
                margin="small"
              />

              <Box margin={{horizontal:"medium"}}>
                <Heading className="building-header" align="end">{unit.parent} | <b>{unit.title}</b></Heading>
              </Box>
            </Box>

          </Box>

          <List>
            <ListItem>
              <IconBar unit={unit}/>
            </ListItem>
            <ListItem>
              {this.getDescription(unit)}
            </ListItem>
            {/*<ListItem margin="large">*/}
              {/*<EmailForm unit={unit}/>*/}
            {/*</ListItem>*/}
          </List>

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

        </Box>
      );
      return section;
    }
    return null;
  }

  getDescription(unit){
    let result = null;
    if(unit){
      result = (
        <Box responsive={true} direction="row" basis="full" justify="center" align="center" pad="medium">
          <Paragraph size="large">{unit.description}</Paragraph>
          <Box margin={{horizontal:"large"}}>
            <List>
              <ListItem><Paragraph size="large" margin="none">Beds: <b>{unit.beds}</b></Paragraph></ListItem>
              <ListItem><Paragraph size="large" margin="none">Baths: <b>{unit.baths}</b></Paragraph></ListItem>
              <ListItem><Paragraph size="large" margin="none">Parking: <b>{unit.parking}</b></Paragraph></ListItem>
              {this.getLaundry(unit)}
              </List>
          </Box>
        </Box>);
    }
    return result;
  }

  getLaundry(unit){
    if(unit.washer === 'yes'){
      return (
        <ListItem><Paragraph size="large" margin="none">Washer & Dryer Included</Paragraph></ListItem>
      );
    }
  }

  setToggle(){
    if(this.state.toggle){
      this.setState({toggle:false});
    }

    else{
      this.setState({toggle:true});
    }
  }

  render(){
    return this.getUnit();
  }
}

export default UnitBase;
