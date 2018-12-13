import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, View, MDBView } from 'mdbreact';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import { logPageView } from '../analytics';
import '../styles/Gallery.css';
import { Carousel } from 'react-responsive-carousel';


export default class CrearRecreacion extends Component {
    constructor(props){
        super(props);
        logPageView();
        this.state ={nombre:null, recreations: []};
    }

    componentWillMount(){
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem('jwtToken')}
       };
        
        axios.get(`${baseURL}/recreations`,config)
        .then((response) => {
            
            this.setState({recreations: response.data.recreations});
            console.log(response.data.recreations);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onSubmit=(e)=>{
        e.preventDefault();

        console.log("Espichaste el botón")
        var bodyFormData = new FormData();
        bodyFormData.append('path', this.state.file); 
        bodyFormData.append('name', this.state.nombre); 

          axios({
            method: 'post',
            url: `${baseURL}/recreations`,
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

    onChange=(e)=>{
        let files = e.target.files
        console.warn("datafile",files[0])
        this.setState({
        file:files[0]
        });
    }

    setField (e) {
        this.setState ({nombre: e.target.value})
        console.log(this.state.nombre)
        
    }
    
    render() {
        return (
            <div >
                <MenuAdmin />
               
                <p>ESTAS EN CREAR RECREACION</p>
                
                {this.state.recreations.map((recreaciones)=>{
                     return(
                        <div key={recreaciones.id}>
                        <img src={recreaciones.path.url} />
                        <p className="legend">Legend 1</p>
                    </div>    
                     )})}
                  
                <MDBContainer style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <MDBRow>
                        <MDBCol md="12">
                        <form>
                            <p className="h4 text-center py-4">Agregar Recreación</p>
                            <label
                            htmlFor="defaultFormCardNameEx"
                            className="grey-text font-weight-light"
                            >
                            Nombre
                            </label>
                            <input
                            type="text"
                            id="defaultFormCardNameEx"
                            className="form-control"
                            onChange={(e)=>this.setField(e)}
                            />
                            <br />
                            <label
                            htmlFor="defaultFormCardEmailEx"
                            className="grey-text font-weight-light"
                            >
                            Elije un archivo
                            </label>
                            <input
                            type="file"
                            id="defaultFormCardEmailEx"
                            className="form-control"
                            onChange={this.onChange}
                            />
                            <div className="text-center py-4 mt-3">
                            <MDBBtn className="btn btn-outline-purple" type="submit" onClick ={this.onSubmit}>
                                Enviar
                                <MDBIcon icon="paper-plane-o" className="ml-2" />
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </div >
        )
    }
}