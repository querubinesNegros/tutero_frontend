import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import '../styles/estudiante.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {Animation} from 'mdbreact';

import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import { logPageView } from '../analytics';


export default class Estudiante extends Component{
    constructor() {
        super();
        this.state = {
            tutor : { name: "Sin", lastname: "Tutor asignado"}
        };
        logPageView();
      }
    

    componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`${baseURL}/users/mytutor`)
      .then(res => {
        const tutor = res.data.data[0];
        if(res.data.data[0]!== undefined)
        this.setState({tutor});

      })
      .catch(function (error) {
      console.log(error);
    });
  }
    
    render() {
        
        return (
            <div>
                <Menu2/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h1 className="h1Est">Su Tutor Es:</h1>
                            <Animation type="tada">
                                <Image src="/person-1.jpg" circle className="img-fluid rounded-circle hoverable"/>
                            </Animation>
                            <h3>{this.state.tutor.name} {this.state.tutor.lastname}</h3>
                            <h3>Correo: {this.state.tutor.email}</h3>
                            <h3>Cel: {this.state.tutor.cellphone} </h3>
                            <h3>El estudiante es :{store.getState().name} </h3>
                        </div>
                            
                        <div className="col-md-3"></div>
                    </div>
                       
                    
                    
                    
                </div>
                <Footer/>
               
                            
                        
                   
                   
               
                   
                
            </div>
            
        )
    }
}