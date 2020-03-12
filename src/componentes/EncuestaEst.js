import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import Encuestas from './Encuestas'

export default class EncuestaEst extends Component {
  
    render() {
      return (
        <div>
          <Menu2/>
          <Encuestas/>          
          <Footer/> 
        </div>
          
      )
    }
  
  }