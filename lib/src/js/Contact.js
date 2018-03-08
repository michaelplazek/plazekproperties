import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/Heading';

import MailOptionIcon from 'grommet/components/icons/base/MailOption';
import ContactIcon from 'grommet/components/icons/base/Contact';
import MapLocationIcon from 'grommet/components/icons/base/MapLocation';

class Contact extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Box basis="full" full="vertical" justify="center">
        {/*<Box  align="center" justify="center" margin="medium">*/}
          {/*/!*<Heading tag="h2">*!/*/}
            {/*/!*Contact*!/*/}
          {/*/!*</Heading>*!/*/}
        {/*</Box>*/}
          <Box  align="center" justify="center" pad="large" basis="full">
            <List>
              <ListItem>
                <Label margin="none" ><MailOptionIcon /></Label>
                <Label margin="none" >&nbsp;&nbsp;luisa.plazek@plazekproperties.com</Label>
              </ListItem>
              <ListItem>
                <Label margin="none" ><ContactIcon /></Label>
                <Label margin="none" >&nbsp;&nbsp;412-860-3518</Label>
              </ListItem>
              <ListItem>
                <Label margin="none" ><MapLocationIcon /></Label>
                <Label margin="none" >&nbsp;&nbsp;3645 Perrysville Ave Pittsburgh, PA 15214</Label>
              </ListItem>
            </List>
          </Box>
      </Box>
    );
  }
}

export default Contact;
