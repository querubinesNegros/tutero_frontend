import React, { Component } from 'react'
import '../styles/Header.css';
import {Link} from 'react-router-dom'
import Login from './Login'

export default class Header extends Component {
  render() {
    return (
      <div id="containerHeader">
        <div className="row">
          <div class ="col-6">
            <div className="col-12">
                <h1 className="h1Landing align-middle">Tutero</h1>
            </div>
            <div className="col-12">
                <h2 className="h2Landing">Hay que colocar un slogan bien áspero acá!</h2>
                <Link to={'/registro'} className="btn btn-primary btnLanding" >Regístrate</Link>
                <h2 className="h2Landing">Y colocar alguna descripción acá</h2>
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
