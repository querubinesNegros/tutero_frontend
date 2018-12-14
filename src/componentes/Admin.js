import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';
import { logPageView } from '../analytics';
import FooterAdmin from './FooterAdmin';

export default class Admin extends Component{

  constructor(){
    super();
    logPageView();
  }

   state = {
    classposts: []
  }

  componentDidMount() {
    axios.get(`${baseURL}/class_posts`)
      .then(res => {
        const classposts = res.data.data;
        this.setState({ classposts });
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    const post = {
      admin_id: store.getState().id,
      class_post_id: parseInt(this.state.class_post_id),
      name: this.state.name,
      description: this.state.description
    };
    console.log(post);
   axios.post(`${baseURL}/posts`, {post})
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }

    
  setField (e) {
    if(e.target.id === 'selectClassPost'){
      this.setState({
        class_post_id: e.target.value
      })
      }
      if(e.target.id === 'namePostCreate'){
      this.setState({
        name: e.target.value
      })
      }
      if(e.target.id === 'descriptionPostCreate'){
      this.setState({
        description: e.target.value
      })
      }
      console.log(this.state.class_post_id);
      console.log(this.state.name);
      console.log(this.state.description);
    }


  render() {
    return (
      	<div>
      		<MenuAdmin/>
          
      		<div className="container" style={{padding:70}}>


          <h1 className="page-title">Bienvenido  <span className="h1">{store.getState().name}</span></h1>



          <h3> Eres un {store.getState().userable_type}  <br /></h3>
          
          <Image src={localStorage.getItem('picture')} width="250px" circle className="img-fluid rounded-circle hoverable" />
          <div className="form-group">

            <h4 className="s-property-title">Nombre de usuario:</h4>
            <label>{store.getState().name} {store.getState().lastname}</label>

          </div>
          <div className="form-group">
            <h4 className="s-property-title">Correo electronico:</h4>
            <label>{store.getState().email}</label>


          </div>
        </div>
      
    <FooterAdmin/>


		</div>
    )
  }
}
