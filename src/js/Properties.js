import React, { Component } from 'react';

import Box from 'grommet/components/Box';

import PropertySearch from './PropertySearch';
import GoogleMapsWrapper from './components/GoogleMapsWrapper';

class Properties extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Box>
        <GoogleMapsWrapper/>
        <PropertySearch />
      </Box>
    );
  }
}

export default Properties;
