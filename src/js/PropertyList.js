import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import LayerIcon from 'grommet/components/icons/base/Layer';
import Columns from 'grommet/components/Columns';
import Image from 'grommet/components/Image';

class PropertyList extends Component{
  constructor(props){
    super(props);
  }

  getCards(){
    let result = this.props.houses.map(house => (
      <Card
        margin="medium"
        contentPad="small"
        key={house.number + house.street}
        thumbnail={<Image size="medium" src={house.images[0]} />}
        label={this.getAddress(house)}
        size="small"
        link={<Anchor path={house.path} icon={<LayerIcon />} label="View Building"/>}
      />
    ));
    return result;
  }

  getAddress(house){
    if(house){
      return(
        house.number + " " + house.street
      );
    }

  }

  getList(){
    return(
      <Columns maxCount={5} size="small">
        {this.getCards()}
      </Columns>
    );
  }

  render(){
    return(
      this.getList()
    );
  }
}

export default PropertyList;
