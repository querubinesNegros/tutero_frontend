import React, { Component } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Menu from './Menu'
import LandingPage from './LandingPage';
import Registro from './Registro';
import Estudiante from './Estudiante';
import Servicios from './Servicios';
import Disponibilidad from './Disponibilidad';
import Historial from './Historial';
import Recreacion from './Recreacion';

export default class Router extends Component {
    
    render() {
    return (
      <BrowserRouter>
        
        <div>
            <Switch>
                
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/registro" component={Registro}/>
                <Route exact path="/estudiante" component={Estudiante}/>
                <Route exact path="/servicios" component={Servicios}/>
                <Route exact path="/disponibilidad" component={Disponibilidad}/>
                <Route exact path="/historial" component={Historial}/>
                <Route exact path="/recreacion" component={Recreacion}/>
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
