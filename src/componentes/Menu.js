import React, { Component } from 'react'
import '../styles/Menu.css';
import {Link} from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div  id="containerMenu">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to={'/'}>
                  <img src="/logo.jpeg" width= "50px" alt ="" className="img-circle"/>  
                </Link>
              </li>
              <li className="nav-item active">
                <Link to={'/'}>
                  HOME
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
