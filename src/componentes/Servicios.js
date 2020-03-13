import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import '../styles/Servicios.css';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { logPageView } from '../analytics';


export default class Servicios extends Component {
    constructor() {
        super();
        logPageView();
    }

    render() {

        return (

            <div id="containerSer">
                <Menu2 />
                <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody className="text-center">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Publicaciones
                    </h2>
                    <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                        </MDBView>
                        <div className="pink-text">
                        <h6 className="font-weight-bold mb-3">
                            <MDBIcon icon="map" className="pr-2" />
                            Finaciación
                        </h6>
                        </div>
                        <h4 className="font-weight-bold mb-3">
                        <strong>fraccionamiento</strong>
                        </h4>
                        <p className="dark-grey-text">
                          Apoyo Financiero Estudiantes
                        </p>
                        <MDBBtn href = 'https://www.ucundinamarca.edu.co/images/ucundinamarca/fraccionamiento-matricula-2020-1.jpg' color="pink" rounded size="md">
                          Abrir
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                        </MDBView>
                        <div className="deep-orange-text">
                        <h6 className="font-weight-bold mb-3">
                            <MDBIcon icon="graduation-cap" className="pr-2" />
                            Educación
                        </h6>
                        </div>
                        <h4 className="font-weight-bold mb-3">
                        <strong>Reglamentación</strong>
                        </h4>
                        <p className="dark-grey-text">
                        Acuerdo 010 del 12 de julio de 2006
                        </p>
                        <MDBBtn href = '/acuerdo.pdf' color="deep-orange" rounded size="md">
                        Abrir
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                        </MDBView>
                        <div className="blue-text">
                        <h6 className="font-weight-bold mb-3">
                            <MDBIcon icon="fire" className="pr-2" />
                            Bibliotecas
                        </h6>
                        </div>
                        <h4 className="font-weight-bold mb-3">
                        <strong>Bibliotecas</strong>
                        </h4>
                        <p className="dark-grey-text">
                        Encuentre el libro que está buscando...
                        </p>
                        <MDBBtn href = 'https://www.ucundinamarca.edu.co/biblioteca/'color="info" rounded size="md">
                        Abrir
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                </MDBCard>
                <Footer />
            </div>

        )
    }
}