import React from 'react';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Article from 'grommet/components/Article';
import Header  from 'grommet/components/Header';
import Box  from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Headline  from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';

const Home = () => (
  <App centered={false}>
    <Split priority="left" flex="right" fixed={false} seperator={true}>
      <Sidebar colorIndex="neutral-1-t" size="small">
      </Sidebar>
      <Box direction="row" basis="full" full="vertical" justify="center" align="center">
        <Box>
          <Headline align="center">
            Plazek Properties
          </Headline>
        </Box>
        </Box>
    </Split>
  </App>
);

export default Home;
