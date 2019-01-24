import React, { Component } from 'react';

import './App.css';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        
        <NewFriend />
      </div>
    );
  }
}

export default App;
