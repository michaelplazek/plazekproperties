import React, { Component } from 'react';

import Body from './Body';

import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import PropertyList from './PropertyList';

import has from 'lodash.has';

const json = require('../../units.json');

class PropertySearch extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: {},
      house: {},
      house_list: []
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.setHouse = this.setHouse.bind(this);
    this.getHouse = this.getHouse.bind(this);
    this.queryJSON = this.queryJSON.bind(this);
  }

  componentWillMount(){
    this.setState({house_list:json.houses});
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
    // if(has(this.state.house, 'number') && has(this.state.house, 'street')){
      return(
        <Box basis="full">
          <PropertyList houses={this.state.house_list} />
          {/*<Body house={this.state.house}/>*/}
        </Box>
      );
    // }
    // return(
    //   <Box basis="full">
    //     <PropertyList houses={this.state.house_list}/>
    //   </Box>
    // );
  }

  getHeader(){
    if(has(this.state.house, 'number') && has(this.state.house, 'street')){
      return (
        <Box direction="row">
          <Headline size="small" margin="none">{this.state.house.number}&nbsp;{this.state.house.street}&nbsp;{this.state.house.city}&nbsp;{this.state.house.zip}</Headline>
        </Box>
      );
    }
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
      }
    });
      // this.setHouse(house);
    this.setState({house_list:result});
  }

  render(){
    return(
      <Article>
        <Header basis="full" full="horizontal" justify="end" pad="medium">
          <Box justify="start" pad={{horizontal:"large"}}>
            {this.getHeader()}
          </Box>
          <Box justify="end" pad="medium" basis="medium" align="end">
            <input id="search" name="search" type="text" size="40" placeholder="Search for apartment" onKeyUp={this.handleEvent} />
          </Box>
        </Header>
          {this.getHouse()}
      </Article>
    );
  }
}

export default PropertySearch;
