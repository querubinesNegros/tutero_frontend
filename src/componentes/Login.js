import React, { Component } from 'react'
import '../styles/login.css';
import {Link} from 'react-router-dom'

export default class Login extends Component {
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
          <li role="presentation" class="divider"></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Admin</a></li>
          
        </ul>
      </div>
      <br></br>
      
      <p>Please enter your email and password</p>
      </div>
      <form id="Login">

        <div className="form-group">


            <input type="email" className="form-control" id="inputEmail" placeholder="Email Address"/>

        </div>

        <div className="form-group">

            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>

        </div>
        <div className="forgot">
        <a href="reset.html">Forgot password?</a>
        </div>
        <Link to={'/estudiante'} className="btn btn-primary hola">Login</Link>

    </form>
    </div>

</div></div>


</div>
    )
  }
}
