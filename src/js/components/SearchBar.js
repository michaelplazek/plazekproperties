import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {input:{}};

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(){
    let event = document.getElementById('search').value;
    this.setState({input:event});
    console.log(event);
  }

  render(){
    return(
      <input id="search" name="search" type="text" size="40" onKeyUp={this.handleEvent} />
    );
  }
}

export default SearchBar;
