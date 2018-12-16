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
import {Redirect} from 'react-router-dom';


export default class Estudiante extends Component{
    constructor() {
        super();
        this.state = {
            tutor : { name: "Sin", lastname: "Tutor asignado", pict: null }
        };
        logPageView();
      }
    

    componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`${baseURL}/users/mytutor`)
      .then(res => {
        const tutor = res.data.data[0];
        console.log(res);
        if(res.data.data[0]!== undefined)
        this.setState({tutor});

      })
      .catch(function (error) {
      console.log(error);
    });
     
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
            show = this.state.pict
            
        }else{
            show = "/person-1.jpg"
        }
        
        return (
            <div>
                <Menu2/>
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
                            <h3>Cel: {this.state.tutor.cellphone} </h3>

                            
                        </div>
                            
                        <div className="col-md-3"></div>
                    </div>
                       
                    
                    
                    
                </div>
                <Footer/>
               
                            
                        
                   
                   
               
                   
                
            </div>
            
        )
    }
}