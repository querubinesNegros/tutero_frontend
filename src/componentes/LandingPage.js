import React, { Component } from 'react'
import Header from './Header';

import Menu from './Menu';
import Registro from './Registro'
import { Switch, Route } from 'react-router-dom';


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Header/>
      </div>
    )
  }
}
