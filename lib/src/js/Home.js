import React, { Component } from 'react';

import Box  from 'grommet/components/Box';
import Headline  from 'grommet/components/Headline';
import Animate from 'grommet/components/Animate';
import Button from 'grommet/components/Button';


class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Box texture="https://s3.us-east-2.amazonaws.com/plazek-properties-info/backdrop.png" direction="row" basis="full" full="vertical" justify="center" align="center">
        <Box>
          <Headline align="center" margin="small">
            Plazek Properties
          </Headline>
          <Box justify="center" align="center">
            <Animate enter={{"animation": "fade", "duration": 1000, "delay": 500}}>
                <Button primary={true}
                        label='Search for a new home'
                        onClick={() => this.props.history.push('/properties')}
                        margin="medium"
                />
            </Animate>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Home;
