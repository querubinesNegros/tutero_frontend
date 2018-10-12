import React, { Component } from 'react'
import Menu2 from './Menu2';
import '../styles/Recreacion.css';
import { Jumbotron, Grid, Row, Col, Image, Button,Carousel } from 'react-bootstrap';
const pStyle = {
  
  };

export default class Recreacion extends Component{
    render() {
        return (
            <div>
                <Menu2/>
                <Grid className="gridRec">
                    <h1>Y en tus ratos libres...</h1>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="/baloncesto.png" alt="First slide"></img>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="/baloncesto.png" alt="Second slide"></img>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="/baloncesto.png" alt="Third slide"></img>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </Grid>
            </div>
        )
    }
}