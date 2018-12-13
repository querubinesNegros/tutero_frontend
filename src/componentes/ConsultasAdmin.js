import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import FooterAdmin from './FooterAdmin';
import Consultas from './Consultas'



export default class CertificadosTutor extends Component {
  
  render() {
    return (
      <div>
        <MenuAdmin/>
        <Consultas/>          
        <FooterAdmin/> 
      </div>
        
    )
  }

}
