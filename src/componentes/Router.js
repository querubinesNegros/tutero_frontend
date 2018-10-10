import React, { Component } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Menu from './Menu'
import LandingPage from './LandingPage';
import Registro from './Registro';

export default class Router extends Component {
    
    render() {
    return (
      <BrowserRouter>
        
        <div>
            <Switch>
                
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/registro" component={Registro}/>
                
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
