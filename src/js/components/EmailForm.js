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

  render(){
    return (
      <Form>
        <Heading>
          Contact Us
        </Heading>
        <FormField label="Name">
          <TextInput />
        </FormField>
        <FormField label="Email">
          <TextInput />
        </FormField>
        <FormField label="Phone">
          <TextInput />
        </FormField>
        <FormField label="Message">
          <textarea
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
