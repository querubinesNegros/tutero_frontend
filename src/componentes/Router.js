import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
import CrearRecreacion from './CrearRecreacion';
import GetUsers from './ObtenerUsers';
import NuevoAdmin from './NuevoAdmin';
import Servicio from './Servicio';
import Estadisticas from './Estadisticas';
import AboutUs from './AboutUs'
import Footer from './Footer';
import PerfilTutor from './PerfilTutor';
import DisponibilidadTutor from './DisponibilidadTutor';
import TutoriasTutor from './TutoriasTutor';
import TutorEditarPerfil from './TutorEditarPerfil';
import CertificadosTutor from './CertificadosTutor';
import Tutor_Estudiantes from './Tutor_Estudiantes';
import ConsultasAdmin from './ConsultasAdmin';
import ConsultasTutor from './ConsultasTutor';
import ConsultasEst from './ConsultasEst';
import AdminTutores from './AdminTutores';
import Steps from './Steps/Steps'
import Carrera from './Carrera'
import EncuestaTutor from './EncuestaTutor'
import EncuestaEst from './EncuestaEst'



const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (

    (store.getState().aut === true)

      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

function getUrl(type) {
  if (type == "Admin") return "admin"
  if (type == "Tutor") return "tutor"
  if (type == "Student") return "estudiante"
  return "/"
}

const Privatelogin = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (

    !localStorage.getItem('jwtToken') && localStorage.getItem('type') !== "Student"
      ? <Component {...props} />
      : <Redirect to={getUrl(localStorage.getItem('type'))} />
  )} />
)
export default class Router extends Component {
  state = {
    type: null
  }

  render() {
    //console.log(store.getState())
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Privatelogin exact path="/" component={LandingPage} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/aboutus" component={AboutUs} />
            <PrivateRoute exact path="/estudiante" component={Estudiante} />
            <PrivateRoute exact path="/estudiante/servicios" component={Servicios} />
            <PrivateRoute exact path="/estudiante/disponibilidad/" component={Disp} />
            <PrivateRoute exact path="/estudiante/historial" component={Historial} />
            <PrivateRoute exact path="/estudiante/recreacion" component={Recreacion} />
            <PrivateRoute exact path="/estudiante/perfil" component={Perfil} />
            <PrivateRoute exact path="/estudiante/editarperfil" component={EdPerfil} />
            <PrivateRoute exact path="/estudiante/consultas" component={ConsultasEst} />
            <PrivateRoute exact path="/estudiante/encuestas" component={EncuestaEst} />
            <PrivateRoute path="/servicio/:id" component={Servicio} />

            <PrivateRoute exact path="/admin" component={Admin} />
            <PrivateRoute exact path="/admin/crear_post" component={CrearPost} />
            <PrivateRoute exact path="/admin/crear_recreacion" component={CrearRecreacion} />
            <PrivateRoute exact path="/admin/obtener_users" component={GetUsers} />
            <PrivateRoute exact path="/admin/nuevo" component={NuevoAdmin} />
            <PrivateRoute exact path="/admin/estadisticas" component={Estadisticas} />
            <PrivateRoute exact path="/admin/consultas" component={ConsultasAdmin} />
            <PrivateRoute exact path="/admin/tutores" component={AdminTutores} />
            <PrivateRoute exact path="/career" component={Carrera} />

            <PrivateRoute exact path="/pasos" component={Steps} />

            <PrivateRoute exact path="/tutor" component={PerfilTutor} />
            <PrivateRoute exact path="/tutor/disponibilidad" component={DisponibilidadTutor} />
            <PrivateRoute exact path="/tutor/tutorias" component={TutoriasTutor} />
            <PrivateRoute exact path="/tutor/encuestas" component={EncuestaTutor} />
            <PrivateRoute exact path="/tutor/editarperfil" component={TutorEditarPerfil} />
            <PrivateRoute exact path="/tutor/certificados" component={CertificadosTutor} />
            <PrivateRoute exact path="/tutor/estudiantes" component={Tutor_Estudiantes} />
            <PrivateRoute exact path="/tutor/consultas" component={ConsultasTutor} />

          </Switch>

        </div>

      </BrowserRouter>
    )
  }
}
