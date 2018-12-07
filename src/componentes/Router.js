import React, { Component } from 'react'
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom';
import Menu from './Menu'
import LandingPage from './LandingPage';
import Registro from './Registro';
import Estudiante from './Estudiante';
import Servicios from './Servicios';
import Disponibilidad from './Disponibilidad';
import Disp from './Disp';

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
import Estadisticas from './Estadisticas';
import Carrera from './Carrera'
import AboutUs from './AboutUs'
import Footer from './Footer';
import PerfilTutor from './PerfilTutor';
import DisponibilidadTutor from './DisponibilidadTutor';
import TutoriasTutor from './TutoriasTutor';
import TutorEditarPerfil from './TutorEditarPerfil';
import CertificadosTutor from './CertificadosTutor';
import Tutor_Estudiantes from './Tutor_Estudiantes';


const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <Route {...rest} render={(props) => (
     
    (store.getState().aut === true)
    
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
                <Route exact path="/aboutus" component={AboutUs}/>
                <PrivateRoute exact path="/estudiante" component={Estudiante}/>
                <PrivateRoute exact path="/servicios" component={Servicios}/>
                <PrivateRoute exact path="/disponibilidad/"   component={Disp}/>
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
                <PrivateRoute exact path="/career" component={Carrera}/>
                
                <PrivateRoute exact path="/tutor" component={PerfilTutor}/>
                <PrivateRoute exact path="/tutor/disponibilidad" component={DisponibilidadTutor}/>
                <PrivateRoute exact path="/tutor/tutorias" component={TutoriasTutor}/>
                <PrivateRoute exact path="/tutor/editarperfil" component={TutorEditarPerfil}/>
                <PrivateRoute exact path="/tutor/certificados" component={CertificadosTutor}/>
                <PrivateRoute exact path="/tutor/estudiantes" component={Tutor_Estudiantes}/>

            </Switch>
            
        </div>
        
      </BrowserRouter>
    )
  }
}
