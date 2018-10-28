import React, { Component } from 'react'
import Menu2 from './Menu2';
import {Link} from 'react-router-dom'
import swal from 'sweetalert2';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
//import '../styles/Perfil.css';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';

export default class EstudianteEditarPerfil extends Component{
    
    constructor() {
    super();
        this.state = { id: null, name: null, lastname: null, email: null, cellphone: null};
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();

        this.state.id = store.getState().id;
        const user ={
            'id': this.state.id,
            'name': this.state.name,
            'lastname': this.state.lastname,
            'email': this.state.email,
            'cellphone': this.state.cellphone
        };
        console.log(user);
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${this.state.id}`, {user})
            .then((response) => {
                   console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        setTimeout(function(){window.location = `${baseURLFront}/perfil`;}, 1000); 
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
        console.log(store.getState())
        
        return (
                    <div>
                        <Menu2/>
                        
                         
                                
                        <div className="container">
                            
                                                            
                            <h1 className="page-title">Edita tu perfil: <span className="orange strong">{store.getState().name}</span></h1>               
                                   
    
                           
                            <h3> <b>BIENVENIDO A</b> TU PERFIL <br /></h3> 
                            <Image src="/person-3.jpg"  circle className="profile-pic2"/>
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