import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';

export default class ObtenerUsers extends Component{
  
  state = {
  	tutor : []
  }
  handleSubmit = (e) =>{
    e.preventDefault()

    axios.get(`${baseURL}/users`)
      .then(res => {
        const tutor = res.data.data;
        console.log(tutor);
        this.setState({tutor});
      })
      .catch(error =>{
      console.log(error);
    });
    

  }


  render() {
  	console.log(this.state);
    return (
      	<div>
      		<MenuAdmin/>
          	<div className="container mt-3">
          		<div className="row">
					
					<div className="col-md-12 text-center">
                    	
                    	
                    	<button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Actualiza datos</button>

                	</div>
                	<div className="col-md-12 mt-3">
                    	
                    	<table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Id</th>
						      <th scope="col">Nombre</th>
						      <th scope="col">Apellido</th>
						      <th scope="col">Correo</th>
						       <th scope="col">Tipo</th>
						       
						    </tr>
						  </thead>
						  <tbody>
						    
						      {this.state.tutor.map(home => 
						    	<tr><th scope="row">{home.id}</th>
						    	<td>{home.name}</td>
						    	<td>{home.lastname}</td>
						    	<td>{home.email}</td>
						    	<td>{home.userable_type}</td>
						    
						    		</tr>)}

						    
						    
						  </tbody>
						</table>

                	</div>

                </div>
            </div>

		</div>
    )
  }
}