import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import '../styles/estudiante.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {Animation, MDBIcon, MDBContainer, MDBCard, MDBCardTitle,MDBCardText} from 'mdbreact';
import Disponibilidad from './Steps/Disponibilidad'

import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import { logPageView } from '../analytics';
import {Redirect} from 'react-router-dom';


export default class Estudiante extends Component{
    constructor() {
        super();
        this.state = {
            tutor : { name: "Sin", lastname: "Tutor asignado", pict: null , tutor_id: null , showDisp: false}
        };
        logPageView();
        this.changeView = this.changeView.bind(this)
      }
    

    componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`${baseURL}/users/mytutor`)
      .then(res => {
        const tutor = res.data.data[0];
        console.log(res);
        if(res.data.data[0]!== undefined)
        this.setState({tutor, pict: tutor.pict});

      })
      .catch(function (error) {
      console.log(error);
    });
     
  }
  changeView(){
      const dsp = this.state.showDisp
      this.setState({showDisp: !dsp})

  }
    
    render() {
        const type = localStorage.getItem('type')
        if (type != "Student"){
            alert("Acceso no autorizado")
            return  <Redirect push to = '/' />
        }
        const image = this.state.pict
        let show;
        if(image != null){
            show = image
            
        }else{
            show = "/person-1.jpg"
        }
        let disp = null
        const tid = this.state.tutor.id
        const ver_disp = this.state.showDisp;
        let str = ""
        if (ver_disp){
            disp =  <Disponibilidad isSet = {false} tutor_id = {tid}/>
            str = "Ocultar"
        } 
        else { 
            str = "Mostrar horario del tutor";
            disp = null; 
        } 
        return (
            <div>
                <Menu2 pict= {this.state.pict}/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h1 className="h1Est">Su Tutor Es:</h1>
                            {console.log(this.state.tutor)}
                            <Animation type="tada">
                                <Image src={show} circle className="img-fluid rounded-circle hoverable"/>
                            </Animation>
                            <h3>{this.state.tutor.name} {this.state.tutor.lastname}</h3>
                            <h3>Correo: {this.state.tutor.email}</h3>
                            
                            <MDBContainer style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                                    <MDBCardTitle>Solicita una tutoria al:</MDBCardTitle>
                                    <MDBCardText>
                                    <h3><MDBIcon icon="whatsapp wh " size="lg" className="green-text pr-3" /> {this.state.tutor.cellphone} </h3>

                                    </MDBCardText>
                                    
                                </MDBCard>
                            </MDBContainer>
                            <br/>
                            <button type="button" class="btn btn-elegant btn-sm" onClick = {this.changeView} >{str} </button>

                        </div>
                            
                        <div className="col-md-3"></div>
                    </div>

                       
                    
                    
                    
                </div>
                {disp}
                <Footer/>
               
                            
               
                  
                   
                   
               
                   
                
            </div>
            
        )
    }
}