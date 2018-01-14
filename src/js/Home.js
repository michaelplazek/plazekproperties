import React from 'react';

import Box  from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Headline  from 'grommet/components/Headline';
import Animate from 'grommet/components/Animate';

const Home = () => (

      <Box direction="row" basis="full" full="vertical" justify="center" align="center">
        <Box>
          <Headline align="center" margin="small">
            Plazek Properties
          </Headline>
          <Box justify="center" align="center">
            <Animate enter={{"animation": "fade", "duration": 1000, "delay": 1000}}>
              <Label margin="none">Search for a new home.</Label>
            </Animate>
          </Box>
        </Box>
      </Box>
);

export default Home;
