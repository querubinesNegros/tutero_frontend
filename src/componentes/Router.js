import React, { Component } from 'react'
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom';
import Menu from './Menu'
import LandingPage from './LandingPage';
import Registro from './Registro';
import Estudiante from './Estudiante';
import Servicios from './Servicios';
import Disponibilidad from './Disponibilidad';
import Historial from './Historial';
import Recreacion from './Recreacion';
import store from '../store';
const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
     
    store.getState().aut === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
export default class Router extends Component {
  
    render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/registro" component={Registro}/>
                <PrivateRoute   exact path="/estudiante" component={Estudiante}/>
                <PrivateRoute exact path="/servicios" component={Servicios}/>
                <PrivateRoute exact path="/disponibilidad" component={Disponibilidad}/>
                <PrivateRoute exact path="/historial" component={Historial}/>
                <PrivateRoute exact path="/recreacion" component={Recreacion}/>
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
