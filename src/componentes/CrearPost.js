import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';

export default class CrearPost extends Component{
   state = {
    classposts: []
  }

  componentDidMount() {
    axios.get(`${baseURL}/class_posts`)
      .then(res => {
        const classposts = res.data.class_posts;
        console.log(res);
        console.log("res");
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

    onSubmit=(e)=>{
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('path', this.state.file); 

          axios({
            method: 'post',
            url: `${baseURL}/pdfs`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
                swal({title:'Se ha subido correctamente', timer:1000, showConfirmButton:false, onOpen: () =>{
                    swal.showLoading()
                   }});
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    }




    onChange=(e)=>{
      let files = e.target.files
    //console.warn("datafile",files[0])
      this.setState({file:files[0]});
    }




  render() {
    return (
      	<div >
      		<MenuAdmin/>
      		<div className="row col-md-6 mr-auto ml-auto ">
      			
      			<div className="col-md-12 text-center" id="divCreatePost">

      				<h1 className="page-title">Crea una nueva publicación</h1>               
                                                              
                    <div className="form-group">
                                       
                        <h4 className="s-property-title">Nombre:</h4>
                                    <input type="text" id="namePostCreate" onChange={(e)=>this.setField(e)} ></input>
                                   
                    </div>
                    	<h4 className="s-property-title">Tipo de post</h4>
                    	<select id="selectClassPost" onChange={(e)=>this.setField(e)}>
                    		{this.state.classposts.map(home => <option value={home.id}>{home.name}</option>)}
                    	
                    	</select>
                    <div className="form-group">
                                   
                        <h4 className="s-property-title">Descripción</h4>
                        <textarea id="descriptionPostCreate" onChange={(e)=>this.setField(e)}></textarea>
                                   
                    </div>
                    <div className="form-group">
                        <h4 className="s-property-title">Sube un archivo</h4>       
                        <input type="file" name ="file" onChange={this.onChange}/>
                    </div>
              
                        
                    <div className="form-group">
                        <div className="form-group">
                            <Link to='/admin' className="btn btn-default">Cancelar</Link>
                            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Guardar</button>

                        </div>
                    </div>

      			</div>
      			
      		</div>
      
    


		</div>
    )
  }
}
