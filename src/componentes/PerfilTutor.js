import React, { Component } from 'react'
import MenuTutor from './MenuTutor';
import FooterTutor from './FooterTutor'

export default class PerfilTutor extends Component {
  render() {
    return (
      <div>
        <MenuTutor/>
        Desde perfil tutor.
        <FooterTutor/>
      </div>
    )
  }
}
