import React, { Component } from 'react';

import Box  from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Headline  from 'grommet/components/Headline';
import Animate from 'grommet/components/Animate';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';

import has from 'lodash.has';

class Body extends Component{
  constructor(props){
    super(props);

    this.getHouse = this.getHouse.bind(this);
  }

  getHouse(){
    if(this.props.house){
      let section = (
        <Box basis="full">
          <Hero
            background={<Image fit="cover" src={this.props.house.images[0]}/>}
            backgroundColorIndex='dark'
          >
            <Box direction='row'
                 justify='center'
                 align='center'>
              <Box basis='1/2'
                   align='end'
                   pad='medium' />
              <Box basis='1/2'
                   align='start'
                   pad='medium'>
                <Heading margin='none'>
                  {this.props.house.number + " " + this.props.house.street + " " + this.props.house.city + " " + this.props.house.zip}
                </Heading>
              </Box>
            </Box>
          </Hero>
        </Box>);
      return section;
    }
    return null;
  }

  render(){
    return(
      <Box basis="full" justify="center" pad="medium">
        <Box justify="center" align="center" basis="full">
          <Animate enter={{"animation": "fade", "duration": 1000, "delay": 1000}}>
            {this.getHouse()}
          </Animate>
        </Box>
      </Box>
    )
  }
}

export default Body;
