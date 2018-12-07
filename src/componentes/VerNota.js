import React, { Component,Fragment } from 'react'
import { logPageView } from '../analytics';
import baseURL from '../url';
import swal from 'sweetalert2';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn, MDBCol } from "mdbreact";

export default class VerNota extends Component {
    constructor(props){
        super(props);
        logPageView();
        this.state ={comment:null,tutoria:null};
    }
    
    componentWillMount(){
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem('jwtToken')}
       };
        axios.get(`${baseURL}/tutorings/${this.props.id}`,config)
        .then((response) => {
            this.setState({tutoria: response.data.tutoring});
           
        })
        .catch((error) => {
            console.log(error);
        });
    }
    setField (e) {
        this.setState ({comment: e.target.value})
        console.log(this.state.comment)
        
    }
    actualizarDatos=(e)=>{
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem('jwtToken')}
       };
        axios.get(`${baseURL}/tutorings/${this.props.id}`,config)
        .then((response) => {
            this.setState({tutoria: response.data.tutoring});
           
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("hola")
    }
    botonGuardar = (e)=>{
        console.log("Cliqueaste el botón")
        const tutoring ={
            'noteStudent': this.state.comment
        };
        axios.patch(`${baseURL}/tutorings/${this.props.id}`, {tutoring})
          .then(function (res) {
            console.log(res.data);
            swal({title:'Se ha editado la Nota', timer:1000, showConfirmButton:false});
           
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({comment:""})
    }
    render(){
    
        var nota;

    if(this.state.tutoria!==null){if(this.state.tutoria.noteStudent==null){nota ='sin nota'}else{console.log(nota=this.state.tutoria.noteStudent)}}
    
        return(
            <div className="shadow-box-example z-depth-5 center-block">
                
                <MDBContainer>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <MDBCard style={{ width: "50rem", marginTop: "1rem"}}>
                            <MDBCardBody>
                            <MDBCardTitle>Nota {this.props.id}</MDBCardTitle>
                            <MDBCardText>
                                {nota}
                            </MDBCardText>
                            <MDBBtn color="primary" onClick={this.actualizarDatos}>Cargar nota</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    
                    <div className="form-group">
                        <label >Agregar nota:</label>
                        <textarea className="form-control" onChange={(e)=>this.setField(e)} rows="5" id="comment"></textarea>
                        <Fragment>
                            <MDBBtn onClick={this.botonGuardar} color="info">Editar Nota</MDBBtn>    
                        </Fragment>
                    </div>
                    
                </MDBContainer>
            </div>
        )
    }
}

