import React, { Component } from 'react'
import '../styles/login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import firebase from 'firebase';
import  { Fa,Button } from 'mdbreact';
import { logPageView } from '../analytics';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export default class Login extends Component {

  constructor() {
    super();
    this.state = { email: null, password: null, value: "Student"};
    logPageView();
  }


  handleSubmit = (e) =>{
    e.preventDefault();

    var str = this.state.email;
    var res1 = str.split(".");
    console.log(res1);
    


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






    googleResponse = (response) => {
      response.preventDefault()
      
      var provider = new firebase.auth.GoogleAuthProvider();
      let value = this.state.value
      firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.additionalUserInfo.profile.hd);
      console.log(result.additionalUserInfo.profile.email);
      console.log(result.additionalUserInfo.profile.picture);
      localStorage.setItem("picture", result.additionalUserInfo.profile.picture);
    
     const body = {
        email : result.additionalUserInfo.profile.email,
        name : result.additionalUserInfo.profile.given_name,
        lastname : result.additionalUserInfo.profile.family_name,
        userable_type : value,
        image : result.additionalUserInfo.profile.picture
     };
     var error = "";

     if (result.additionalUserInfo.profile.hd == "unal.edu.co"){
      axios.post(`${baseURL}/socials`, body)
      .then(function (res) {
        console.log(res.data.jwt);
        localStorage.setItem("jwtToken", res.data.jwt);
  
        var str = result.additionalUserInfo.profile.email;
      var res1 = str.split(".");
      console.log(res1);
      
  
      axios.post(`${baseURL}/users/type`,{
        email: result.additionalUserInfo.profile.email
      })
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
          console.log(error);
        });
      }else{
        error = "Debe ingresar con correo de la Universidad Nacional";
        console.log(error);
        swal(error);
        return;
      }
      })
      .catch(function(error) {
        
      });

    }; 
    
    cambiarEstado=(e)=>{
      if(e.target.id==="basic"){
        console.log(e.target.value)
      this.setState({value: e.target.value});
      } 
     
  }



    

  render() {
    return (
      <div id="LoginForm">
      <div className="container">
      
      <div className="login-form">
      <div className="main-div">
      <div className="panel">
      <h1 className="h1Login align-center">Tutero</h1>
      
      
      {/*<Dropdown>
        <DropdownToggle caret color="default" onChange={this.cambiarEstado}>
          Usuario
        </DropdownToggle>
        <DropdownMenu   >
          <DropdownItem value="Student">Estudiante</DropdownItem>
          <DropdownItem value="Tutor">Tutor</DropdownItem>
        </DropdownMenu>
      </Dropdown>*/}
      <select id="basic" className="selectpicker show-tick form-control" onChange={this.cambiarEstado} >
                      <option value ="Student">Estudiante</option>
                      <option value ="Tutor">Tutor</option>
                      
                    </select>
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
        <Button onClick={this.googleResponse} social="gplus"><Fa icon="google-plus" className="pr-1"/> Gmail</Button>
    </form>
    </div>

</div></div>


</div>
    )
  }
}