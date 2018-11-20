import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';
import {Link} from 'react-router-dom';

export default class Menu2 extends Component {

/*
  handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.removeItem('jwtToken')
    swal({title:'Vuelve pronto...', timer:1000, showConfirmButton:false, onOpen: () =>{
       swal.showLoading()
     }});
    setTimeout(function(){window.location.reload()},1000);
  }
*/ 
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
                    <Link to='/recreacion' className="nav-link">Recreación</Link>
                  </li>
                  <li className="item">
                    <Link to='/historial' className="nav-link">Historial</Link>
                  </li>
                  <li className="item">
                    <Link to='/estudiante' className="nav-link">TUTERO</Link>
                  </li>
                  <li className="item">
                    <Link to='/servicios' className="nav-link">Servicios</Link>
                  </li>
                  <li className="item">
                    <Link to= {{pathname: '/disponibilidad/' }}  className="nav-link">Disponibilidad</Link>
                  </li>
                  
                  <div className="button navbar-right">
                        <div className="dealer-face">
                          <Link  to="/Perfil">
                            <img src="/person-1.jpg" width= "30px" alt ="" className="img-circle"/> 
                            </Link>          
                          </div>
                  </div>
                </ul>
                
              </div>
            </nav>
          
        </div>

    )
  }
}

  