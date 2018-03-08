import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Box from 'grommet/components/Box';

class MobileNavigationBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Header direction="row" colorIndex="neutral-1" justify="center">
        <List>
          <ListItem justify='center'>
            <Box margin="medium">
            <Anchor path="/">
              <Label margin="large" size="large">Home</Label>
            </Anchor>
            </Box>
          </ListItem>
          <ListItem justify='center'>
            <Box margin="medium">
              <Anchor path="/properties">
                <Label size="large">Properties</Label>
              </Anchor>
            </Box>
          </ListItem>
          <ListItem justify='center'>
            <Box margin="medium">
              <Anchor path="/contact">
                <Label size="large">Contact</Label>
              </Anchor>
            </Box>
          </ListItem>
          <ListItem justify='center'>
            <Box margin="medium">
              <Anchor path="/about">
                <Label size="large">About Us</Label>
              </Anchor>
            </Box>
          </ListItem>
        </List>
      </Header>
    );
  }
}

MobileNavigationBar.PropTypes = {
  handleEvent: PropTypes.func.isRequired
};

export default MobileNavigationBar;
