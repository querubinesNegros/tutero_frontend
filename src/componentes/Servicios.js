import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import '../styles/Servicios.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Servicio from './Servicio'
import Estudiante from './Estudiante'
import Perfil from './Perfil'
import baseURL from '../url';
import axios from 'axios';
import { logPageView } from '../analytics';
    


export default class Servicios extends Component{
    constructor(){
        super();
        logPageView();
    }
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

    setField (e) {
    if(e.target.id === 'selectPage'){
        console.log(e.target.value);
      axios.get(`${baseURL}/posts/page/${e.target.value}`)
      .then(res => {
        const posts = res.data.posts;
        console.log(res);
        this.setState({posts});
      })
      .catch(error =>{
      console.log(error);
    });
      }
      
    }

    render() {
        return (
            
            <div id="containerSer">
                
                <Menu2/>
                
                <Grid className="grid">
                    <Row className="show-grid text-center">
                        <h3> Escoge la página </h3>
                            <select id="selectPage" onChange={(e)=>this.setField(e)}>
                            {this.state.arr.map(home => 
                                <option key={home} value={home}>{home}</option>
                            )}
                            </select>
                    </Row>
                    <Row className="show-grid text-center" >
                        
                    
                            
                                {this.state.posts.map(home => <Col xs={12} sm={4} id="servUnique">
                                    <h1>{home.name}</h1>
                                    <p id="textServ" className="text">{home.description}</p>
                                    <Link to={{pathname:`/servicio/${home.id}`, state:home}} >Servicio</Link>
                                    </Col>
                                )}
                                
                        
                        
                      
                    </Row>

                </Grid>
                
                <Footer/>
                
            </div>
            
        )
    }
}