import React, { Component } from 'react';
import '../styles/App.css';
import Router from './Router';
import store from '../store';
import baseURL from '../url';

class App extends Component {
  
    constructor(props) {
      super(props);

      this.state = {
        s_users : []
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
    if (localStorage.getItem('jwtToken')) {
      this.obtenerDatos(localStorage.getItem('jwtToken')).then((users) => {
        this.setState({ s_users: users })
      })
     
    
      
      
      }
  }
  render() {
    //console.log(this.state.s_users)
    if (localStorage.getItem('jwtToken')) {
        store.dispatch({
          type: "ADD_TO_STORE",
          
          career_id: this.state.s_users.career_id,
          cellphone: this.state.s_users.cellphone,
          email: this.state.s_users.email,
          id: this.state.s_users.id,
          lastname: this.state.s_users.lastname,
          name: this.state.s_users.name,
          userable_id: this.state.s_users.userable_id,
          userable_type: this.state.s_users.userable_type,
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
