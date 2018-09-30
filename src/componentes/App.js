import React, { Component } from 'react';

import '../styles/App.css';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router/>
      </div>
    );
  }
}

export default App;
