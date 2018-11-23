import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert2';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/Historial.css';
import { logPageView } from '../analytics';

export default class Historial extends Component{
    constructor(){
        super();
        logPageView();
    }
    onSubmit=(e)=>{
        e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append('path', this.state.file); 

          axios({
            method: 'post',
            url: `http://localhost:3000/pdfs`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
                swal({title:'Se ha subido correctamente', timer:1000, showConfirmButton:false, onOpen: () =>{
                    swal.showLoading()
                   }});
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

}
getPickerValue = (value) => {
    console.log(value);
}



onChange=(e)=>{
let files = e.target.files
//console.warn("datafile",files[0])
this.setState({
file:files[0]
});
}

    render() {
        
        return (
            <div>
                <Menu2/>

                <Grid>
                    <Row className="show-grid text-center">
                        <Col xs={6} sm={4}>
                        
                        </Col>
                        <Col xs={6} sm={4} className="person-wrapper">
                            <h1 className="h1His">Registros</h1>

                            <br></br>
                            <input type="file" name ="file" onChange={this.onChange}/>  
                            <br></br>
                            <br></br>

                            <button type="submit" className="btn btn-primary" onClick ={this.onSubmit}><i className="fa fa-envelope-o"  ></i> Crear recurso</button>
                        </Col>

                    
                    </Row>
                </Grid>
                <Footer/>
            </div>

            
        )
    }
}