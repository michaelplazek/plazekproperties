import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import GrommetApp from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box  from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import LoginForm from 'grommet/components/LoginForm';

import Home from './Home';
import Contact from './Contact';

const App = (props) => (

  <GrommetApp centered={false}>
    <Split priority="left" flex="right" fixed={true} separator={true}>
      <Sidebar colorIndex="neutral-1-t" size="medium">
        {/*<Box justify="center" align="center" margin="medium">*/}
          {/*<LoginForm align="start"/>*/}
        {/*</Box>*/}
        <Menu size="large" justify="center" align="center" basis="full" pad={{vertical:"large"}}>
          <Anchor path="/" label="Home"/>
          <Anchor path="/properties" label="Properties"/>
          <Anchor path="/contact" label="Contact"/>
          <Anchor path="/about" label="About Us"/>
        </Menu>
      </Sidebar>

      {props.children}

    </Split>
  </GrommetApp>
);

export default App;
