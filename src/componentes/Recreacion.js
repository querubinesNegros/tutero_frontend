import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import '../styles/Recreacion.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { logPageView } from '../analytics';
import { Carousel, CarouselInner, CarouselItem } from "mdbreact";

export default class Recreacion extends Component{

    constructor(){
        super();
        logPageView();
    }

    render() {
        return (
            <div>
                <Menu2/>
                <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} thumbnails className="z-depth-1">
                    <CarouselInner>
                    <CarouselItem itemId="1">
                        <img className="d-block w-100" src="http://bienestar.bogota.unal.edu.co/ADJUNTOS/c56_2609181224_adj_cvc.jpg" alt="First slide" />
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <img className="d-block w-100" src="http://bienestar.bogota.unal.edu.co/ADJUNTOS/e8a_2708181236_adj_cvc.png" alt="Second slide" />
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <img className="d-block w-100" src="/karaoke.png" alt="Third slide" />
                    </CarouselItem>
                    </CarouselInner>
                </Carousel>
                <Footer/>
            </div>
        )
    }
}