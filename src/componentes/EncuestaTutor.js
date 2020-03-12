import React, { Component } from 'react'
import MenuTutor from './MenuTutor';
import Footer from './Footer';
import Encuestas from './Encuestas'

export default class EncuestaTutor extends Component {
  
    render() {
      return (
        <div>
          <MenuTutor/>
          <Encuestas/>          
          <Footer/> 
        </div>
          
      )
    }
  
  }