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
  	tutor : [],
  	arr: []
  }

  componentDidMount(){
  	
    axios.get(`${baseURL}/users/pages`)
      .then(res => {
        const pages = res.data.data;
        console.log(res);
        var i;
        var arr = [];
		for (i = 1; i <= pages; i++) {
    		arr[i] = i;
		}
        this.setState({arr});
      })
      .catch(error =>{
      console.log(error);
    });

    axios.get(`${baseURL}/users/page/1`)
      .then(res => {
        const tutor = res.data.profiles;
        console.log(tutor);
        this.setState({tutor});
      })
      .catch(error =>{
      console.log(error);
    });
    

  }

  setField (e) {
    if(e.target.id === 'selectPage'){
    	console.log(e.target.value);
      axios.get(`${baseURL}/users/page/${e.target.value}`)
      .then(res => {
        const tutor = res.data.profiles;
        console.log(res);
        this.setState({tutor});
      })
      .catch(error =>{
      console.log(error);
    });
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
                    	                    	                    	       
                    	<h3> Escoge la página </h3>
                    	<select id="selectPage" onChange={(e)=>this.setField(e)}>
                    	{this.state.arr.map(home => 
						    <option value={home}>{home}</option>
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