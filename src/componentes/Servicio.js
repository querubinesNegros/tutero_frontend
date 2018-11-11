import React, { Component } from 'react'
import Menu2 from './Menu2';
import '../styles/Servicios.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import baseURL from '../url';
import axios from 'axios';
import { logPageView } from '../analytics';


export default class Servicio extends Component{

    constructor(){
        super();
        logPageView();
    }
    state = {
        urls : []
    }

    componentDidMount(){
        axios.get(`${baseURL}/posts/${this.props.location.state.id}/fileps`)
            .then(res => {
                const urls = res.data.fileps;
                this.setState({urls});
                
            })
            .catch(error =>{
                console.log(error);
            }
        );
    }

    render() {
    	console.log(this.state);
        return (
            <div id="containerSer">
                <Menu2/>
                <Grid>
                    <h1>{this.props.location.state.name}</h1>
                    <p>{this.props.location.state.description}</p>

                    {this.state.urls.map(home => 
                        <iframe src={`${baseURL}${home.filepable.path.url}`}
                            width="800px"
                            height="600px"/>
                    )}
                </Grid> 
            </div>
        )
    }
}