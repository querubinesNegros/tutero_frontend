import React, { Component } from 'react'
import '../styles/Menu.css';
import {Link} from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div className="container" id="containerMenu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Tutero</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to={'/'}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'}>
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
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
