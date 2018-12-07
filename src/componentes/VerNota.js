import React, { Component,Fragment } from 'react'
import { logPageView } from '../analytics';
import { MDBBtn } from "mdbreact";
import baseURL from '../url';
import swal from 'sweetalert2';
import axios from 'axios';

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
    }
    render(){
    
        var nota;

    if(this.state.tutoria!==null){if(this.state.tutoria.noteStudent==null){console.log('sin nota')}else{console.log(this.state.tutoria.noteStudent)}}
    
        return(
            <div>
                <div>Esta es la tutoría {this.props.id} y la nota es: {nota}</div>
                <h1>Agregar Nota</h1>
                <div className="form-group">
                    <label >Agregar nota:</label>
                    <textarea className="form-control" onChange={(e)=>this.setField(e)} rows="5" id="comment"></textarea>
                    <Fragment>
                        <MDBBtn onClick={this.botonGuardar} color="info">Info</MDBBtn>    
                    </Fragment>
                </div>
            </div>
        )
    }
}

