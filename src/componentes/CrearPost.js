import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';
import { logPageView } from '../analytics';
import FooterAdmin from './FooterAdmin';
import Archivo from './Archivo'


export default class CrearPost extends Component {
  constructor() {
    super();
    logPageView();
    this.removeFile = this.removeFile.bind(this);
  }


  state = {
    classposts: [],
    files: [],
    types: [],
    names: []
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

  handleSubmit = (e) => {
    e.preventDefault()

    const post = {
      admin_id: store.getState().id,
      class_post_id: parseInt(this.state.class_post_id),
      name: this.state.name,
      description: this.state.description
    };
    console.log(post);
    var error = "";

    if (isNaN(post.class_post_id)) {
      error = "Debe escoger un tipo de post";
      console.log(error);
      swal(error);
      return;
    }
    if (post.name == null) {
      error = "Debe colocar un nombre";
      console.log(error);
      swal(error);
      return;
    }
    if (post.description == null) {
      error = "Debe colocar una descripción";
      console.log(error);
      swal(error);
      return;
    }
    if (post.name.length > 255) {
      error = "El título no puede tener más de 255 caracteres";
      console.log(error);
      swal(error);
      return;
    }

    var info_files;
    console.log(this.state.files.length);

    axios.post(`${baseURL}/posts`, { post })
      .then(res => {
        console.log(res.data);
        console.log("post");
        const id = res.data.post.id;

        if (this.state.files.length > 0) {

          for (var i = 0; i < this.state.files.length; i++) {
            var bodyFormData = new FormData();

            bodyFormData.append('path', this.state.files[i]);
            bodyFormData.append('name', this.state.names[i]);
            bodyFormData.append('type', this.state.types[i]);
            console.log("se hizo bodyformdata");
            console.log(bodyFormData);
            console.log(info_files);
            console.log("se hizo bodyformdata en axios");
            axios({
              method: 'post',
              url: `${baseURL}/posts/${id}/fileps`,
              data: bodyFormData,
              config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
              .then(res => {

                console.log(res);
                console.log("res2");

              })

          }

        }
        swal({ title: 'Se ha creado el post', timer: 3000, showConfirmButton: false });
        setTimeout(function () { window.location.reload() }, 3000);



      })
      .catch(function (error) {
        console.log(error);
      });


  }
  removeFile(index) {
    var cpy_files = [...this.state.files];
    var cpy_types = [...this.state.types];
    var cpy_names = [...this.state.names];

    cpy_files.splice(index, 1);
    cpy_types.splice(index, 1);

    this.setState({ files: cpy_files, types: cpy_types, names: cpy_names })
  }

  setField(e) {
    if (e.target.id === 'selectClassPost') {
      this.setState({
        class_post_id: e.target.value
      })
    }
    if (e.target.id === 'namePostCreate') {
      this.setState({
        name: e.target.value
      })
    }
    if (e.target.id === 'descriptionPostCreate') {
      this.setState({
        description: e.target.value
      })
    }
    console.log(this.state.class_post_id);
    console.log(this.state.name);
    console.log(this.state.description);
  }

  onChange = (e) => {
    let files = e.target.files;
    var extension, name;
    extension = files[0].name.split(".")[1]
    name = files[0].name.split(".")[0]
    if (extension == "png" || extension == "pdf" || extension == "jpg") {
      this.state.files.push(files[0])
      this.state.types.push(extension)
      this.state.names.push(name)
    }

    this.setState({ file: files[0] })
    console.log(this.state.files)
    //

  }




  render() {
    const fp = this.state.files;

    return (
      <div >
        <MenuAdmin />
        <div className="row col-md-6 mr-auto ml-auto ">

          <div className="col-md-12 text-center" id="divCreatePost">

            <h1 className="page-title">Crea una nueva publicación</h1>

            <div className="form-group">

              <h4 className="s-property-title">Nombre:</h4>
              <input type="text" id="namePostCreate" onChange={(e) => this.setField(e)} ></input>

            </div>
            <h4 className="s-property-title">Tipo de post</h4>
            <select className="form-control" id="selectClassPost" onChange={(e) => this.setField(e)}>
              {this.state.classposts.map(home => <option value={home.id}>{home.name}</option>)}

            </select>
            <div className="form-group">

              <h4 className="s-property-title">Descripción</h4>
              <textarea id="descriptionPostCreate" onChange={(e) => this.setField(e)}></textarea>

            </div>

            <div className="form-group">
              <h4 className="s-property-title">Sube un archivo</h4>
              <input type="file" name="file" id="file" onChange={this.onChange} />
            </div>


            <div className="form-group">
              <div className="form-group">
                <Link to='/admin' className="btn btn-default">Cancelar</Link>
                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Guardar</button>

              </div>

            </div>

          </div>
        </div>
        <div className="row container">
          {Object.keys(fp).map(key =>
            <Archivo name={fp[key].name} key={key} id_r={key} remove={this.removeFile} ext={this.state.types[key]} type="delete" />
          )}
        </div>

        <FooterAdmin />
      </div>
    )
  }
}
