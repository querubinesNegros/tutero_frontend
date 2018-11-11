import React, { Component } from 'react'
import Menu2 from './Menu2';
import {Link} from 'react-router-dom'
import '../styles/estudiante.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
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
               
               
                <div>
                    <div id="view" >
                    {/* Mask & flexbox options*/}
                    <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
                        {/* Content */}
                        <div className="container">
                        {/*Grid row*/}
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <h1 className="h1Est">Su Tutor Es:</h1>
                                <br></br>
                                <Image src="/person-1.jpg" circle className="profile-pic"/>
                                <h3>{this.state.tutor.name} {this.state.tutor.lastname}</h3>
                                <h3>Correo: {this.state.tutor.email}</h3>
                                <h3>Cel: {this.state.tutor.cellphone} </h3>
                                <h3>El estudiante es :{store.getState().name} </h3>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        {/*Grid row*/}
                        </div>
                        {/* Content */}
                    </div>
                    {/* Mask & flexbox options*/}
                    </div>
                    {/* Full Page Intro */}
                    {/* Main navigation */}
                    {/*Main Layout*/}
                    <main>
                    <div className="container">
                        {/*Grid row*/}
                        <div className="row py-5">
                        {/*Grid column*/}
                        
                        {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </div>
                    </main>
                    {/*Main Layout*/}
                </div>
                
            </div>   
            
        )
    }
}