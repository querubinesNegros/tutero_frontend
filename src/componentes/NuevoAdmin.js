import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';

export default class NuevoAdmin extends Component{
   state = {

   }

    componentDidMount(){
    	axios.post(`${baseURL}/admins`,{})
    		.then( (res) => {
      		this.setState({userable_id:res.data.id});
    	})
    	.catch( (error) => {
      		console.log(error);
    	});

    	console.log(this.state);
    	

    }
  
    handleSubmit = (e) =>{
        e.preventDefault();


        

    	console.log(this.state);
    	const user ={
            
            'name': this.state.name,
            'lastname': this.state.lastname,
            'email': this.state.email,
            'cellphone': this.state.cellphone,
            'userable_type': 'Admin',
            'userable_id':this.state.userable_id

        };
        console.log(user);
       	axios.post(`${baseURL}/users/create`, {user})
			    .then(function (res) {
			      console.log(res.data);
			    })
			    .catch(function (error) {
			      console.log(error);
			    });
 		console.log(user);
        
        
        


        
    }
    setField (e) {
    if(e.target.id === 'nameEdit'){
      this.setState({
        name: e.target.value
      })
      }
      if(e.target.id === 'lastnameEdit'){
      this.setState({
        lastname: e.target.value
      })
      }
      if(e.target.id === 'emailEdit'){
      this.setState({
        email: e.target.value
      })
      }
      if(e.target.id === 'cellphoneEdit'){
      this.setState({
        cellphone: e.target.value
      })
      }
      console.log(this.state.name);
      console.log(this.state.lastname);
      console.log(this.state.email);
      console.log(this.state.cellphone);
    }



  render() {
    return (
      	<div>
      		<MenuAdmin/>
          	<div className="container">
                            
                                                            
                <h1 className="page-title">Agrega un nuevo admin </h1>               
                                                
                <div className="form-group">
                           
                	<h4 className="s-property-title">Nombre:</h4>
                    <input type="text" id="nameEdit" onChange={(e)=>this.setField(e)}  placeholder={store.getState().name}></input>
                           
                </div>
                <div className="form-group">
                           
                	<h4 className="s-property-title">Apellido:</h4>
                    <input type="text" id="lastnameEdit" onChange={(e)=>this.setField(e)} placeholder={store.getState().lastname}></input>
                           
                </div>
                <div className="form-group">
                    <h4 className="s-property-title">Correo electronico:</h4>
                    <input type="text" id="emailEdit" onChange={(e)=>this.setField(e)} placeholder={store.getState().email}></input>

                </div> 
                <div className="form-group">
                    <h4 className="s-property-title">Celular:</h4>
                    <input type="text" id="cellphoneEdit" onChange={(e)=>this.setField(e)} placeholder={store.getState().cellphone}></input>

                </div> 
                
                <div className="form-group">
                    <div className="form-group">
                    	<Link to='/perfil' className="btn btn-default">Cancelar</Link>
                    	<button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Guardar</button>

                	</div>
                </div>
            </div>
		</div>
    )
  }
}