import React, { Component } from 'react'
import '../styles/Menu2.css';
import {Link} from 'react-router-dom'

export default class Menu2 extends Component {
  render() {
    return (
        <div id="containerNav">  
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav">
                  <li className="item">
                    <a class="nav-link" href="/recreacion">Recreación</a>
                  </li>
                  <li className="item">
                    <a class="nav-link" href="/historial">Historial</a>
                  </li>
                  <li className="item">
                    <a class="nav-link" href="/Estudiante">TUTERO</a>
                  </li>
                  <li className="item">
                    <a class="nav-link" href="/servicios">Servicios</a>
                  </li>
                  <li className="item">
                    <a class="nav-link" href="/disponibilidad">Disponibilidad</a>
                  </li>
                  
                </ul>
                
              </div>
            </nav>
          
        </div>

    )
  }
}

  