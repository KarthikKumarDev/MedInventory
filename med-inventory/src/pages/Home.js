import React, { Component } from 'react';
import NavBar from "../layout/NavBar"

class Home extends Component {
  
  render() {
    const {
      user,
      signOut,
    } = this.props;

    return (
      <div>
          <NavBar signOut={signOut}/>
          <p>Hello, {user.displayName}</p>
      </div>
    );
  }
}

export default Home;
