import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

class EmailForm extends Component{
  constructor(props){
    super(props);
  }

  onSubmit(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    //TODO: set up AWS-SES to send mail
  }

  render(){
    return (
      <Form onSubmit={this.onSubmit}>
        <Heading>
          Contact Us
        </Heading>
        <FormField label="Name">
          <TextInput id="name" />
        </FormField>
        <FormField label="Email">
          <TextInput id="email" />
        </FormField>
        <FormField label="Phone">
          <TextInput id="phone" />
        </FormField>
        <FormField label="Message">
          <textarea
            id="message"
            name="message"
            rows="10" cols="50" />
        </FormField>
        <Button
          label='Submit'
          type='submit'
          primary={true}
          box={true}
          margin="medium"
           />
      </Form>
    );
  }
}

export default EmailForm;
