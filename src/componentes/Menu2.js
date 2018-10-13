import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';

export default class Menu2 extends Component {


  handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.removeItem('jwtToken')
    swal({title:'Vuelve pronto...', timer:1000, showConfirmButton:false, onOpen: () =>{
       swal.showLoading()
     }});
    setTimeout(function(){window.location.reload()},1000);
  }
 
  render() {
    return (
        <div id="containerNav">  
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav">
                  <li className="item">
                    <a className="nav-link" href="/recreacion">Recreación</a>
                  </li>
                  <li className="item">
                    <a className="nav-link" href="/historial">Historial</a>
                  </li>
                  <li className="item">
                    <a className="nav-link" href="/Estudiante">TUTERO</a>
                  </li>
                  <li className="item">
                    <a className="nav-link" href="/servicios">Servicios</a>
                  </li>
                  <li className="item">
                    <a className="nav-link" href="/disponibilidad">Disponibilidad</a>
                  </li>
                  <button className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" onClick={this.handleSubmit}>Logout</button>
                </ul>
                
              </div>
            </nav>
          
        </div>

    )
  }
}

  