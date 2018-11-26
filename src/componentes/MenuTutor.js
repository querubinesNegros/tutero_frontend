import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import { logPageView } from '../analytics';

export default class MenuTutor extends Component {
  constructor(){
    super();
    logPageView();
  }

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
                    <Link to='/tutor' className="nav-link">
                      <img src="/logo.jpeg" width= "50px" alt ="" className="img-circle"/>
                    </Link>
                  </li>
                  <li className="item">
                    <Link to='/tutor' className="nav-link">Perfil</Link>
                  </li>
                  <li className="item">
                    <Link to='/tutor/disponibilidad' className="nav-link">Disponibilidad</Link>
                  </li>
                  <li className="item">
                    <Link to='/tutor/tutorias' className="nav-link">Tutorias</Link>
                  </li>
                  <li className="item">
                    <Link to='/tutor/estudiantes' className="nav-link">Estudiantes</Link>
                  </li>
                  
                  <li className="item">
     
                                    
                      <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Logout</button>

       
                  </li>
                </ul>
                
              </div>
            </nav>
          
        </div>

    )
  }
}