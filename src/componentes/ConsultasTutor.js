import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import FooterTutor from './FooterTutor'
import Consultas from './Consultas'




export default class CertificadosTutor extends Component {
  
  render() {
    return (
      <div>
        <MenuTutor/>
        <Consultas/>          
        <FooterTutor/> 
      </div>
        
    )
  }

}
