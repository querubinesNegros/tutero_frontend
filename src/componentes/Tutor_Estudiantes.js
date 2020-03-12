import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import FooterTutor from './FooterTutor'
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, Table } from "mdbreact";
import $ from 'jquery'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2';


export default class Tutor_Estudiantes extends Component {

    constructor() {
        super();
        this.state = { students: [] };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(`${baseURL}/users/${store.getState().id}/tutor/students`)
            .then((response) => {
                const students = response.data.students;
                this.setState({ students });

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        swal("Se ha notificado satisfactoriamente");
        setTimeout(function () { window.location.reload(); }, 1000);
      } 


    state = {
    modal: false
    }
    
    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }
    render() {

        return (
            <div>
                <MenuTutor />
                
                <Table responsive className="table table-striped table-responsive-md btn-table">
                    <thead>
                        <tr>
                            <th><strong>Nombre</strong></th>
                            <th><strong>Correo</strong></th>
                            <th><strong>Celular</strong></th>
                            <th><strong>Edad</strong></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((home) => {
                            return (
                                <tr key={home.id}>
                                    {console.log(home)}

                                    <td>{home.user.name} {home.user.lastname}</td>
                                    <td>{home.user.email}</td>
                                    <td>{home.user.cellphone}</td>
                                    <td>{home.age}</td>
                                    <td>
                                        <MDBContainer>

                                            <MDBBtn type="button" color="btn btn-outline-danger waves-effect" onClick={this.toggle}>En riesgo de deserción</MDBBtn>
                                            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                                <MDBModalHeader toggle={this.toggle}>¿Cuál es la razón por la que el/la estudiante está en riesgo de deserción? </MDBModalHeader>
                                                <MDBModalBody>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlTextarea1">
                                                            Escriba acá su respuesta:
															</label>
                                                        <textarea
                                                            className="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            rows="5"
                                                        />
                                                    </div>
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.toggle}>Cerrar</MDBBtn>
                                                    <MDBBtn color="primary" onClick={this.handleSubmit}>Notificar</MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>
                                        </MDBContainer>
                                    </td>

                                </tr>

                            )
                        })}
                    </tbody>
                </Table>
                 
            <FooterTutor/>

            </div>
        )
    }
}
