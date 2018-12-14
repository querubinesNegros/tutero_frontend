import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import $ from 'jquery'
import {Link} from 'react-router-dom'
import swal from 'sweetalert2';
import FooterTutor from './FooterTutor'
import '../styles/tutoriasTutor.css'


export default class TutoriasTutor extends Component {
    constructor() {
        super();
        this.state = {tutorings:[], students:[], topics:[], schedules:[]};
    }

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        console.log(`${baseURL}/users/${store.getState().id}/tutor/tutorings`)
        axios.get(`${baseURL}/users/${store.getState().id}/tutor/tutorings`)
            .then((response) => {
                console.log(response)
                const tutorings = response.data.tutorings;
                this.setState({tutorings});
                
            })
            .catch(function (error) {
                console.log(error);
            });
        $('#addTutoring').hide();
        $('#deleteTutoring').hide();
        $('#btnShowTutorings').prop('disabled',true);
        $('#btnAddTutoring').prop('disabled',false);
        $('#btnRemoveTutoring').prop('disabled',false);
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(`${baseURL}/users/${store.getState().id}/tutor/students`)
            .then((response) => {
                const students = response.data.students;
                this.setState({students});
                
            })
            .catch(function (error) {
                console.log(error);
            });
        $('#note').hide();
        
    }

    showSchedules = (e) =>{
        $('#addTutoring').hide();
        $('#deleteTutoring').hide();
        $('#showTutorings').show();

        $('#btnShowTutorings').prop('disabled',true);
        $('#btnAddTutoring').prop('disabled',false);
        $('#btnRemoveTutoring').prop('disabled',false);
        axios.get(`${baseURL}/users/${store.getState().id}/tutor/tutorings`)
        .then((response) => {
            const tutorings = response.data.tutorings;
            this.setState({tutorings});
               
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    addSchedule = (e) =>{

        $('#showTutorings').hide();
        $('#deleteTutoring').hide();
        $('#addTutoring').show();

        $('#btnShowTutorings').prop('disabled',false);
        $('#btnAddTutoring').prop('disabled',true);
        $('#btnRemoveTutoring').prop('disabled',false);
        
        
        axios.get(`${baseURL}/topics`)
            .then((response) => {
                console.log(response)
                const topics = response.data.topics;
                this.setState({topics});  
            })
            .catch(function (error) {
                console.log(error);
            });
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(`${baseURL}/schedules`)
            .then((response) => {
                console.log(response)
                const schedules = response.data.schedules;
                this.setState({schedules});  
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.state)
    }

    removeSchedule = (e) =>{

        $('#showTutorings').hide();
        $('#deleteTutoring').show();
        $('#addTutoring').hide();

        $('#btnShowTutorings').prop('disabled',false);
        $('#btnAddTutoring').prop('disabled',false);
        $('#btnRemoveTutoring').prop('disabled',true);

        
    }

    setField (e) {
        if(e.target.id === 'selectStudent'){
            console.log(e.target.value);
            const addStudent = e.target.value;
            this.setState({addStudent});
            
          }
          if(e.target.id === 'selectTopic'){
            console.log(e.target.value);
            const addTopic = e.target.value;
            this.setState({addTopic});
            
          }
          if(e.target.id === 'selectType'){
            console.log(e.target.value);
            const addType = e.target.value;
            this.setState({addType});
            
          }
          if(e.target.id === 'selectHour'){
            console.log(e.target.value);
            const addHour= e.target.value;
            this.setState({addHour});
            
          }
          if(e.target.id === 'selectFechaTutoria'){
            console.log(e.target.value);
            const addDate = e.target.value;
            this.setState({addDate});
            
          }
        
        console.log(this.state);
        }
    
    handleSubmit = (e) =>{
        const option = this.state.addTutoring;
        const tutoring = {topic_id:$('#selectTopic').val(),type_t:$('#selectType').val(),
                        student_id:$('#selectStudent').val(),hour:$('#selectHour').val(),
                        date:$('#selectFechaTutoria').val()};
        console.log(tutoring)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post(`${baseURL}/users/${store.getState().id}/tutor/tutorings`,tutoring)
            .then((res)=> {
                swal({title:'Se agregó la tutoría', timer:3000, showConfirmButton:false});
                setTimeout(function(){window.location = `${baseURLFront}/tutor`;}, 3000); 
            })
            .catch(function(error){
                console.log(error);
            })
    }

    removeScheduleEvent(e){
        const tutoring_id=$('#liRemove').val()
        console.log(`${baseURL}/tutorings/${tutoring_id}`)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.delete(`${baseURL}/tutorings/${tutoring_id}`)
            .then((res)=> {
                swal({title:'Se eliminó la tutoría', timer:3000, showConfirmButton:false});
                setTimeout(function(){window.location = `${baseURLFront}/tutor`;}, 3000); 
            })
            .catch(function(error){
                console.log(error);
            })
    }

    addNote(){
        $('#note').show();

    }
    handleSubmitAddNote(){
        const tutoring_id=$('#liTutoring').val()
        const tutoring = {noteTutor:$('#note textarea').val()}
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/tutorings/${tutoring_id}`,tutoring)
            .then((res)=> {
                swal({title:'Se agregó la nota', timer:3000, showConfirmButton:false});
                setTimeout(function(){window.location = `${baseURLFront}/tutor`;}, 3000); 
            })
            .catch(function(error){
                console.log(error);
            })
    }

    render() {
    return (
      <div>
        <MenuTutor/>
        <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" onClick={this.showSchedules} id="btnShowTutorings">Ve tus tutorías</button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" onClick={this.addSchedule} id="btnAddTutoring">Agrega una tutoría</button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" onClick={this.removeSchedule} id="btnRemoveTutoring">Elimina una tutoría</button>
                        </div>
                    </div>
                </div>    
                <div className="container mt-3" id="showTutorings">
                    <h2>Estos son tus tutorías.</h2>


						    
                              {this.state.tutorings.map(home =>
                              
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Fecha: {home.date}</h5>
                                    <h5 className="card-title">Tipo: {home.type_t}</h5>
                                    <p className="card-text">Estudiante: {home.student.user.name} {home.student.user.lastname}</p>
                                    <p className="card-text">Correo Estudiante: {home.student.user.email}</p>
                                    <p className="card-text">Nota del tutor: {home.noteTutor}</p>
                                    <p className="card-text">Calificación: {home.score}</p>
                                    <li value={home.id} id="liTutoring"></li>
                                </div>
                                    <div id="addNote">
                                        <button type="button" onClick={this.addNote} id="btnAddNote">Agrega una nota</button>
                                        <div id="note">
                                            <textarea placeholder="Escribe una nota"></textarea>
                                            <div>
                                                <Link to='/tutor' className="btn btn-default">Cancelar</Link>
                                                <button type="submit" className="btn btn-default" id="submitNote" onClick={this.handleSubmitAddNote}>Guardar</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                                
						    	)}
                    
                </div>
                <div className="container mt-3" id="addTutoring">
                    <h2>Escoge el estudiante</h2>
                    <select id="selectStudent" onChange={(e)=>this.setField(e)}>
                    	{this.state.students.map(home => 
						    <option value={home.user.userable_id}>{home.user.name} {home.user.lastname}</option>
						)}
						</select>
                    <h2>Escoge el tema</h2>
                    <select id="selectTopic" onChange={(e)=>this.setField(e)}>
                    	{this.state.topics.map(home => 
						    <option value={home.id} key={home.id}>{home.name}</option>
						)}
					</select>
                    <h2>Escoge el tipo</h2>
                    <select id="selectType" onChange={(e)=>this.setField(e)}>
                    	<option value="Presencial">Presencial</option>
                        <option value="Virtual">Virtual</option>
					</select>
                    <h2>Escoge la fecha</h2>
                    <input type="date" name="fechaTutoria" id="selectFechaTutoria" onChange={(e)=>this.setField(e)}></input>

                    <h2>Escoge la hora</h2>
                    <select id="selectHour" onChange={(e)=>this.setField(e)}>
                    	<option value="0:00">0:00</option>
                        <option value="1:00">1:00</option>
                        <option value="2:00">2:00</option>
                        <option value="3:00">3:00</option>
                        <option value="4:00">4:00</option>
                        <option value="5:00">5:00</option>
                        <option value="6:00">6:00</option>
                        <option value="7:00">7:00</option>
                        <option value="8:00">8:00</option>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                        
					</select>
                    
                    <div className="form-group">
                        <div className="form-group">
                        <Link to='/tutor' className="btn btn-default">Cancelar</Link>
                        <button type="submit" className="btn btn-default" id="submit" onClick={this.handleSubmit}>Guardar</button>

                        </div>
                    </div>
                </div>
                <div id="deleteTutoring" className="container mt-3">
                    <h2>Borrar tutoría</h2>
                    <table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Fecha</th>
						      <th scope="col">Tipo</th>
						      <th scope="col">Nota</th>
                              <th scope="col">Estudiante</th>
                              <th scope="col">Borrar</th>
						    </tr>
						  </thead>
						  <tbody>
						    
						      {this.state.tutorings.map(home => 
						    	<tr>
						    	<td>{home.date}</td>
						    	<td>{home.type_t}</td>
                                <td>{home.noteStudent}</td>
                                <td>{home.student.user.name} {home.student.user.lastname}</td>
						    	<td><button type="button" value={home.id} onClick={(e)=>this.removeScheduleEvent(e)}>Borrar</button></td>
                                <li value={home.id} id="liRemove"></li>
                              </tr>)}
						  </tbody>
						</table>
                        
                </div>
                <FooterTutor/>
      </div>
    )
  }
}
