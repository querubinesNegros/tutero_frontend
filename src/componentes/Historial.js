import React, { Component, Fragment } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import { Jumbotron, Grid, Row, Col, Image, Button, Table } from 'react-bootstrap';
import { MDBBtn, Badge } from "mdbreact";
import '../styles/Historial.css';
import { logPageView } from '../analytics';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import store from '../store';
import VerNota from './VerNota';


export default class Historial extends Component {
    constructor(props) {
        super(props);
        logPageView();
        //${}
        console.log()
        this.state = {
            tutorias: [],
            tutoria: null,
            nota: null
        }


    }
    componentDidMount() {
        var config = {
            headers: { 'Authorization': "bearer " + localStorage.getItem('jwtToken') }
        };

        axios.get(`${baseURL}/users/${localStorage.getItem('id')}/student/tutorings`, config)
            .then((response) => {
                //console.log(response.data.tutorings);
                this.setState({ tutorias: response.data.tutorings });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    botonVerNota = (e) => {
        //console.log("Cliqueaste el botón")
        console.log(e.target);
        this.setState({ tutoria: e.target.id, nota: e.target.notas });
    }

    onChange = (e) => {
        let files = e.target.files
        //console.warn("datafile",files[0])
        this.setState({
            file: files[0]
        });
    }
    votarEstrella = (e) => {
        console.log()
        console.log()
        var calificacion = e.target.id;
        const tutoring = {
            'score': calificacion
        };
        axios.patch(`${baseURL}/tutorings/${e.currentTarget.name}`, { tutoring })
            .then(function (res) {
                console.log(res.data);
                swal({ title: `Se ha calificado con ${calificacion} Estrellas`, timer: 1000, showConfirmButton: false });

            })
            .catch(function (error) {
                console.log(error);
            });

        setTimeout(function () { window.location.reload(1); }, 1000);



    }
    render() {
        var divStyle = {
            color: 'black',
            padding: 25
        };
        const algo = this.state.tutorias;


        if (algo[0] !== undefined) {
            if (this.state.tutoria === null) {
                return (
                    <div id="vistaTutor">
                        <Menu2 />
                        <Grid>
                            <p style={divStyle} className="h1"><strong>Historial Tutorias</strong></p>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>Tipo</th>
                                        <th>Hora</th>
                                        <th>Tema</th>
                                        <th>Nota Estudiante</th>
                                        <th>Nota Tutor</th>
                                        <th>Calificación</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tutorias.map((tutoria) => {
                                        return (

                                            <tr key={tutoria.id}>
                                                {console.log(tutoria)}
                                                <td>{tutoria.id}</td>
                                                <td>{tutoria.date}</td>
                                                <td>{tutoria.type_t}</td>
                                                <td>{tutoria.hour}</td>
                                                <td>{tutoria.topic.name}</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn onClick={this.botonVerNota} id={tutoria.id} outline>Seleccionar</MDBBtn>
                                                    </Fragment>
                                                </td>
                                                <td>{tutoria.noteTutor}</td>
                                                <td>
                                                    <div className="ec-stars-wrapper is-voted" >
                                                        <a id={1} title="Votar con 1 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={2} title="Votar con 2 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={3} title="Votar con 3 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={4} title="Votar con 4 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={5} title="Votar con 5 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                    </div><h5><Badge color="cyan darken-2">{tutoria.score}</Badge></h5> </td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Grid>
                        <Footer />
                    </div>
                )
            } else {
                return (
                    <div id="vistaTutor">
                        <Menu2 />
                        <Grid>
                            <p style={divStyle} className="h1"><strong>Historial Tutorias</strong></p>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>Tipo</th>
                                        <th>Hora</th>
                                        <th>Tema</th>
                                        <th>Nota Estudiante</th>
                                        <th>Nota Tutor</th>
                                        <th>Calificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tutorias.map((tutoria) => {
                                        return (

                                            <tr key={tutoria.id}>
                                                {console.log(tutoria)}
                                                <td>{tutoria.id}</td>
                                                <td>{tutoria.date}</td>
                                                <td>{tutoria.type_t}</td>
                                                <td>{tutoria.hour}</td>
                                                <td>{tutoria.topic.name}</td>
                                                <td><Fragment>
                                                    <MDBBtn onClick={this.botonVerNota} id={tutoria.id} outline>Seleccionar</MDBBtn>
                                                </Fragment>
                                                </td>
                                                <td>{tutoria.noteTutor}</td>
                                                <td>
                                                    <div className="ec-stars-wrapper is-voted" >
                                                        <a id={1} title="Votar con 1 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={2} title="Votar con 2 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={3} title="Votar con 3 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={4} title="Votar con 4 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                        <a id={5} title="Votar con 5 estrellas" name={tutoria.id} onClick={this.votarEstrella}>★</a>
                                                    </div><h5><Badge color="cyan darken-2">{tutoria.score}</Badge></h5>  </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Grid>
                        <VerNota id={this.state.tutoria} nota={this.state.nota} />
                        <Footer />
                    </div>
                )
            }
        } else {
            return (<div id="vistaTutor">
                <Menu2 />
                <div id="perfTutor" className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div style={{ height: 400, justifyContent: 'center', align: 'center' }}>
                            <br/>
                                <h1 >Aún no tienes tutorias</h1>
                                
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                <Footer />
            </div>)
        }
    }
}