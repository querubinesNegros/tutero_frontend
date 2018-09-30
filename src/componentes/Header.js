import React, { Component } from 'react'
import '../styles/Header.css';
import people from '../recursos/workplace.jpg';

export default class Header extends Component {
  render() {
    return (
      <div className="container" id="containerHeader">
        <div className="row">
            <div className="col-6">
                <h1 className="h1Landing align-middle">Bienvenido a Tutero</h1>
            </div>
            <div className="col-6">
                <h1 className="h1Landing">Bienvenido a Tutero2</h1>
            </div>
        </div>
      </div>
    )
  }
}
