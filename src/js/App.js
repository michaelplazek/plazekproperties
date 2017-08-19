import React from 'react';
import GrommetApp from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const App = (props) => (

  <GrommetApp centered={false}>
    <Split priority="left" flex="right" fixed={true} separator={true}>
      <Sidebar colorIndex="neutral-1" size="small">
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
