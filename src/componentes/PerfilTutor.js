import React, { Component } from 'react'
import MenuTutor from './MenuTutor';
import FooterTutor from './FooterTutor'
import store from '../store';
import { logPageView } from '../analytics';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default class PerfilTutor extends Component {
  constructor() {
    super();
    logPageView();
  }
  render() {
    console.log(store.getState().userable_type)
    const type = localStorage.getItem('type')
        if (type != "Tutor"){
            alert("Acceso no autorizado")
            return  <Redirect push to = '/' />
        }
    
    return (
      <div>
        <MenuTutor />
        <div className="container">


          <h1 className="page-title">Bienvenido  <span className="h1">{store.getState().name}</span></h1>



          <h3> Eres un {store.getState().userable_type}  <br /></h3>
          <Image src={localStorage.getItem('picture')} width="250px" circle className="img-fluid rounded-circle hoverable" />
          <div className="form-group">

            <h4 className="s-property-title">Nombre de usuario:</h4>
            <label>{store.getState().name} {store.getState().lastname}</label>

          </div>
          <div className="form-group">
            <h4 className="s-property-title">Correo electronico:</h4>
            <label>{store.getState().email}</label>

          </div>
          <div className="form-group">
            <h4 className="s-property-title">Celular:</h4>
            <label>{store.getState().cellphone}</label>

          </div>

          <div className="form-group">
            <div className="form-group">
              <Link to='/tutor/editarperfil' className="btn btn-dark-green">Editar perfil</Link>


            </div>
          </div>
        </div>

        <FooterTutor />
      </div>
    )
  }
}
