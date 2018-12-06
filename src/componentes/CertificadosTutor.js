import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import $ from 'jquery'
import {Link} from 'react-router-dom'


export default class CertificadosTutor extends Component {

  constructor() {
    super();
    this.state = {      
      loading: false
    };
  }


  generarCertificado = (e) =>{    
    
    this.setState({ loading: true });

    axios({
      url: `${baseURL}/users/${store.getState().id}/tutor/certificado.pdf`,
      method: 'GET',
      responseType: 'blob',       
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CertificadoHorasTutoria.pdf');
      document.body.appendChild(link);
      link.click();      

      this.setState({ loading: false });

    });       

  }


  render() {
    return (
      <div>
        <MenuTutor/>

        <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">                            
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-default" onClick={this.generarCertificado} id="btnGenerarCertificado">Generar Certificado</button>
                        </div>
                        <div className="col-md-4">                            
                        </div>
                    </div>

                    { this.state.loading ?  
                      
                      <div className="row">
                        <div className="col-md-4">                            
                        </div>
                        <div className="col-md-4"  id="loadingMessage">
                            <h2>Loading...</h2>
                        </div>
                        <div className="col-md-4">                            
                        </div>
                      </div>
                    
                    : null }                    

                </div>   
        </div>

        
    )
  }

}
