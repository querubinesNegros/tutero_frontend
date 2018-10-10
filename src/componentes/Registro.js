import React, { Component } from 'react'
import '../styles/Registro.css';
import {Link} from 'react-router-dom'
import Menu from './Menu';

export default class Registro extends Component {
  render() {
    return (
      <div id="LoginForm">
      <Menu/>
      <div class="container">
      <h1 class="form-heading">login Form</h1>
      <div class="login-form">
      <div class="main-div">
      <div class="panel">
      <h1 className="h1Registro align-center">Tutero</h1>
      
      
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Usuario
        <span class="caret"></span></button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Estudiante</a></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Tutor</a></li>
          <li role="presentation" class="divider"></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Admin</a></li>
          
        </ul>
      </div>
      <br></br>
      
      <p>Please enter your email and password</p>
      </div>
      <form id="Login">

        <div class="form-group">


            <input type="email" class="form-control" id="inputEmail" placeholder="Email Address"/>

        </div>

        <div class="form-group">

            <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>

        </div>
        
        <div class="form-group">

            <input type="password" class="form-control" id="inputPassword" placeholder="Password again"/>

        </div>
       
        <button type="submit" class="btn btn-primary">Register</button>

    </form>
    </div>

</div></div>


</div>
    )
  }
}
