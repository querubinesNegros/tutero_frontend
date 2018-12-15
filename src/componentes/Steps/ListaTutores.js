import React, { Component } from "react";

class ListaTutores extends Component {
  constructor(){
    super();
    this.enviarHorario = this.enviarHorario.bind(this)
  }
  enviarHorario( id, key ){
    
    this.props.nextStep(3 , id , key)

  }
  render() {
    const tutors = this.props.tutors;
    return (
      <div className="container">
        <table className="table">
          <caption>Lista de tutores</caption>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Horario</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(tutors).map(key => (
              <tr key = {key}>
                <td>{tutors[key].name}</td>
                <td>{tutors[key].lastname}</td>
                <td><button type="button" class="btn btn-elegant btn-rounded btn-sm" onClick = {this.enviarHorario.bind(this,tutors[key].id , key)}>Ver horario</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListaTutores;
