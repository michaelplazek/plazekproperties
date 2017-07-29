import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <input id="search" name="search" type="text" size="40" onKeyUp={this.props.handleEvent} />
    );
  }
}

SearchBar.PropTypes = {
  handleEvent: PropTypes.func.isRequired
};

export default SearchBar;
