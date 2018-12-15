import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import Consultas from './Consultas'



export default class CertificadosTutor extends Component {
  
  render() {
    return (
      <div id="vistaTutor">
        <Menu2/>
        <Consultas/>          
        <Footer/> 
      </div>
        
    )
  }

}
