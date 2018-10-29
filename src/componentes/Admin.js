import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';

export default class Admin extends Component{
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
      		<div>
      			Desde perfil de admin
      			<div className="col-md-8" id="divChangeType">

      			</div>
      			<div className="col-md-8" id="divAddAdmin">

      			</div>
            
      		</div>
      
    


		</div>
    )
  }
}
