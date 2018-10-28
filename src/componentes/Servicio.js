import React, { Component } from 'react'
import Menu2 from './Menu2';
import '../styles/Servicios.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';



export default class Servicio extends Component{

    render() {
    	console.log(this.props);
        return (
            <div id="containerSer">
                <Menu2/>
                <h1>{this.props.location.state.name}</h1>
                <p>{this.props.location.state.description}</p>
            </div>
        )
    }
}