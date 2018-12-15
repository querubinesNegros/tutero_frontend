import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
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

export default class EstudianteEditarPerfil extends Component {
    constructor() {
        super();
        this.state = { id: null, passActual: null, passEdit: null, confirmPassEdit: null, cellphone: null };
        logPageView();
    }



    handleSubmit = (e) => {

        e.preventDefault();
        var user = {cellphone:""};
        var student = {pbm:0,stratus:0}

        user.cellphone = $('#cellphoneEdit').val();
        if($('#pbmEdit').val()==""){
            student.pbm = 0;
        }
        else{
            student.pbm = parseInt($('#pbmEdit').val());
        }
        if($('#stratusEdit').val()==""){
            student.stratus = 0;
        }
        else{
            student.stratus = parseInt($('#stratusEdit').val());
        }

        console.log(user)
        console.log(student)
        if (user.cellphone=="" && student.pbm==0 && student.age==0 && student.stratus==0) {
            swal("No se puede procesar la petición. Llene alguno de los campos.");
            return;
        }

        if(user.cellphone==""){
            if(student.pbm==0){
                student = {stratus:parseInt($('#stratusEdit').val())}
            }
            if(student.stratus==0){
                student = {pbm:parseInt($('#pbmEdit').val())}
            }
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.patch(`${baseURL}/users/${store.getState().id}/student`, { student })
            .then((response) => {
                swal("Se actualizó la información satisfactoriamente1");
                setTimeout(function () { window.location = `${baseURLFront}/estudiante/perfil`; }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else if(student.pbm==0 && student.stratus==0){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.patch(`${baseURL}/users/${store.getState().id}`, { user })
            .then((response) => {
                swal("Se actualizó la información satisfactoriamente2");
                setTimeout(function () { window.location = `${baseURLFront}/estudiante/perfil`; }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else{
            if(student.pbm==0){
                student = {stratus:parseInt($('#stratusEdit').val())}
                console.log(student)
            }
            if(student.stratus==0){
                student = {pbm:parseInt($('#pbmEdit').val())}
                console.log(student)
            }
            console.log(student)
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.patch(`${baseURL}/users/${store.getState().id}`, { user })
            .then((response) => {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                axios.patch(`${baseURL}/users/${store.getState().id}/student`, { student })
                .then((response) => {
                    swal("Se actualizó la información satisfactoriamente3");
                    setTimeout(function () { window.location = `${baseURLFront}/estudiante/perfil`; }, 1000);
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {


        return (
            <div>
                <Menu2 />



                <div className="container">


                    <h1 className="page-title">Edita tu perfil <span className="h1">{store.getState().name}</span></h1>




                    <Image src={localStorage.getItem('picture')} circle className="img-fluid rounded-circle hoverable" /><br></br>


                    <br></br>
                    
                    <div>
                        <h3>Edita tu celular:</h3>
                        <div className="form-group">
                            <input type="text" id="cellphoneEdit" placeholder={store.getState().cellphone}></input>

                        </div>
                    </div>
                    <div>
                        <h3>Edita tu PBM:</h3>
                        <div className="form-group">
                            <input type="text" id="pbmEdit" ></input>

                        </div>
                    </div>
                    <div>
                        <h3>Edita tu estrato:</h3>
                        <div className="form-group">
                            <input type="text" id="stratusEdit" ></input>

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <Link to='/estudiante/perfil' className="btn btn-default">Cancelar</Link>
                            <button type="submit" className="btn btn-default" id="submit" onClick={this.handleSubmit}>Guardar</button>

                        </div>
                    </div>
                </div>





                <Footer />
            </div>

        )
    }
}