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
import Perfil from './Perfil';
import store from '../store';
import EdPerfil from './EstudianteEditarPerfil';
import Admin from './Admin';
import CrearPost from './CrearPost';
import GetUsers from './ObtenerUsers';
import NuevoAdmin from './NuevoAdmin';
import Servicio from './Servicio';
import Estadisticas from './Estadisticas'

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
     
    store.getState().aut === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
// Ruta privada para Admin 
const PrivateRouteAdmin = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
     
    store.getState().aut === true && store.getState().type === "Admin"
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
                <PrivateRoute exact path="/perfil" component={Perfil}/>
                <PrivateRoute exact path="/estudiante/editarperfil" component={EdPerfil}/>
                <PrivateRoute path="/servicio/:id" component={Servicio}/>

                <PrivateRoute exact path="/admin" component={Admin}/>
                <PrivateRoute exact path="/admin/crear_post" component={CrearPost}/>
                <PrivateRoute exact path="/admin/obtener_users" component={GetUsers}/>
                <PrivateRoute exact path="/admin/nuevo" component={NuevoAdmin}/>
                <PrivateRoute exact path="/admin/estadisticas" component={Estadisticas}/>
                
                
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
