import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewFriend = props => {
  return (
    <Form className='form' >
      <FormGroup>
      
        <Label for="name"><h5>Add a New Friend</h5><strong>Name</strong></Label>
        <Input 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Enter name"/>
      </FormGroup>
      <FormGroup>
        <Label for="age"><strong>Age</strong></Label>
        <Input
          type="number"
          name="age"
          id="age"
          placeholder="Enter age"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email"><strong>Email</strong></Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
        />
      </FormGroup>
      <Button>Add Friend</Button>
    </Form>
  );
};

export default NewFriend;
