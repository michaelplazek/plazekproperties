import React, { Component } from 'react';
import Link from 'react-router';

import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import LayerIcon from 'grommet/components/icons/base/Layer';
import Image from 'grommet/components/Image';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';

let sign = require('emoji-heavy-dollar-sign');
let storage = window.sessionStorage;

class PropertyList extends Component{
  constructor(props){
    super(props);
  }

  getCards(){
    let result = this.props.houses.map(house => (
      <ListItem key={house.number + house.street} align="center" justify="center">
        <Card
          margin="small"
          contentPad="small"
          description={this.getDescription(house)}
          thumbnail={<Image size="large" src={house.images[0]} />}
          label={this.getAddress(house)}
          size="medium"
          link={<Anchor path='/building' icon={<LayerIcon />} label="View Building"
            onClick={() => {storage.setItem('house',JSON.stringify(house))}}
          />}
        />
      </ListItem>
    ));
    return result;
  }

  getDescription(house){
    let result = (
      <Box margin="small">
        <List>
          <ListItem pad="none" margin="none"><Paragraph margin="none">Price: {this.getStars(house.price)}</Paragraph></ListItem>
          <ListItem pad="none" margin="none"><Paragraph margin="none">Type: {house.facts.type}</Paragraph></ListItem>
          <ListItem pad="none" margin="none"><Paragraph margin="none">Parking: {house.facts.parking}</Paragraph></ListItem>

        </List>
      </Box>
    );
    return result;
  }

  getStars(price){
    if(price === "1"){
      return sign;
    }
    else if(price === "2"){
      return(
        sign + sign
      );
    }
    else if(price === "3"){
      return(
        sign + sign + sign
      );
    }
    else if(price === "4"){
      return(
        sign + sign + sign + sign
      );
    }
    else if(price === "5"){
      return(
        sign + sign + sign + sign + sign
      );
    }
    else { return null;}
  }

  getAddress(house){
    if(house){
      return(
        house.number + " " + house.street
      );
    }

  }

  getList(){
    return(
      <List size="small">
        {this.getCards()}
      </List>
    );
  }

  render(){
    return(
      <Box margin="small">
        {this.getList()}
      </Box>
    );
  }
}

export default PropertyList;
