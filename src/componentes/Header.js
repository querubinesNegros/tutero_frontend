import React, { Component } from 'react'
import '../styles/Header.css';
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="container" id="containerHeader">
        <div className="row">
            <div className="col-12">
                <h1 className="h1Landing align-middle">Tutero</h1>
            </div>
            <div className="col-6 mr-auto ml-auto">
                <h2 className="h2Landing">Hay que colocar un slogan bien áspero acá!</h2>
                <Link to={'/registro'} className="btn btn-primary btnLanding" >Regístrate</Link>
            </div>
            
        </div>
      </div>
    )
  }
}
