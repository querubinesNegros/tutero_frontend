import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';
import { logPageView } from '../analytics';
import FooterAdmin from './FooterAdmin';

export default class AdminTutores extends Component{
  
  constructor(){
    super();
    logPageView();
  }

  state = {
  	tutor : [],
  	arr: []
  }

  componentDidMount(){
  	
	axios.get(`${baseURL}/careers`)
      .then(res => {
        const arr = res.data.careers;
        console.log(arr)
        this.setState({arr});
      })
      .catch(error =>{
      console.log(error);
    });
	let tutor = {}
    axios.get(`${baseURL}/tutors/career/all`)
      .then(res => {
		tutor = res.data.profiles;
		for (let index = 0; index < tutor.length; index++) {
			axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
			axios.get(`${baseURL}/users/${tutor[index].id}/tutor/score`)
			.then(res => {
				const arr2 = res.data;
				tutor[index].score = res.data.score
				tutor[index].hours = res.data.hours
				this.setState({tutor});
			})
			.catch(error =>{
			console.log(error);
			});
			
		}
        //this.setState({tutor});
      })
      .catch(error =>{
      console.log(error);
	});
	
    

  }

  setField (e) {
    if(e.target.id === 'selectCareer'){
		console.log(e.target.value);
		if(e.target.value=="0"){
			axios.get(`${baseURL}/tutors/career/all`)
			.then(res => {
				const tutor = res.data.profiles;
				console.log(res);
				for (let index = 0; index < tutor.length; index++) {
					axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
					axios.get(`${baseURL}/users/${tutor[index].id}/tutor/score`)
					.then(res => {
						const arr2 = res.data;
						tutor[index].score = res.data.score
						tutor[index].hours = res.data.hours
						this.setState({tutor});
					})
					.catch(error =>{
					console.log(error);
					});
					
				}
			})
			.catch(error =>{
			console.log(error);
			});
		}
		else {
			axios.get(`${baseURL}/tutors/career/${e.target.value}`)
			.then(res => {
				const tutor = res.data.profiles;
				console.log(res);
				for (let index = 0; index < tutor.length; index++) {
					axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
					axios.get(`${baseURL}/users/${tutor[index].id}/tutor/score`)
					.then(res => {
						const arr2 = res.data;
						tutor[index].score = res.data.score
						tutor[index].hours = res.data.hours
						this.setState({tutor});
					})
					.catch(error =>{
					console.log(error);
					});
					
				}
			})
			.catch(error =>{
			console.log(error);
			});
		}
      
      }
      
    }

  render() {
  	console.log(this.state);
    return (
      	<div>
      		<MenuAdmin/>
          	<div className="container mt-3">
          		<div className="row">

					<div className="col-md-12 text-center">
						
						<h3> Escoge la carrera </h3>
						<select id="selectCareer" onChange={(e)=>this.setField(e)}>
						<option value="0">All</option>
						{this.state.arr.map(home => 
							<option value={home.id}>{home.name}</option>
						)}
						</select>

					</div>
                	<div className="col-md-12 mt-3">
                    	
                    	<table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Id</th>
						      <th scope="col">Nombre</th>
						      <th scope="col">Apellido</th>
						      <th scope="col">Correo</th>
						       <th scope="col">Calificación Promedio</th>
							   <th scope="col">Horas trabajadas</th>
						       
						    </tr>
						  </thead>
						  <tbody>
						    
						      {this.state.tutor.map(home => 
						    	<tr><th scope="row">{home.id}</th>
						    	<td>{home.name}</td>
						    	<td>{home.lastname}</td>
						    	<td>{home.email}</td>
								<td>{home.score}</td>
								<td>{home.hours}</td>
						    
						    		</tr>)}

						    
						    
						  </tbody>
						</table>

                	</div>

                </div>
            </div>
        <FooterAdmin/>
		</div>
    )
  }
}