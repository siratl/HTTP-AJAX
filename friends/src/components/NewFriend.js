import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewFriend = props => {
  //   const handleSubmit = ev => {
  //     ev.preventDefault();
  //     if (props.isUpdating) {
  //       props.updateFriend();
  //     } else {
  //       props.addFriend();
  //     }
  //   };

  return (
    <Form onSubmit={props.addFriend} className="form">
      <FormGroup>
        <Label for="name">
          <h5>Add a New Friend</h5>
          <strong>Name</strong>
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={props.newFriend.name}
          placeholder="Enter name"
          onChange={props.handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">
          <strong>Age</strong>
        </Label>
        <Input
          type="number"
          name="age"
          id="age"
          value={props.newFriend.age}
          placeholder="Enter age"
          onChange={props.handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">
          <strong>Email</strong>
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={props.newFriend.email}
          placeholder="Enter email"
          onChange={props.handleChanges}
        />
        
      </FormGroup>
      <Button type="submit">Add Friend</Button>
    </Form>
  );
};

export default NewFriend;
