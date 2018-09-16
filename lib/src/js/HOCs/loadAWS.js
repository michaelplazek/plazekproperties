import React, { Component } from 'react';

import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';

const AWS = require('aws-sdk');

function loadAWS(WrappedComponent){

  return class Container extends Component{
    constructor(props){
      super(props);

      this.state = {
        json: []
      };

      this.getJSON = this.getJSON.bind(this);
    }

    componentWillMount(){
     this.getJSON();
    }

    getJSON(){
      AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: "us-east-2"
      });
      const s3 = new AWS.S3();
      let self = this;

      let result = null;
      let params = {
        Bucket: "plazek-properties-info",
        Key: "units.json"
      };

      s3.getObject(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else {
          result = JSON.parse(data.Body);
          self.setState({json:result});
        }
      });
    }

    render(){

      const { history } = this.props;

      let result = null;
      if(this.state.json){
        result = <WrappedComponent history={history} json={this.state.json}/>;
      }
      else{
        result = (
          <Box full="vertical" basis="full" justify="center" align="center"><Spinning size="large" /></Box>
        );
      }
      return result;
    }
  };
}

export default loadAWS;


