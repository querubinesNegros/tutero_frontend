import React, { Component } from 'react'


export default class Answer extends Component {  
  

  render() {
    const respuesta = this.props.user.userable_type
    let tipo;
    if(respuesta == "Student"){
      tipo = "Estudiante"
    }else if (respuesta == "Tutor"){
      tipo = "Tutor"
    }else if (respuesta == "Admin"){
      tipo = "Administrador"
    }

    return (
      <div className="card">        
        <div className="card-body"> 
          <p className="card-subtitle">{this.props.content}</p>                       
          <p className="card-text">Usuario: {(tipo) + " " + 
          (this.props.user.name) + ' ' + (this.props.user.lastname)}</p>                             
        </div>
      </div>       
    )
  }

}
