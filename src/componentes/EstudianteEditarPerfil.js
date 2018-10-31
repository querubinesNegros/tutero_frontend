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
import $ from 'jquery'

export default class EstudianteEditarPerfil extends Component{
    
    constructor() {
    super();
        this.state = { id: null, passActual: null, passEdit: null, confirmPassEdit: null, cellphone: null};
    }
    
    componentDidMount(){
        var _self = this;
        $('#cellphoneEditDiv').css('display','none');
        $('#passEditDiv').css('display','none');
        $('#cellphoneEditButton').on('click',function(){
            $('#cellphoneEditDiv').slideToggle();
            $('#cellphoneEdit').val("");
            _self.state={ id: null, passActual: null, passEdit: null, confirmPassEdit: null, cellphone: null};
        });
        $('#passEditButton').on('click',function(){
            $('#passEditDiv').slideToggle();
            $('#passEdit').val("");
            $('#passActual').val("");
            $('#confirmPassEdit').val("");
            _self.state={ id: null, passActual: null, passEdit: null, confirmPassEdit: null, cellphone: null};
        });
        
    }
    
    handleSubmit = (e) =>{
        
        e.preventDefault();
        var user = {id: null, password: null, cellphone: null};
        user.id = store.getState().id;

        if($('#cellphoneEditDiv').css('display')=='none' && $('#passEditDiv').css('display')=='none'){
            swal("No se puede procesar la petición. Llene alguno de los campos.");
            console.log("ambos none");
            return;
        }
        if($('#cellphoneEditDiv').css('display')!='none'){
            console.log("pass none");
            if(this.state.cellphone==null || this.state.cellphone==""){

                swal("No se puede procesar la petición. Ingrese su nuevo celular");
                return;
            }
            user.cellphone = this.state.cellphone;
        }
        if($('#passEditDiv').css('display')!='none'){
            console.log("cellphone none");
            if(this.state.passActual==null || this.state.passActual==""){
                swal("No se puede procesar la petición. Ingrese su contraseña actual");
                return;
            }
            if(this.state.passEdit==null || this.state.passEdit==""){
                swal("No se puede procesar la petición. Ingrese su nueva contraseña");
                return;
            }
            if(this.state.passEdit != this.state.confirmPassEdit){
                swal("No se puede procesar la petición. Las contraseñas no coinciden");
                return;
            }
            user.password = this.state.passEdit;
        }

        console.log(user);
        
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${this.state.id}`, {user})
            .then((response) => {
                   console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        setTimeout(function(){window.location = `${baseURLFront}/perfil`;}, 30000); 
    
    }
    setField (e) {
    if(e.target.id === 'passActual'){
      this.setState({
        passActual: e.target.value
      })
      }
      if(e.target.id === 'passEdit'){
      this.setState({
        passEdit: e.target.value
      })
      }
      if(e.target.id === 'confirmPassEdit'){
        this.setState({
          confirmPassEdit: e.target.value
        })
        }
      if(e.target.id === 'cellphoneEdit'){
      this.setState({
        cellphone: e.target.value
      })
      }
      console.log(this.state.passActual);
      console.log(this.state.passEdit);
      console.log(this.state.confirmPassEdit);
      console.log(this.state.cellphone);
    }

    render() {
       
        
        return (
                    <div>
                        <Menu2/>
                        
                         
                                
                        <div className="container">
                            
                                        
                            <h1 className="page-title">Edita tu perfil: <span className="orange strong">{store.getState().name}</span></h1>               
                                   
    
                           
                            
                            <Image src="/person-3.jpg"  circle className="profile-pic2"/><br></br>
                            <p>Todos los campos que despliegues son obligatorios. Si no quieres editar todo, oculta con el botón aquel campo que no quieres editar.</p>
                            <button type="button" id="passEditButton">Edita tu contraseña:</button> 
                            <div id="passEditDiv" >
                                <div className="form-group ">       
                                                            
                                    <h4 className="s-property-title">Contraseña actual</h4>                                
                                    <input type="password" id="passActual" onChange={(e)=>this.setField(e)} ></input>
                                        
                                </div>
                                <div className="form-group">
                                        
                                    <h4 className="s-property-title">Contraseña nueva:</h4>
                                    <input type="password" id="passEdit" onChange={(e)=>this.setField(e)}></input>
                                        
                                </div>
                                <div className="form-group">
                                        
                                    <h4 className="s-property-title">Confirma Contraseña nueva:</h4>
                                    <input type="password" id="confirmPassEdit" onChange={(e)=>this.setField(e)}></input>
                                        
                                </div>
                            </div>
                            <br></br>
                            <button type="button" id="cellphoneEditButton">Edita tu celular:</button> 
                            <div id="cellphoneEditDiv">
                                <div className="form-group">
                                    <input type="text" id="cellphoneEdit" onChange={(e)=>this.setField(e)} placeholder={store.getState().cellphone}></input>

                                </div> 
                            </div>
                            <div className="form-group">
                                <div className="form-group">
                                <Link to='/perfil' className="btn btn-default">Cancelar</Link>
                                <button type="submit" className="btn btn-default" id="submit" onClick={this.handleSubmit}>Guardar</button>

                            </div>
                            </div>
                        </div>
                                  
                        
                        
                    
                    
               
            </div>   
            
        )
    }
}