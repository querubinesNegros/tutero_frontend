import React, { Component } from 'react'
import Menu2 from './Menu2';
import '../styles/Servicios.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Servicio from './Servicio'
import Estudiante from './Estudiante'
import Perfil from './Perfil'
import baseURL from '../url';
import axios from 'axios';
    


export default class Servicios extends Component{

    state = {
        posts: [],
        arr: []
    }
    componentDidMount(){
        axios.get(`${baseURL}/posts/pages`)
            .then(res => {
                const pages = res.data.data;
                console.log(res);
                var i;
                var arr = [];
                for (i = 1; i <= pages; i++) {
                    arr[i] = i;
                }
                this.setState({arr});
            })
            .catch(error =>{
                console.log(error);
            }
        );
        axios.get(`${baseURL}/posts/page/1`)
          .then(res => {
       
            const posts = res.data.posts;
            console.log(posts);
            this.setState({posts});
          })
          .catch(error =>{
          console.log(error);
        });
    }

    render() {
        return (
            
            <div id="containerSer">
                
                <Menu2/>
                <h3> Escoge la página </h3>
                        <select id="selectPage" onChange={(e)=>this.setField(e)}>
                        {this.state.arr.map(home => 
                            <option value={home}>{home}</option>
                        )}
                        </select>
                <Grid className="grid">
                    <Row className="show-grid text-center">
                        
                    
                            
                                {this.state.posts.map(home => <Col xs={12} sm={4}>
                                    <h1>{home.name}</h1>
                                    <p className="text">{home.description}</p>
                                    <Link to={{pathname:`/servicio/${home.id}`, state:home}} >Servicio</Link>
                                    </Col>
                                )}
                                
                        
                        
                      
                    </Row>

                </Grid>
                
            </div>
            
        )
    }
}