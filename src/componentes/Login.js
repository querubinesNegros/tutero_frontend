import React, { Component } from 'react'
import '../styles/login.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import store from '../store';

export default class Login extends Component {

  constructor() {
    super();
    this.state = { email: null, password: null};
  }


  handleSubmit = (e) =>{
    e.preventDefault();

    var str = this.state.email;
    


    const auth = {
      email: this.state.email,
    password: this.state.password
    }
    const email = this.state.email;
   axios.post(`${baseURL}/user_token`, {auth})
    .then(function (token) {
      console.log(token.data.jwt);
      localStorage.setItem("jwtToken", token.data.jwt);


        axios.post(`${baseURL}/users/type`,{email})
        .then(res => {
          const type = res.data.data[0];
          console.log(type);

          swal({title:'Cargando...', timer:1000, showConfirmButton:false, onOpen: () =>{
            swal.showLoading()
           }});
          if (type === "Tutor") {
            setTimeout(function(){window.location = `${baseURLFront}/tutor`;}, 1000); 
          }else if(type === "Admin"){
            setTimeout(function(){window.location = `${baseURLFront}/admin`;}, 1000); 
          }
          else{
            setTimeout(function(){window.location = `${baseURLFront}/estudiante`;}, 1000); 
          }
        })
        .catch(function (error) {
        console.log(error);
      });

    })
    .catch(function (error) {
      swal('Email o contraseña equivocada. Vuelva a intentar');
  
    });

  }
  

  setField (e) {
    if(e.target.id === 'inputEmail'){
      this.setState({
        email: e.target.value
      })
      }
      if(e.target.id === 'inputPassword'){
      this.setState({
        password: e.target.value
      })
      }
      console.log(this.state.email);
      console.log(this.state.password);
    }


  render() {
    return (
      <div id="LoginForm">
      <div className="container">
      <h1 className="form-heading">login Form</h1>
      <div className="login-form">
      <div className="main-div">
      <div className="panel">
      <h1 className="h1Login align-center">Tutero</h1>
      
      
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
            <input type="email" className="form-control" onChange={(e)=>this.setField(e)} id="inputEmail" placeholder="Email Address"/>
        </div>

        <div className="form-group">

            <input type="password" className="form-control" onChange={(e)=>this.setField(e)} id="inputPassword" placeholder="Password"/>

        </div>
        <div className="forgot">
        <a href="reset.html">Forgot password?</a>
        </div>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary hola"> Log in</button>
    </form>
    </div>

</div></div>


</div>
    )
  }
}
