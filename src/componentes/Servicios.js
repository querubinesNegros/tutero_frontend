import React, { Component } from 'react'
import Menu2 from './Menu2';
import '../styles/Servicios.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';



export default class Servicios extends Component{
    render() {
        return (
            <div id="containerSer">
                <Menu2/>
                <Grid className="grid">
                    <Row className="show-grid text-center">
                        
                        <Col xs={12} sm={4}>
                            <div className="column">
                                <h1>Grupos de Estudio</h1>
                                <a href="/person-3.jpg" target="_blank">
                                <img src="/person-3.jpg" class="img-fluid" alt="Responsive image"></img>
                                </a>
                                <p className="text">Los grupos de estudio, son grupos donde estudiantes se reunen junto con profesores para invertigar sobre un tema de interés y profundizar en él</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} >
                            <div className="column">
                                <h1>Grupos de Estudio</h1>
                                <a href="/person-3.jpg" target="_blank">
                                <img src="/person-3.jpg" class="img-fluid" alt="Responsive image"></img>
                                </a>
                                <p className="text">Los grupos de estudio, son grupos donde estudiantes se reunen junto con profesores para invertigar sobre un tema de interés y profundizar en él</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} >
                            <div className="column">
                                <h1>Grupos de Estudio</h1>
                                <a href="/person-3.jpg" target="_blank">
                                <img src="/person-3.jpg" class="img-fluid" alt="Responsive image"></img>
                                </a>
                                <p className="text">Los grupos de estudio, son grupos donde estudiantes se reunen junto con profesores para invertigar sobre un tema de interés y profundizar en él</p>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row className="show-grid text-center">
                      <Col xs={12} sm={4}>

                            <div className="column2">
                                <h1>Grupos de Estudio</h1>
                                <a href="/person-3.jpg" target="_blank">
                                <img src="/person-3.jpg" class="img-fluid" alt="Responsive image"></img>
                                </a>
                                <p className="text">Los grupos de estudio, son grupos donde estudiantes se reunen junto con profesores para invertigar sobre un tema de interés y profundizar en él</p>
                            </div>
                      </Col>
                      <Col xs={12} sm={4} >

                            <div className="column2">
                                <h1>Grupos de Estudio</h1>
                                <a href="/person-3.jpg" target="_blank">
                                <img src="/person-3.jpg" class="img-fluid" alt="Responsive image"></img>
                                </a>
                                <p className="text">Los grupos de estudio, son grupos donde estudiantes se reunen junto con profesores para invertigar sobre un tema de interés y profundizar en él</p>
                            </div>
                      </Col>
                      <Col xs={12} sm={4} >

                            <div className="column2">
                                <h1>Grupos de Estudio</h1>
                                <a href="/person-3.jpg" target="_blank">
                                <img src="/person-3.jpg" class="img-fluid" alt="Responsive image"></img>
                                </a>
                                <p className="text">Los grupos de estudio, son grupos donde estudiantes se reunen junto con profesores para invertigar sobre un tema de interés y profundizar en él</p>
                            </div>
                      </Col>
                      
                    </Row>
                </Grid>
            </div>
        )
    }
}