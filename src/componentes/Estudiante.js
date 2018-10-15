import React, { Component } from 'react'
import Menu2 from './Menu2';
import {Link} from 'react-router-dom'
import '../styles/estudiante.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';

export default class Estudiante extends Component{
    state = {
        tutor : []
    }

    componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`${baseURL}/users/mytutor`)
      .then(res => {
        const tutor = res.data.data[0];
        this.setState({tutor});
        console.log(this.state+" dentro de componentDidMount");

      })
      .catch(function (error) {
      console.log(error);
    });
  }
    
    render() {
        console.log(store.getState())
        
        return (
            <div>
                <Menu2/>
                <Grid>
                    <Row className="show-grid text-center">
                      <Col xs={6} sm={4}>
                      </Col>
                      <Col xs={6} sm={4} className="person-wrapper">
                        <h1 className="h1Est">Su Tutor Es:</h1>
                        <br></br>
                        <Image src="/person-1.jpg" circle className="profile-pic"/>
                        <h3>{this.state.tutor.name} {this.state.tutor.lastname}</h3>
                        <h3>Correo: {this.state.tutor.email}</h3>
                        <h3>Cel: {this.state.tutor.cellphone} </h3>
                        <h3>El estudiante es :{store.getState().name} </h3>
                        
                      </Col>

                      
                    </Row>
                </Grid>
            </div>   
            
        )
    }
}