import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import $ from 'jquery'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2';
import FooterTutor from './FooterTutor'
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

    render() {

        return (
            <div id="vistaTutor">
                <MenuTutor />
                {this.state.students.map(home =>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {home.user.name} {home.user.lastname}</h5>
                            <h5 className="card-text">Correo: {home.user.email}</h5>
                            <p className="card-text">Celular: {home.user.cellphone}</p>
                            <p className="card-text">Edad: {home.age}</p>

                        </div>
                    </div>

                )}
                <FooterTutor/>
            </div>
        )
    }
}
