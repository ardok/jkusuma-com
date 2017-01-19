import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
