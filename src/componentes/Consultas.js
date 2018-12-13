import React, { Component } from 'react'
import Consulta from './Consulta'
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import $ from 'jquery'
import '../styles/Consultas.css';


export default class Consultas extends Component {

  constructor() {
    super();
    this.state = {      
      consultas: [],
      newQuestions: [],
      topics: [],
      show_btnEnviarPregunta: false,
      show_btnVolver: false,
      show_searchForm: true,
      show_btnHacerConsulta: true      
    };
  }


  componentDidMount (){
    axios.get(`${baseURL}/questions`)
    .then((response) => {
        console.log(response)
        const consultas = response.data.questions;
        this.setState({consultas});
        
    })
    .catch(function (error) {
        console.log(error);
    });
    
    axios.get(`${baseURL}/topics`)
            .then((response) => {
                console.log(response)
                const topics = response.data.topics;
                this.setState({topics});  
            })
            .catch(function (error) {
                console.log(error);
            });
  }  

  searchQuestions= (e) =>{

    const initialState = {      
      consultas: [],
      newQuestions: []      
    };
    this.setState(initialState);    

    const searchText = $('#inputTextSearch').val();  
    this.setState({show_btnEnviarPregunta: false}); 

    if (searchText != "" && !(searchText.includes("/"))) {
    
      axios.get(`${baseURL}/questions/search/${searchText}`)
      .then((response) => {
          console.log(response)
          const consultas = response.data.questions;
          this.setState({consultas}); 
          this.setState({show_btnVolver: true});  
          this.setState({show_btnHacerConsulta: false}); 
          this.setState({show_searchForm : false});      
      })
      .catch(function (error) {
          console.log(error);
      });       
      }
    else{
      axios.get(`${baseURL}/questions`)
      .then((response) => {
          console.log(response)
          const consultas = response.data.questions;
          this.setState({consultas});          
      })
      .catch(function (error) {
          console.log(error);
      });       
      }    

  }  

  hacerConsulta = (e) =>{  
    this.setState({show_btnEnviarPregunta: true});
    this.setState({show_btnHacerConsulta: false});     
  }

  cancelar = (e) =>{  
    this.setState({show_btnEnviarPregunta: false}); 
    this.setState({show_btnHacerConsulta: true});    
  }


  enviarPregunta = (e) =>{ 

    if ($('#questionText').val() != "" && !($('#questionText').val().includes("/"))  && ($('#questionText').val().length) >= 12) {
      const newQuestion = {
        content: $('#questionText').val(), 
        student_id: store.getState().userable_id, 
        topic_id: $('#selectTopic').val()      
      };    
       
      axios.post(`${baseURL}/questions`, newQuestion)
      .then((response) => {
        console.log(response)
        const newQuestions = [...this.state.newQuestions];
        newQuestions.push(response.data.question);
        this.setState ({newQuestions: newQuestions});        
      })
      .catch(function (error) {
          console.log(error);
      });     
    }
    this.setState({show_btnEnviarPregunta: false});
    this.setState({show_btnHacerConsulta: true});

  }

  volver = (e) =>{
    const initialState = {      
      consultas: [],
      newQuestions: [],
      topics: [],
      show_btnEnviarPregunta: false,
      show_btnVolver: false,
      show_searchForm: true,
      show_btnHacerConsulta: true      
    };
    this.setState(initialState);    
    
    axios.get(`${baseURL}/questions`)
      .then((response) => {
          console.log(response)
          const consultas = response.data.questions;
          this.setState({consultas});          
      })
      .catch(function (error) {
          console.log(error);
      });
  }


  render() {
    return ( 
      
      
      <div className="container mt-3">  
        
      <div className="row"> 
        <div className="col-md-2"> 
        </div> 
        <div className="col-md-8"> 

        {this.state.show_searchForm ?
          <div className="card" id="searchBox">          
          <div className="input-group mb-1">
          <input id="inputTextSearch" type="text" className="form-control" placeholder="Escribe el texto que debe contener la consulta" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" id="btnBuscarConsultas" onClick={this.searchQuestions}>Buscar Consultas</button>
          </div>
          </div>
          </div>              
        :null}        

        </div>
        <div className="col-md-2"> 
        </div>
      </div>

        <div className="row">  
        <div className="col-md-12">
          <div className="card">                       
            {this.state.show_btnVolver ?
              <button type="button" className="btn btn-primary" id="btnVolver" 
              onClick={this.volver}>Volver</button>                           
            :null}
            {this.state.show_btnHacerConsulta && store.getState().userable_type == "Student" ?
              <button type="button" className="btn btn-success" id="btnHacerConsulta" 
              onClick={this.hacerConsulta}>Hacer una consulta</button>
            :null}  
            {this.state.show_btnEnviarPregunta ?
              <div className="card"> 
                <button type="button" className="btn btn-info" id="btnCancelar"onClick={this.cancelar}>Cancelar</button>
                <textarea className="form-control" id="questionText" rows="2" placeholder="Escribe tu consulta"></textarea>            
                <h6>Selecciona el tema</h6>
                <select id="selectTopic" className="form-control form-control-sm">                  
                  {this.state.topics.map((topic) => 
                    <option value={topic.id} key={topic.id}>{topic.name}</option>
                  )}
                </select> 
                <button type="button" className="btn btn-primary" id="btnEnviarPregunta" onClick={this.enviarPregunta}>Enviar Consulta</button>                               
                </div> 
              :null}  
                     
          </div>      
        </div>
                  

          <div className="col-md-1">                            
          </div>
          <div className="col-md-10">   
          
            {this.state.newQuestions.map((consulta) => {
              return <Consulta 
              key = {consulta.id}
              id = {consulta.id}
              fechaPublicacion = {consulta.created_at}
              user = {consulta.student.user}
              subject = {consulta.topic.name}
              content = {consulta.content}
              answers = {consulta.answers} />
            })}  

            <div>
            {this.state.consultas.map((consulta) => {
              return <Consulta 
              key = {consulta.id}
              id = {consulta.id}
              fechaPublicacion = {consulta.created_at}
              user = {consulta.student.user}
              subject = {consulta.topic.name}
              content = {consulta.content}
              answers = {consulta.answers} />
            })}           
            </div>    

          </div>
          <div className="col-md-1">                            
          </div>
      </div>  
      </div>   
    )
  }

}
