import React, { Component } from 'react'
import Menu2 from './Menu2';
import {Link} from 'react-router-dom'
import swal from 'sweetalert2';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import '../styles/Perfil.css';
import baseURL from '../url';
import axios from 'axios';

export default class Perfil extends Component{
    
    handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.removeItem('jwtToken')
        swal({title:'Vuelve pronto...', timer:1000, showConfirmButton:false, onOpen: () =>{
           swal.showLoading()
         }});
        setTimeout(function(){window.location.reload()},1000);
    }

    render() {
        console.log(store.getState())
        
        return (
                    <div>
                        <Menu2/>
                        
                         
                                
                        <div className="container">
                            
                                                            
                            <h1 className="page-title">Bienvenido : <span className="orange strong">{store.getState().name}</span></h1>               
                                   
    
                           
                            <h3> <b>BIENVENIDO A</b> TU PERFIL <br /></h3> 
                            <div className="form-group">
                                       
                            <h4 className="s-property-title">Nombre de usuario:</h4>
                                        <label>{store.getState().name}</label>

                            </div>
                            <div className="form-group">
                                <h4 className="s-property-title">Correo electronico:</h4>
                                            <label>{store.getState().email}</label>
   
                            </div> 
                            <div className="form-group">
                                <div className="form-group">
                                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Logout</button>

                            </div>
                            </div>
                        </div>
                                  
                        
                        
                    
                    
               
            </div>   
            
        )
    }
}