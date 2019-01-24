import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
        {this.state.friends.map(friend => 
            <div key={friend.id}>
                <span>{friend.id} </span>
                <span>{friend.name} </span>
                <span>{friend.age} </span>
                <span>{friend.email} </span>
            </div>
            )}
      </div>
    );
  }
}

export default FriendsList;
