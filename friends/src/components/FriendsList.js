import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Table } from 'reactstrap';

class FriendsList extends Component {
  state = {
    friends: [],
    error: '',
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
          error: '',
        });
      })
      .catch(err => {
        this.setState({ error: err.response.statusText });
      });
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.error && <h3>{this.state.error}</h3>}

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.friends.map(friend => (
              <tr key={friend.id}>
                <th scope="row">{friend.id} </th>
                <td>{friend.name}</td>
                <td>{friend.age}</td>
                <td>{friend.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FriendsList;
