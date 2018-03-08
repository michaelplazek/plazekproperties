import React, { Component } from 'react';

import MobileNavigationBar from './components/MobileNavigationBar';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Responsive from 'grommet/utils/Responsive';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { size: 'large' };

    this.setSize = this.setSize.bind(this);
  }

  componentDidMount () {
    this._responsive = Responsive.start(this.setSize);
  }

  componentWillUnmount() {
  this._responsive.stop();
}

  setSize(mobile){
    if(mobile)
      this.setState({ size: 'small' });
    else
      this.setState({ size: 'large' });
  }

  render(){

    const { children } = this.props;

    var childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { history: this.props.history }));

    if(this.state.size === 'large'){
      return(
        <GrommetApp centered={false}>
          <Split priority="right" flex="right" fixed={true} separator={true}>
            <Sidebar colorIndex="neutral-1" size="small">
              <Menu size="large" justify="center" align="center" basis="full" pad={{vertical:"large"}}>
                <Anchor path="/" label="Home"/>
                <Anchor path="/properties" label="Properties"/>
                <Anchor path="/contact" label="Contact"/>
                <Anchor path="/about" label="About Us"/>
              </Menu>
            </Sidebar>

            {childrenWithProps}

          </Split>
        </GrommetApp>
      );
    }
    else{
      return(
        <GrommetApp centered={false}>
          <Box full={true}>
            <MobileNavigationBar />
            {this.props.children}
          </Box>
        </GrommetApp>
      );
    }

  }
}

// const App = (props) => (
//
//   <GrommetApp centered={false}>
//     <Split priority="right" flex="right" fixed={true} separator={true} onResponsive={}>
//       <Sidebar colorIndex="neutral-1" size="small">
//         <Menu size="large" justify="center" align="center" basis="full" pad={{vertical:"large"}}>
//           <Anchor path="/" label="Home"/>
//           <Anchor path="/properties" label="Properties"/>
//           <Anchor path="/contact" label="Contact"/>
//           <Anchor path="/about" label="About Us"/>
//         </Menu>
//       </Sidebar>
//
//       {props.children}
//
//     </Split>
//   </GrommetApp>
// );

export default App;
