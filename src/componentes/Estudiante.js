import React, { Component } from 'react'
import Menu2 from './Menu2';
import {Link} from 'react-router-dom'
import '../styles/estudiante.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';

export default class Estudiante extends Component{
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
                        <h3>Frank</h3>
                        <h3>Correo: frank@unal.edu.co</h3>
                        <h3>Cel: 3152362451 </h3>
                        <h3>El estudiante es :{store.getState().name} </h3>
                      </Col>
                      
                    </Row>
                </Grid>
            </div>   
            
        )
    }
}