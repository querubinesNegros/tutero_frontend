import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import swal from 'sweetalert2';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import '../styles/Perfil.css';
import baseURL from '../url';
import axios from 'axios';
import { logPageView } from '../analytics';


export default class Perfil extends Component {

    constructor() {
        super();
        logPageView();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('id')
        localStorage.removeItem('picture')
        swal({
            title: 'Vuelve pronto...', timer: 1000, showConfirmButton: false, onOpen: () => {
                swal.showLoading()
            }
        });
        setTimeout(function () { window.location.reload() }, 1000);
    }

    render() {
        console.log(store.getState())

        return (
            <div>
                <Menu2 />

                <div className="container">

                    <h1 className="page-title">Bienvenido  <span className="h1">{store.getState().name} a tu perfil</span></h1>

                    <Image src={localStorage.getItem('picture')} width="250px" circle className="img-fluid rounded-circle hoverable" />
                    <div className="form-group">

                        <h4 className="s-property-title">Nombre de usuario:</h4>
                        <label>{store.getState().name} {store.getState().lastname}</label>

                    </div>
                    <div className="form-group">
                        <h4 className="s-property-title">Correo electronico:</h4>
                        <label>{store.getState().email}</label>

                    </div>
                    <div className="form-group">
                        <h4 className="s-property-title">Celular:</h4>
                        <label>{store.getState().cellphone}</label>

                    </div>

                    <div className="form-group">
                        <div className="form-group">
                            <Link to='/estudiante/editarPerfil' className="btn btn-default">Editar perfil</Link>
                            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Logout</button>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        )
    }
}