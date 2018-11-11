import React, { Component } from 'react'
import '../styles/Descripcion.css'
import { logPageView } from '../analytics';

export default class Descripcion extends Component {
  constructor(){
    super();
    logPageView();
  }
  render() {
    const {pregunta,respuesta,recurso,tituloImagen, subtituloImagen} = this.props.informacion;
    return (
      <div>
      <div className="container containerDescripcion">
        <div className="row">
          <div className="col-6">
              <h1 id="h1Descripcion">{pregunta}</h1>
          </div>
          <div className="col-6">
              <p id="pDescripcion">{respuesta}
              </p>
          </div>
          
        </div>
      </div>
      <div className="container" id={recurso}>
        <div className="row">
          <div className="col-12">
              <h1 className="h1Landing align-middle">{tituloImagen}</h1>
          </div>
          <div className="col-6 mr-auto ml-auto">
              <h2 className="h2Landing">{subtituloImagen}</h2>
          </div>
          
        </div>
      </div>
      </div>
    )
  }
}
