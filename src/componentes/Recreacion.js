import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import '../styles/Recreacion.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { logPageView } from '../analytics';
import { Carousel, CarouselInner, CarouselItem } from "mdbreact";
import axios from "axios";
import Corosuer from "./Corosuer";
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
                <div className="row justify-content-md-center">
                    <div className="col-md-8 mb-3">
                        <Corosuer images={this.state.recreations} type={1} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}