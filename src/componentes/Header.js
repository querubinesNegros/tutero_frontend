import React, { Component } from 'react'
import '../styles/Header.css';
import {Link} from 'react-router-dom'
import Login from './Login'
import { logPageView } from '../analytics';
import {Image} from 'react-bootstrap';

export default class Header extends Component {
  constructor(){
    super();
    logPageView();
  }
  render() {
    return (
      <div id="containerHeader">
        <div className="row">
          <div className ="col-6">
            
            <div className="col-12 container">
                <h1 className="h1Landing align-middle">Tutero</h1>
                
                <Image src="/logo.jpeg"  circle className="profile-pic2"/>
                <br></br>
                <br></br>
                <Link to={'/registro'} className="btn btn-primary btnLanding" > Regístrate </Link>
                <br></br>
                <br></br>

                <h2 className="h2Landing">Vive la mejor experiencia</h2>
            </div>
          </div>  
          <div className="col-6">
            <Login/>
          </div>
        </div>
      </div>
    )
  }
}
