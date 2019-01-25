import React from 'react';
import { Table } from 'reactstrap';

const FriendsList = props => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.friends.map(friend => (
            <tr key={friend.id}>
              <th scope="row">{friend.id} </th>
              <td>{friend.name}</td>
              <td>{friend.age}</td>
              <td>{friend.email}</td>
              <td onClick={props.handleDelete}>
                <span
                className='deleteBtn'
                  id={friend.id}
                  style={{ fontWeight: 'bold', cursor: 'pointer', color: 'red' }}
                >
                  X
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FriendsList;
