import React, { Component } from 'react';
import NewFriend from './components/NewFriend';

import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friends: [],
    error: '',
    newFriend: {
      name: '',
      age: '',
      email: '',
    },
    //  isUpdating: false,
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
        this.setState({ error: err.statusText });
      });
  }

  handleChanges = ev => {
    console.log(ev.target);
    ev.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [ev.target.name]: ev.target.value,
        },
      };
    });
  };

  addFriend = ev => {
    console.log(this.state.newFriend.name);
    ev.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)

      .then(res => {
        this.setState({
          friends: res.data,
          newFriend: {
            name: '',
            age: '',
            email: '',
          },
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
   // console.log(this.state.friends)
    axios
    .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = ev => {
    ev.preventDefault();
    this.deleteFriend(ev.target.id);
  };

  updateFriend = () => {
    axios
      .put(
        'http://localhost:5000/friends/'`${this.state.newFriend.id}`,
        this.state.newFriend,
      )
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          newFriend: {
            name: '',
            age: '',
            email: '',
          },
        });
      })
      .then()
      .catch(err => console.log(err));
  };

  handleUpdate = ev => {
    ev.preventDefault();
    this.updateFriend(ev.target.id);
  };

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {this.state.error && <h3>{this.state.error}</h3>}

        <Route exact path="/friends" component={FriendsList} />
        <Route
          render={props => (
            <FriendsList
              exact
              path="/"
              {...props}
              friends={this.state.friends}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          render={props => (
            <NewFriend
              {...props}
              addFriend={this.addFriend}
              //isUpdating={this.isUpdating}
              //updateFriend={this.updateFriend}
              newFriend={this.state.newFriend}
              handleChanges={this.handleChanges}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
