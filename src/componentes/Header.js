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
  
      var styles = {
        margin: '20px',
        width: '200px',
        height: '200px',
      }
     
    return (
      <div id="containerHeader" style={{height:900}}>
        <div className="row">
          <div className ="col-6">
            
            <div className="col-12 container">
                <h1 className="h1Landing align-middle">Universidad de Cundinamarca</h1>
                
                <Image src="/udec1.jpg" style={styles} circle className="img-fluid"/>
                <br></br>
                <br></br>
                <Link to={'/registro'} className="btn btn-yellow btnLanding" > Regístrate </Link>
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
