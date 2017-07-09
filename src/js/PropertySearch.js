import React, { Component } from 'react';

import Body from './Body';

import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';

import has from 'lodash.has';

const json = require('../../units.json');

class PropertySearch extends Component{
  constructor(props){
    super(props);

    this.state = {
      input:{},
      house:{}
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.setHouse = this.setHouse.bind(this);
    this.getHouse = this.getHouse.bind(this);
    this.queryJSON = this.queryJSON.bind(this);
  }

  handleEvent(){
    let event = document.getElementById('search').value;
    this.setState({input:event});

    this.queryJSON(event);
    console.log(event);
  }

  setHouse(house){
    if(house){
      this.setState({house: house});
    }
  }

  getHouse(){
    if(has(this.state.house, 'number') && has(this.state.house, 'street')){
      return(
        <Body house={this.state.house}/>
      );
    }
    return null;
  }

  queryJSON(event){
    json.houses.forEach(house => {
      if(house.number.includes(event) || house.street.toLowerCase().includes(event) || house.city.toLowerCase().includes(event)){
        this.setHouse(house);
      }
    });
  }

  render(){
    return(
      <Article>
        <Header basis="full" justify="end">
          <Box justify="end" pad="medium">
            <input id="search" name="search" type="text" size="40" onKeyUp={this.handleEvent} />
          </Box>
        </Header>
        <Box basis="full">
          {this.getHouse()}
        </Box>
      </Article>
    );
  }
}

export default PropertySearch;
