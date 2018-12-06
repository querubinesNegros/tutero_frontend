import React, { Component,Fragment } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import {  Jumbotron, Grid, Row, Col, Image, Button, Table } from 'react-bootstrap';
import { MDBBtn } from "mdbreact";
import '../styles/Historial.css';
import { logPageView } from '../analytics';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import store from '../store';
import {Link } from 'react-router-dom';





export default class Historial extends Component{
    constructor(props){
        super(props);
        logPageView();
        //${}
        console.log()
        this.state={
            tutorias:[]
        }
       
      
    }
    componentDidMount(){
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem('jwtToken')}
       };
        
        axios.get(`${baseURL}/users/${localStorage.getItem('id')}/student/tutorings`,config)
        .then((response) => {
            //console.log(response.data.tutorings);
            this.setState({tutorias: response.data.tutorings});
        })
        .catch((error) => {
            console.log(error);
        });
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

botonVerNota = (e) =>{
    
}




onChange=(e)=>{
let files = e.target.files
//console.warn("datafile",files[0])
this.setState({
file:files[0]
});
}

    render() {
        var divStyle = {
            color:'black',
            padding: 25
          };
        const algo = this.state.tutorias;

        const ButtonPage = () => {
            return (
              <Fragment>
               
                <MDBBtn  onClick={this.botonVerNota} outline>Mostrar nota</MDBBtn>
                
              </Fragment>
            );
        }
        if(algo[0]!==undefined){
            /*console.log(algo[0].id)*/
        
            return (
                <div>
                    <Menu2/>

                    <Grid>
                        
                        {/*console.log(this.state.tutorias)*/}
                        {/*console.log(algo[0].id)*/}
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
                        {this.state.tutorias.map((tutoria)=>{
                            return(
                                
                                <tr key={tutoria.id}>
                                {console.log(tutoria)}
                                <td>{tutoria.id}</td>
                                <td>{tutoria.date}</td>
                                <td>{tutoria.type_t}</td>
                                <td>{tutoria.hour}</td>
                                <td>{tutoria.topic.name}</td>
                                <td><Link to='/vernota'><ButtonPage id={tutoria.id}/></Link></td>
                                </tr>                        
                            )})}
                             </tbody>
                            </Table>

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
        }else{
            return(<div></div>)
        }
    }
}