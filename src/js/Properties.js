import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';

import PropertySearch from './PropertySearch';
import GoogleMapsWrapper from './components/GoogleMapsWrapper';
import SearchBar from './components/SearchBar';

const json = require('../../units.json');

class Properties extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: {},
      house: {},
      house_list: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount(){
    this.setState({house_list:json.houses});
  }

  handleSearch(){
    let event = document.getElementById('search').value;
    this.setState({input:event});

    this.queryJSON(event);
    console.log(event);
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
    this.setState({house_list:result});
  }

  render(){
    return(
      <Box>
        <Header basis="full" full="horizontal" justify="end" pad="medium">
          <Box justify="end" pad="medium" basis="medium" align="end">
            <SearchBar
              handleEvent={this.handleSearch}
            />
          </Box>
        </Header>
        <GoogleMapsWrapper/>
        <PropertySearch
          input={this.state.input}
          house_list={this.state.house_list}
        />
      </Box>
    );
  }
}

export default Properties;
