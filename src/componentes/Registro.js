import React, { Component } from 'react'
import '../styles/Registro.css';
import {Link} from 'react-router-dom'
import Menu from './Menu';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import baseURLFront from '../urlFront';


export default class Registro extends Component {
  
  constructor() {
    super();
    this.state = { emailRegistro: null, passwordRegistro: null, name: null, lastname: null, password_confimation: null, userable_type: "Student", pbm: null , stratus: null , age: null};
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    const body = {
      user :{
      email: this.state.emailRegistro,
      password: this.state.passwordRegistro,
      password_confirmation: this.state.password_confirmation,
      name: this.state.name,
      lastname: this.state.lastname,
      userable_type: this.state.userable_type,
      },
      student:{
      pbm: this.state.pbm,
      stratus: this.state.stratus,
      age: this.state.age
      }
    };

   axios.post(`${baseURL}/users/create`, body)
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    swal({title:'Cargando...', timer:10000, showConfirmButton:false, onOpen: () =>{
      swal.showLoading()
    }});
    swal({
      text: "Se ha registrado satisfactoriamente. Inicie sesión",
      }   );
    setTimeout(function(){window.location = `${baseURLFront}`;}, 10000); 

  }
  setField (e) {
    if(e.target.id === 'inputEmailRegistro'){
      this.setState({
        emailRegistro: e.target.value
      })
      }
      if(e.target.id === 'inputPasswordRegistro'){
      this.setState({
        passwordRegistro: e.target.value
      })
      }
      if(e.target.id === 'inputName'){
        this.setState({
          name: e.target.value
        })
      }
      if(e.target.id === 'inputLastname'){
        this.setState({
          lastname: e.target.value
        })
      }
      if(e.target.id === 'inputPassword_confirmation'){
        this.setState({
          password_confirmation: e.target.value
        })
      }
      if(e.target.id === 'inputPbm'){
        this.setState({
          pbm: e.target.value
        })
      }
      if(e.target.id === 'inputStratus'){
        this.setState({
          stratus: e.target.value
        })
      }
      if(e.target.id === 'inputAge'){
        this.setState({
          age: e.target.value
        })
      }
      //console.log(this.state.emailRegistro);
      //console.log(this.state.passwordRegistro);
      //console.log(typeof(this.state.name));
     // console.log(typeof(this.state.lastname));
     // console.log(typeof(this.state.password_confirmation));
      console.log(this.state.pbm);
     // console.log(this.state.student.pbm);
      console.log(this.state.age);
    }


  render() {
    return (
      
      <div id="LoginForm">
      <Menu/>
      <div className="container">
      <h1 className="form-heading">login Form</h1>
      <div className="login-form">
      <div className="main-div">
      <div className="panel">
      <h1 className="h1Registro align-center">Tutero</h1>
    
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Usuario
        <span className="caret"></span></button>
        <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Estudiante</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tutor</a></li>
          <li role="presentation" className="divider"></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Admin</a></li>
          
        </ul>
      </div>
      <br></br>
      
      <p>Please enter your email and password</p>
      </div>
      <form id="Login">

        <div className="form-group">

          <input type="name" className="form-control" onChange={(e)=>this.setField(e)} id="inputName" placeholder="Nombre"/>

        </div>
        <div className="form-group">

          <input type="lastname" className="form-control" onChange={(e)=>this.setField(e)} id="inputLastname" placeholder="Apellido"/>

        </div>

        <div className="form-group">

          <input type="number" className="form-control" onChange={(e)=>this.setField(e)} id="inputPbm" placeholder="Pbm"/>
          
        </div>

        <div className="form-group">

          <input type="stratus" className="form-control" onChange={(e)=>this.setField(e)} id="inputStratus" placeholder="Estrato"/>

        </div>

        <div className="form-group">

          <input type="number" className="form-control" onChange={(e)=>this.setField(e)} id="inputAge" placeholder="Edad"/>

        </div>
        

        <div className="form-group">

            <input type="email" className="form-control" onChange={(e)=>this.setField(e)} id="inputEmailRegistro" placeholder="e-mail"/>

        </div>

        <div className="form-group">

            <input type="password" className="form-control" onChange={(e)=>this.setField(e)} id="inputPasswordRegistro" placeholder="Password"/>

        </div>
        
        <div className="form-group">

            <input type="password" className="form-control" onChange={(e)=>this.setField(e)} id="inputPassword_confirmation" placeholder="Password again"/>

        </div>
       
        <button type="submit"  onClick={this.handleSubmit} className="btn btn-primary">Register</button>

    </form>
    </div>

</div></div>


</div>
    )
  }
}
