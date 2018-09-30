import React, { Component } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import landingPage from './LandingPage'
import login from './Login'
import registro from './Registro'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        
        
        <Switch>
            <Route exact path="/" component={landingPage}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/registro" component={registro}/>
            <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
