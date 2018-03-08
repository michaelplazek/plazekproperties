import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import PropertyList from './PropertyList';

import has from 'lodash.has';

class PropertySearch extends Component{
  constructor(props){
    super(props);

    this.getHouses = this.getHouses.bind(this);
  }

  getHouses(){
    return(
      <Box basis="full">
        <PropertyList history={this.props.history} houses={this.props.house_list} />
      </Box>
    );
  }

  render(){
    return this.getHouses();
  }
}

PropertySearch.PropTypes = {
  house_list: PropTypes.array
};

export default PropertySearch;
