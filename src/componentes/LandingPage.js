import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Descripcion from './Descripcion'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        {Object.keys(this.props.info).map
        (
            descripcion=>(
                <Descripcion
                    informacion={this.props.info[descripcion]}
                    key={descripcion}
                />
            )
        )
        }
        
        
      </div>
    )
  }
}
