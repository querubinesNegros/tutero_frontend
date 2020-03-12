import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';
import { logPageView } from '../analytics';
import FooterAdmin from './FooterAdmin';
import Paginacion from './Paginacion';
import Swal from 'sweetalert2'
import baseURLFront from '../urlFront';
 
export default class ObtenerUsers extends Component {

  constructor() {
    super();
    logPageView();
    this.changeToTutor = this.changeToTutor.bind(this)
    this.changeToStudent = this.changeToStudent.bind(this)
    this.changeToAdmin = this.changeToAdmin.bind(this)
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
    this.setState({ page: nowPage })
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
  changeToTutor(rol, id) {
    Swal({
      title: 'Quieres volver este estudiante un tutor?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, deseo cambiar el rol',
      cancelButtonText: 'No, me he equivocado'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Se esta cambiando de rol',
          'Espera mientras que se procesa la solicitud.'
        )
        const info = {
          rol: "Tutor"
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${id}/rol`, info)
          .then((res) => {

            if (res.status == 200) {
              Swal('Cambios realizados con exito')
            }
 setTimeout(function () { window.location = `${baseURLFront}/admin/obtener_users`; }, 1000);
          })
          .catch(function (error) {
            console.log(error);
            Swal({ title: 'No se ha podido realziar los cambios', type: 'warning', })
          })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'No se cambiara nada'
        )
      }

    })

  }
  changeToStudent(rol, id) {
    Swal({
      title: 'Quieres volver este tutor un estudiante?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, deseo cambiar el rol',
      cancelButtonText: 'No, me he equivocado'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Se esta cambiando de rol',
          'Espera mientras que se procesa la solicitud.'
        )
        const info = {
          rol: "Student"
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${id}/rol`, info)
          .then((res) => {

            if (res.status == 200) {
              Swal('Cambios realizados con exito')
            }
            setTimeout(function () { window.location = `${baseURLFront}/admin/obtener_users`; }, 1000);
 
          })
          .catch(function (error) {
            console.log(error);
            Swal({ title: 'No se ha podido realziar los cambios', type: 'warning', })
          })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'No se cambiara nada'
        )
      }

    })

  }

  changeToAdmin(rol, id) {
    Swal({
      title: 'Quieres volver este tutor un ADMIN?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, deseo cambiar el rol',
      cancelButtonText: 'No, me he equivocado'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Se esta cambiando de rol',
          'Espera mientras que se procesa la solicitud.'
        )
        const info = {
          rol: "Admin"
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${id}/rol`, info)
          .then((res) => {
            if (res.status == 200) {
              Swal('Cambios realizados con exito')
            }
            setTimeout(function () { window.location = `${baseURLFront}/admin/obtener_users`; }, 1000);
 


          })
          .catch(function (error) {
            Swal({ title: 'No se ha podido realziar los cambios', type: 'warning', })
            console.log(error);
          })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'No se cambiara nada'
        )
      }

    })

  }

  changeRol(str, id) {
    var tutorButtons = []
    if (str == "Student") {
      return <button type="button" class="btn btn-elegant btn-sm" onClick={this.changeToTutor.bind(this, str, id)}>Cambiar a tutor</button>
    } else if (str == "Tutor") {
      tutorButtons.push(<button type="button" class="btn btn-elegant btn-sm" onClick={this.changeToAdmin.bind(this, str, id)}>Cambiar a Admin</button>)
      tutorButtons.push(<button type="button" class="btn btn-elegant btn-sm" onClick={this.changeToStudent.bind(this, str, id)} >Cambiar a estudiante</button>)
      return tutorButtons
    }
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
                    <th scope="col">Id del rol</th>
                    <th scope="col">Accion</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.tutor.map(home =>
                    <tr><th scope="row">{home.id}</th>
                      <td>{home.name}</td>
                      <td>{home.lastname}</td>
                      <td>{home.email}</td>
                      <td>{home.userable_type}</td>
                      <td>{home.userable_id}</td>
                      <td>{this.changeRol(home.userable_type, home.id)}</td>
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