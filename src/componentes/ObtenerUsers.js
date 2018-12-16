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
import Paginacion from './Paginacion'
export default class ObtenerUsers extends Component {

  constructor() {
    super();
    logPageView();
  }

  state = {
    tutor: [],
    arr: [],
    page: 1, //pagina en la que está en este instante
    cantidad: 0
  }



  componentDidMount() {

    axios.get(`${baseURL}/users/pages`)
      .then(res => {
        const pages = res.data.data;
        console.log(res);
        var i;
        var arr = [];
        for (i = 1; i <= pages; i++) {
          arr[i] = i;
        }
        this.setState({ arr, cantidad: pages });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`${baseURL}/users/page/1`)
      .then(res => {
        const tutor = res.data.profiles;
        console.log(tutor);
        this.setState({ tutor });
      })
      .catch(error => {
        console.log(error);
      });


  }

  setField(e) {
    if (e.target.id === 'selectPage') {
      console.log(e.target.value);
      axios.get(`${baseURL}/users/page/${e.target.value}`)
        .then(res => {
          const tutor = res.data.profiles;
          console.log(res);
          this.setState({ tutor });
        })
        .catch(error => {
          console.log(error);
        });
    }

  }
  changePage = (nowPage) => {
    axios.get(`${baseURL}/users/page/${nowPage}`)
    .then(res => {
      const tutor = res.data.profiles;
      console.log(res);
      this.setState({ tutor });
    })
    .catch(error => {
      console.log(error);
    });
}
  



  render() {
    const cant = this.state.cantidad;
    const page = this.state.page
    console.log(this.state);
    return (
      <div>
        <MenuAdmin />
         <div className="row">

            <div className="col center-block">
            <h3> Escoge la página </h3>

              <Paginacion paginas={cant} actual={page} changePage={this.changePage} />
            </div>
          </div>
        <div className="container mt-3">
         
          <div className="row">


          

            <div className="col-md-12 mt-3">

              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Tipo</th>

                  </tr>
                </thead>
                <tbody>

                  {this.state.tutor.map(home =>
                    <tr><th scope="row">{home.id}</th>
                      <td>{home.name}</td>
                      <td>{home.lastname}</td>
                      <td>{home.email}</td>
                      <td>{home.userable_type}</td>

                    </tr>)}



                </tbody>
              </table>

            </div>

          </div>
        </div>
        <FooterAdmin />
      </div>
    )
  }
}