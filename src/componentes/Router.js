import React, { Component } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import landingPage from './LandingPage'
import login from './Login'
import registro from './Registro'
import Menu from './Menu'
import infoLandingPage from '../Datos/datos.json'
import Descripcion from './Descripcion';
import LandingPage from './LandingPage';

export default class Router extends Component {
    state={
        info : []
    }
       
    
    componentWillMount(){
        this.setState({
            info : infoLandingPage
        })
    }
    render() {
    return (
      <BrowserRouter>
        
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/" render={() => (
                    <LandingPage
                        info={this.state.info}
                    />
                )}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/registro" component={registro}/>
                <Route component={Error}/>
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
