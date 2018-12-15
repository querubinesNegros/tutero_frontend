import React, { Component } from 'react'
import MenuTutor from './MenuTutor';
import FooterTutor from './FooterTutor';
import { Link } from 'react-router-dom'
import swal from 'sweetalert2';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
//import '../styles/Perfil.css';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import $ from 'jquery'
import { logPageView } from '../analytics';

export default class TutorEditarPerfil extends Component {

    constructor() {
        super();
        this.state = { id: null, passActual: null, passEdit: null, confirmPassEdit: null, cellphone: null };
        logPageView();
    }



    handleSubmit = (e) => {

        e.preventDefault();
        var user = {};
        var aux = { id: store.getState().id, password: this.state.passActual };

        if ($('#cellphoneEditDiv').css('display') == 'none' && $('#passEditDiv').css('display') == 'none') {
            swal("No se puede procesar la petición. Llene alguno de los campos.");
            return;
        }


        if ($('#cellphoneEditDiv').css('display') != 'none') {

            if (this.state.cellphone == null || this.state.cellphone == "") {

                swal("No se puede procesar la petición. Ingrese su nuevo celular");
                return;
            }
            user.cellphone = this.state.cellphone;
        }


        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${store.getState().id}`, { user })
            .then((response) => {
                swal("Se actualizó la información satisfactoriamente");
                setTimeout(function () { window.location = `${baseURLFront}/tutor`; }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });




    }
    setField(e) {

        if (e.target.id === 'cellphoneEdit') {
            this.setState({
                cellphone: e.target.value
            })
        }

    }

    render() {


        return (
            <div id="vistaTutor">
                <MenuTutor />



                <div id="perfTutor" className="container">


                    <h1 className="page-title">Edita tu perfil <span className="h1">{store.getState().name}</span></h1>




                    <Image src={localStorage.getItem('picture')} circle className="img-fluid rounded-circle hoverable" /><br></br>


                    <br></br>
                    <h3>Edita tu celular:</h3>
                    <div id="cellphoneEditDiv">
                        <div className="form-group">
                            <input type="text" id="cellphoneEdit" onChange={(e) => this.setField(e)} placeholder={store.getState().cellphone}></input>

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <Link to='/tutor' className="btn btn-default">Cancelar</Link>
                            <button type="submit" className="btn btn-default" id="submit" onClick={this.handleSubmit}>Guardar</button>

                        </div>
                    </div>
                </div>





                <FooterTutor />
            </div>

        )
    }
}