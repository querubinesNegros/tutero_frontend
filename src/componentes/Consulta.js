import React, { Component } from 'react'
import Answer from './Answer'
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import $ from 'jquery'
import '../styles/Consulta.css';


export default class Consulta extends Component {  

  constructor() {
    super();
    this.state = { 
      newAnswers: [],
      show_answerText: false,
      show_btnEnviarRespuesta: false,
      show_btnResponder: true            
    };
  }  

  componentDidMount (){
    
  }

  responder = (e) =>{          
    this.setState({show_answerText: true});
    this.setState({show_btnEnviarRespuesta: true});    
    this.setState({show_btnResponder: false});    
  }
  
  enviarRespuesta = (e) =>{  
    this.setState({show_answerText: false});
    this.setState({show_btnEnviarRespuesta: false});    
    this.setState({show_btnResponder: true});

    if ($('#answerText').val() != "" && !($('#answerText').val().includes("/")) && ($('#answerText').val().length) >= 2) {
      
      const newAnswer = {
        content: $('#answerText').val(), 
        question_id: this.props.id, 
        user_id: store.getState().id
      };     
       
      axios.post(`${baseURL}/answers`,newAnswer)
      .then((response) => {
        console.log(response)         
        const newAnswers = [...this.state.newAnswers];
        newAnswers.push(response.data.answer);
        this.setState ({newAnswers: newAnswers});           
      })
      .catch(function (error) {
          console.log(error);
      });       
      
    } 
    
  }

  render() {
    return (
      <div className="card" id = "wraper_Consulta">

        <div className="card">          
          <div className="card-body"> 
            <h5 className="card-title">{this.props.content}</h5>                       
            <p className="card-text">Estudiante:{(this.props.user.name) +' '+ (this.props.user.lastname) 
            + "    Fecha:" + (this.props.fechaPublicacion) + "    Tema:" + (this.props.subject)}</p>                             
          </div>
          {this.state.show_btnResponder ?
          <button type="button" className="btn btn-default" id="btnResponder" onClick={this.responder}>Responder</button>
          :null} 
          {this.state.show_answerText ?
            <textarea className="form-control" id="answerText" rows="1" placeholder="Escribe tu respuesta"></textarea>
          :null}
          {this.state.show_btnEnviarRespuesta ?
            <button type="button" className="btn btn-default" id="btnEnviarRespuesta" onClick={this.enviarRespuesta}>Enviar</button>
          :null}  
          </div>  


        <div>
        { 
          this.props.answers.map((answer) => {
          return <Answer 
          key = {answer.id}        
          content = {answer.content}
          user = {answer.user} />})
        }
        </div>          
          
        { 
          this.state.newAnswers.map((answer) => {
          return <Answer 
          key = {answer.id}        
          content = {answer.content}
          user = {answer.user} />})
        }              
         

      </div>
        
    )
  }

}
