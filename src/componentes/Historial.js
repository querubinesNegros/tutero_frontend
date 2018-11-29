import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import { Jumbotron, Grid, Row, Col, Image, Button, Table } from 'react-bootstrap';
import '../styles/Historial.css';
import { logPageView } from '../analytics';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import store from '../store';

const products = [];

const qualityType = {
  0: 'good',
  1: 'Bad',
  2: 'unknown'
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % 3
    });
  }
}

addProducts(5);

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
        const algo = this.state.tutorias;
        
        if(algo[0]!==undefined){
            console.log(algo[0].id)
        
            return (
                <div>
                    <Menu2/>

                    <Grid>
                        
                        {console.log(this.state.tutorias)}
                        {console.log(algo[0].id)}
                        <p style={divStyle} className="h1"><strong>Historial Tutorias</strong></p>
                        
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Tipo</th>
                                <th>Hora</th>
                                <th>Tema</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{algo[0].id}</td>
                                <td>{algo[0].date}</td>
                                <td>{algo[0].type_t}</td>
                                <td>{algo[0].hour}</td>
                                <td>{algo[0].topic.name}</td>

                                </tr>
                                <tr>
                                <td>{algo[1].id}</td>
                                <td>{algo[1].date}</td>
                                <td>{algo[1].type_t}</td>
                                <td>{algo[1].hour}</td>
                                <td>{algo[1].topic.name}</td>

                                </tr>
                                
                            </tbody>
                            </Table>
                        {this.state.tutorias.map((tutoria)=>{
                            return(
                                <div>
                                    <div>{console.log(tutoria)}</div>

                                    <BootstrapTable data={ products }>
                                        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField='quality' filterFormatted dataFormat={ enumFormatter } formatExtraData={ qualityType }
                                        filter={ { type: 'SelectFilter', options: qualityType } }>Product Quality</TableHeaderColumn>
                                    </BootstrapTable>  
                                 
                                </div>  
                                
                        
                            )})}
                        

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