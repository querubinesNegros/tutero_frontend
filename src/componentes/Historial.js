import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/Historial.css';
import { logPageView } from '../analytics';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import store from '../store';

const products = [];

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      Fecha: id,
      name: 'Problema ' + id,
      quality: i % 3
    });
  }
}

addProducts(10);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

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
          console.log(this.state.tutorias)
        return (
            <div>
                <Menu2/>

                <Grid>
                    {console.log(this.state.tutorias)}
                    <p style={divStyle} className="h1"><strong>Historial Tutorias</strong></p>
                    
                    <BootstrapTable data={ products }>
                        <TableHeaderColumn dataField='id' isKey>Fecha</TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>Problema</TableHeaderColumn>
                        <TableHeaderColumn dataField='quality' filterFormatted dataFormat={ enumFormatter }
                            formatExtraData={ qualityType } filter={ { type: 'SelectFilter', options: qualityType, defaultValue: 1 } }>Solución</TableHeaderColumn>
                    </BootstrapTable>
                    {this.state.tutorias.map((tutoria)=>{return(<div key={tutoria.id}>{tutoria.id} {tutoria.type_t} {tutoria.date} {tutoria.topic.name}</div>)})}
                    
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