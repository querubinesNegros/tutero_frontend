import React, { Component } from 'react'
import '../styles/Menu.css';
import {Link} from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div className="container" id="containerMenu">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Tutero</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to={'/'}>
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/login'}>
                  LOGIN
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/registro'}>
                  REGISTRO
                </Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
    )
  }
}
