import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import $ from 'jquery'
import {Link} from 'react-router-dom'


export default class TutoriasTutor extends Component {
    constructor() {
        super();
        this.state = {tutorings:[]};
    }

    componentDidMount(){
        
        axios.get(`${baseURL}/users/${store.getState().id}/student/tutorings`)
            .then((response) => {
                const tutorings = response.data.data;
                this.setState({tutorings});
                console.log(tutorings)
            })
            .catch(function (error) {
                console.log(error);
            });
        $('#addSchedule').hide();
        $('#deleteSchedule').hide();
        $('#btnShowSchedules').prop('disabled',true);
        $('#btnAddSchedule').prop('disabled',false);
        $('#btnRemoveSchedule').prop('disabled',false);
    }

    render() {
    return (
      <div>
        <MenuTutor/>
        <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" onClick={this.showSchedules} id="btnShowSchedules">Ve tus horarios</button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" onClick={this.addSchedule} id="btnAddSchedule">Agrega un horario</button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" onClick={this.removeSchedule} id="btnRemoveSchedule">Elimina un horario</button>
                        </div>
                    </div>
                </div>    
                <div class="container mt-3" id="showSchedules">
                    <h2>Estos son tus horarios disponibles.</h2>


						    
                              {this.state.tutorings.map(home =>
                              
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Fecha: {home.date}</h5>
                                    <h5 className="card-title">Tipo: {home.type_t}</h5>
                                    <p className="card-text">Nota del estudiante: {home.noteStudent}</p>
                                    <p className="card-text">Nota del tutor: {home.noteTutor}</p>
        
                                </div>
                                </div> 
                            
						    	)}
                    
                </div>
                <div className="container mt-3" id="addSchedule">
                    <h2>Agrega un nuevo horario</h2>
                    {/*<select id="selectSchedule" onChange={(e)=>this.setField(e)}>
                    	{this.state.options.map(home => 
						    <option value={home.id}>{home.name} {home.hour} horas</option>
						)}
						</select>
                        */}
                    <div className="form-group">
                        <div className="form-group">
                        <Link to='/estudiante' className="btn btn-default">Cancelar</Link>
                        <button type="submit" className="btn btn-default" id="submit" onClick={this.handleSubmit}>Guardar</button>

                        </div>
                    </div>
                </div>
                <div id="deleteSchedule" className="container mt-3">
                    <h2>Borrar horario</h2>
                    <table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Día</th>
						      <th scope="col">Hora</th>
						      <th scope="col">Borrar</th>
						       
						    </tr>
						  </thead>
						  <tbody>
						    
						      {/*this.state.schedules.map(home => 
						    	<tr>
						    	<td>{home.name}</td>
						    	<td>{home.hour}</td>
						    	<td><button type="button" value={home.id} onClick={(e)=>this.removeScheduleEvent(e)}>Borrar</button></td>
						    
                              </tr>)*/}
						  </tbody>
						</table>
                        
                </div>
      </div>
    )
  }
}
