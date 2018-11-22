import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import '../styles/App.css';
import Router from './Router';
import store from '../store';
import baseURL from '../url';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { initGA } from '../analytics';


class App extends Component {
  
    constructor(props) {
      super(props);
      initGA();
      this.state = {
        s_users : {  profile: {
          id: 0,
          name: "",
          lastname: "",
          email: "",
          cellphone: "",
          
          userable_type: "",
          userable_id: 0
      }, career_id: ""}
      };
  }
obtenerDatos(loginParams){
    return fetch(`${baseURL}/users/current`, {
       headers: new Headers({
      "Authorization": loginParams,
      "Content-Type":"application/json",
       "Accept":"application/json"
    }), 
     })
       .then((res) => {
         return res.json()
       }
      )
 }



  componentWillMount(){
    console.log(this.state.s_users)
    if (localStorage.getItem('jwtToken')) {
      this.obtenerDatos(localStorage.getItem('jwtToken')).then((users) => {
        this.setState({ s_users: users })
      })      
      }
    console.log(this.state.s_users)
  }
  render() {

    //Verifica que esté el token en el localstorage
    if (localStorage.getItem('jwtToken')) {
      console.log(this.state.s_users)
        store.dispatch({
          type: "ADD_TO_STORE",
          career_id: this.state.s_users.career_id,
          cellphone: this.state.s_users.profile.cellphone,
          email: this.state.s_users.profile.email,
          id: this.state.s_users.profile.id,
          lastname: this.state.s_users.profile.lastname,
          name: this.state.s_users.profile.name,  
          userable_id: this.state.s_users.profile.userable_id,
          userable_type: this.state.s_users.profile.userable_type,
          aut: true
    })
    }

    return (
      <div >
        <Router/>
        
      </div>
    );
  }
}

export default App;
  