import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import '../styles/Recreacion.css';
import { logPageView } from '../analytics';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import axios from "axios";
//import Corosuer from "./Corosuer";
import baseURL from "../url";

export default class Recreacion extends Component {

    constructor() {
        super();
        logPageView();
        this.state = { recreations: [] };
    }

    componentWillMount() {
        var config = {
            headers: { Authorization: "bearer " + localStorage.getItem("jwtToken") }
        };

        axios
            .get(`${baseURL}/recreations`, config)
            .then(response => {
                this.setState({ recreations: response.data.recreations });
                console.log(response.data.recreations);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Menu2 />
                <br></br>

                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://www.ucundinamarca.edu.co/images/bienestar/ampliacion-programas-se.jpg"
                                alt="First slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://www.ucundinamarca.edu.co/images/facultades/bienestar.jpg"
                                alt="Second slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://www.ucundinamarca.edu.co/images/biblioteca/2019/alianzas.jpg"
                                alt="Third slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}