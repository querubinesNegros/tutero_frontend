import React, { Component } from 'react'
import Menu2 from './Menu2';
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import $ from 'jquery'
import {Link} from 'react-router-dom'
import swal from 'sweetalert2';
import ApiCalendar from 'react-google-calendar-api';
import { logPageView } from '../analytics';



export default class Disponibilidad extends Component{

    constructor() {
        super();
            this.state = {schedules:[], options:[]};
        }
        logPageView();

    componentDidMount(){
        
        axios.get(`${baseURL}/users/${store.getState().id}/student/schedules`)
            .then((response) => {
                const schedules = response.data;
                this.setState({schedules});
                   
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

    showSchedules = (e) =>{
        $('#addSchedule').hide();
        $('#deleteSchedule').hide();
        $('#showSchedules').show();

        $('#btnShowSchedules').prop('disabled',true);
        $('#btnAddSchedule').prop('disabled',false);
        $('#btnRemoveSchedule').prop('disabled',false);
        axios.get(`${baseURL}/users/${store.getState().id}/student/schedules`)
        .then((response) => {
            const schedules = response.data;
            this.setState({schedules});
               
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    addSchedule = (e) =>{

        $('#showSchedules').hide();
        $('#deleteSchedule').hide();
        $('#addSchedule').show();

        $('#btnShowSchedules').prop('disabled',false);
        $('#btnAddSchedule').prop('disabled',true);
        $('#btnRemoveSchedule').prop('disabled',false);
        
        
        axios.get(`${baseURL}/schedules`)
            .then((response) => {
                const options = response.data;
                this.setState({options});  
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    removeSchedule = (e) =>{

        $('#showSchedules').hide();
        $('#deleteSchedule').show();
        $('#addSchedule').hide();

        $('#btnShowSchedules').prop('disabled',false);
        $('#btnAddSchedule').prop('disabled',false);
        $('#btnRemoveSchedule').prop('disabled',true);

        
    }

    setField (e) {
        if(e.target.id === 'selectSchedule'){
            console.log(e.target.value);
            const addSchedule = e.target.value;
            this.setState({addSchedule});
            
          }
        console.log(this.state);
        }
    
    handleSubmit = (e) =>{
        const option = this.state.addSchedule;
        console.log(option);
        const schedule = {user_id:store.getState().id};
        axios.patch(`${baseURL}/schedules/${option}`,schedule)
            .then((res)=> {
                swal({title:'Se agregó el horario', timer:3000, showConfirmButton:false});
                setTimeout(function(){window.location = `${baseURLFront}/estudiante`;}, 3000); 
            })
            .catch(function(error){
                console.log(error);
            })
    }

    removeScheduleEvent(e){
        const user_id={user_id:store.getState().id}
        const option = e.target.value;
        axios.delete(`${baseURL}/schedules/${option}`,user_id)
            .then((res)=> {
                swal({title:'Se eliminó el horario', timer:3000, showConfirmButton:false});
                setTimeout(function(){window.location = `${baseURLFront}/estudiante`;}, 3000); 
            })
            .catch(function(error){
                console.log(error);
            })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Menu2/>
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
                    
                    <table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Día</th>
						      <th scope="col">Hora</th>
						      
						       
						    </tr>
						  </thead>
						  <tbody>
						    
						      {this.state.schedules.map(home => 
						    	<tr>
						    	<td>{home.name}</td>
						    	<td>{home.hour}</td>
						    	
						    
						    		</tr>)}
						  </tbody>
						</table>
                </div>
                <div className="container mt-3" id="addSchedule">
                    <h2>Agrega un nuevo horario</h2>
                    <select id="selectSchedule" onChange={(e)=>this.setField(e)}>
                    	{this.state.options.map(home => 
						    <option value={home.id}>{home.name} {home.hour} horas</option>
						)}
						</select>

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
						    
						      {this.state.schedules.map(home => 
						    	<tr>
						    	<td>{home.name}</td>
						    	<td>{home.hour}</td>
						    	<td><button type="button" value={home.id} onClick={(e)=>this.removeScheduleEvent(e)}>Borrar</button></td>
						    
						    		</tr>)}
						  </tbody>
						</table>
                    
                </div>
                
            </div>
        )
    }
}