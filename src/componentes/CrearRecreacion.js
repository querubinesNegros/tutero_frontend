import React, { Component } from "react";
import MenuAdmin from "./MenuAdmin";
import FooterAdmin from './FooterAdmin';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  View,
  MDBView, MDBCarousel, MDBCarouselInner, MDBCarouselItem
} from "mdbreact";
import axios from "axios";
import swal from "sweetalert2";
import baseURL from "../url";
import { logPageView } from "../analytics";
import "../styles/Gallery.css";
import Corosuer from "./Corosuer";
import { Carousel } from "react-responsive-carousel";

export default class CrearRecreacion extends Component {
  constructor(props) {
    super(props);
    logPageView();
    this.state = { nombre: null, recreations: [] };
  }

  componentWillMount() {
    var config = {
      headers: { Authorization: "bearer " + localStorage.getItem("jwtToken") }
    };

    axios
      .get(`${baseURL}/recreations`, config)
      .then(response => {
        this.setState({ recreations: response.data.recreations });
        console.log(response.data.recreations);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSubmit = e => {
    e.preventDefault();

    console.log("Espichaste el botón");
    var bodyFormData = new FormData();
    bodyFormData.append("path", this.state.file);
    bodyFormData.append("name", this.state.nombre);

    axios({
      method: "post",
      url: `${baseURL}/recreations`,
      data: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        //handle success
        console.log(response);
        swal({
          title: "Se ha subido correctamente",
          timer: 1000,
          showConfirmButton: false,
          onOpen: () => {
            swal.showLoading();
          }
        });
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  };

  onChange = e => {
    let files = e.target.files;
    console.warn("datafile", files[0]);
    this.setState({
      file: files[0]
    });
  };

  setField(e) {
    this.setState({ nombre: e.target.value });
    console.log(this.state.nombre);
  }

  render() {
    return (
      <div>
        <MenuAdmin />
        <br></br>
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://www.ucundinamarca.edu.co/images/bienestar/ampliacion-programas-se.jpg"
                        alt="First slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://www.ucundinamarca.edu.co/images/facultades/bienestar.jpg"
                        alt="Second slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://www.ucundinamarca.edu.co/images/biblioteca/2019/alianzas.jpg"
                        alt="Third slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
        <MDBContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <MDBRow>
            <MDBCol md="12">
              <form>
                <p className="h4 text-center py-4">Agregar Recreación</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  onChange={e => this.setField(e)}
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Elije un archivo
                </label>
                <input
                  type="file"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  onChange={this.onChange}
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn
                    color="dark-green"
                    type="submit"
                    onClick={this.onSubmit}
                  >
                    Enviar
                    <MDBIcon icon="paper-plane-o" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <FooterAdmin/>
      </div>
    );
  }
}
