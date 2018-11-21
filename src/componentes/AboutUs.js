import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Registro from './Registro'
import '../styles/AboutUs.css';
import { Switch, Route } from 'react-router-dom';
import { logPageView } from '../analytics';
import {Image} from 'react-bootstrap';

export default class AboutUs extends Component {
  constructor(){
    super();
    logPageView();
  }
  render() {
    
    return (
      <div>
        <div  id="containerMenu">

        <nav className="navbar navbar-expand-lg navbar-light">
        
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
                  <font size="5">HOME</font>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/registro'}>
                  <font size="5">REGISTRO</font>
                </Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
      
      
        <div id="containerCab">
        <div className="row">
          <div className ="col-6">
            
            <div className="col-12 container">
                <h1 className="h1Landing align-middle">Tutero</h1>
                
                <Image src="/logo.jpeg"  circle className="profile-pic2"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h2 className="h2Landing">Conoce un poco mas acerca de nosotros</h2>
            </div>
            
          </div> 
          <div className="col-6">
          <div className="col-12 container">
            <div id="cajasT">
                <div classname="align-center"> MISION</div>
                
            
            </div>
            <br></br>
            <br></br>
            
            <div id="cajasT">
                <div classname="align-center"> VISION</div>
            
                
            
            </div>
            <br></br>
            <br></br>
            
            <div id="cajasT">
                <div classname="align-center"> OBJETIVO</div>
                
            
            </div>
      
      
         </div>
        </div>
        </div>
      </div>
      
      
      </div>
    )
  }
}