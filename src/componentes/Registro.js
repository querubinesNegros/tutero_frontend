import React, { Component } from 'react'
import '../styles/Registro.css';
import {Link} from 'react-router-dom'
import Menu from './Menu';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import baseURLFront from '../urlFront';


export default class Registro extends Component {
  
  
  state = {
    careers : []
   }

    componentDidMount(){
      axios.get(`${baseURL}/careers`)
          .then(res => {
            console.log(res.data);
            const careers = res.data.careers;
            this.setState({careers});
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleSubmit = (e) =>{
        e.preventDefault();


        

      console.log(this.state);
      const user ={
            
            'name': this.state.name,
            'lastname': this.state.lastname,
            'email': this.state.email,
            'cellphone': this.state.cellphone,
            //'userable_type':,
            'password': this.state.password,
            'confirmPassword':this.state.confirmPassword,
            'career_id':this.state.career

        };
        console.log(user);
        var error = "";  
        if(user.name == null){
          error = "Debe colocar un nombre";
          console.log(error);
          swal(error);
          return;
        }
        if(user.lastname == null){
          error = "Debe colocar un apellido";
          console.log(error);
          swal(error);
          return;
        }
        if(user.email == null){
          error = "Debe colocar una correo";
          console.log(error);
          swal(error);
          return;
        }
        if(user.password == null){
          error = "Debe colocar una contraseña";
          console.log(error);
          swal(error);
          return;
        }
        if(user.name.length > 50 || user.name.length<2  ){
          error = "El nombre no puede tener más de 50 caracteres o menos de 2";
          console.log(error);
          swal(error);
          return;
        }
        if(user.lastname.length > 50 || user.lastname.length<2){
          error = "El apellido no puede tener más de 50 caracteres o menos de 2";
          console.log(error);
          swal(error);
          return;
        }
        if(user.password.length > 50 || user.password.length<8){
          error = "La contraseña no puede tener más de 50 caracteres o menos de 8";
          console.log(error);
          swal(error);
          return;
        }
        if(user.password!=user.confirmPassword){
          error = "Las contraseñas no coninciden";
          console.log(error);
          swal(error);
          return;
        }

        axios.post(`${baseURL}/users/create`, {user})
          .then(function (res) {
            console.log(res.data);
            swal({title:'Se ha creado el usuario', timer:3000, showConfirmButton:false});
            setTimeout(function(){window.location.reload()}, 3000);
          })
          .catch(function (error) {
            console.log(error);
          });
    console.log(user);

    }
    setField (e) {
    if(e.target.id === 'nameEdit'){
      this.setState({
        name: e.target.value
      })
      }
      if(e.target.id === 'lastnameEdit'){
      this.setState({
        lastname: e.target.value
      })
      }
      if(e.target.id === 'emailEdit'){
      this.setState({
        email: e.target.value
      })
      }
      if(e.target.id === 'cellphoneEdit'){
      this.setState({
        cellphone: e.target.value
      })
      }
      if(e.target.id === 'password'){
      this.setState({
        password: e.target.value
      })
      }
      if(e.target.id === 'confirmPassword'){
      this.setState({
        confirmPassword: e.target.value
      })
      }
      if(e.target.id === 'selectCareer'){
      this.setState({
        career: e.target.value
      })
      }
      console.log(this.state.name);
      console.log(this.state.lastname);
      console.log(this.state.email);
      console.log(this.state.cellphone);
      console.log(this.state.career);
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
                                                
                <div className="form-group">
                           
                  <h4 className="s-property-title">Nombre:</h4>
                    <input type="text" id="nameEdit" onChange={(e)=>this.setField(e)}  ></input>
                           
                </div>
                <div className="form-group">
                           
                  <h4 className="s-property-title">Apellido:</h4>
                    <input type="text" id="lastnameEdit" onChange={(e)=>this.setField(e)} ></input>
                           
                </div>
                <div className="form-group">
                    <h4 className="s-property-title">Correo electronico:</h4>
                    <input type="text" id="emailEdit" onChange={(e)=>this.setField(e)} ></input>

                </div> 
                <div className="form-group">
                    <h4 className="s-property-title">Password:</h4>
                    <input type="password" id="password" onChange={(e)=>this.setField(e)} ></input>

                </div> 
                <div className="form-group">
                    <h4 className="s-property-title">Confirm password:</h4>
                    <input type="password" id="confirmPassword" onChange={(e)=>this.setField(e)} ></input>

                </div>

                <div cllasName="form-group">
                    <h4 className="s-property-title">Carrera</h4>
                      <select id="selectCareer" onChange={(e)=>this.setField(e)}>
                        {this.state.careers.map(home => <option value={home.id}>{home.name}</option>)}
                      
                      </select>
                </div>
                <div className="form-group">
                    <h4 className="s-property-title">Celular:</h4>
                    <input type="text" id="cellphoneEdit" onChange={(e)=>this.setField(e)} ></input>

                </div> 
                
                <div className="form-group">
                    <div className="form-group">
                      <Link to='/perfil' className="btn btn-default">Cancelar</Link>
                      <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Guardar</button>

                  </div>
                </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}