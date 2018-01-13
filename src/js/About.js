import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

class About extends Component{
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
              <Box pad="medium">
                <Heading tag="h2">What are we?</Heading>
                <Paragraph margin="none" >Plazek Properties is a family-owned company.
                  It encompasses the greater Pittsburgh area, including Bellevue, North
                  Hills, West View, and Brighton Heights.</Paragraph>
              </Box>
            </ListItem>
            <ListItem>
              <Box pad="medium">
                <Heading tag="h2">Who are we?</Heading>
                <Paragraph margin="none" >Plazek Properties was founded in 1990 by Daniel and
                  Luisa Plazek. They are the proud parents of 7 children and currently reside
                  in the North Side of Pittsburgh.
                </Paragraph>
              </Box>
            </ListItem>
            <ListItem>
              <Box pad="medium">
                <Heading tag="h2">Our Goals</Heading>
                <Paragraph margin="none" >We encourage tenant longevity through a business model
                  based on mutal respect and consideration between the tenant and landlord. We try
                  our hardest to cater to all of our tenants' needs and expect our tenants to
                  reciprocate this courtesy with on-time rent payments and observance of company
                  policies. Our goal is simple: to provide you with a clean and comfortable living
                  space for as long as possible.
                </Paragraph>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  }
}

export default About;
