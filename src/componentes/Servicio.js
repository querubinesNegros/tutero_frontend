import React, { Component } from "react";
import Menu2 from "./Menu2";
import "../styles/Servicios.css";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import baseURL from "../url";
import axios from "axios";
import { logPageView } from "../analytics";
import Archivo from "./Archivo";
import Corosuer from "./Corosuer";
import Footer from './Footer';

export default class Servicio extends Component {
  constructor() {
    super();
    logPageView();
    this.downloadFile = this.downloadFile.bind(this);
  }
  state = {
    urls: [],
    pdfs: [],
    images: []
  };

  componentDidMount() {
    axios
      .get(`${baseURL}/posts/${this.props.location.state.id}/fileps`)
      .then(res => {
        const urls = res.data.fileps;
        console.log(res);
        urls.map(url => {
          if (url.filepable_type == "Pdf") {
            this.state.pdfs.push(url);
          } else {
            this.state.images.push(url);
          }
          this.setState({ urls: urls });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  downloadFile(index) {
    const urlToDownload = this.state.pdfs[index].filepable.path.url;
    console.log(urlToDownload);
    setTimeout(() => {
      const response = {
        file: urlToDownload
      };
      // server sent the url to the file!
      // now, let's download:
      window.open(response.file);
      // you could also do:
      // window.location.href = response.file;
    }, 100);
  }

  render() {
    let fp = this.state.pdfs;
    return (
      <div id="vistaTutor">
        <Menu2 />
        <Grid>
          <h1>{this.props.location.state.name}</h1>
          <p>{this.props.location.state.description}</p>
          <div className="row justify-content-md-center">
            <div className="col-md-8 mb-3">
              <Corosuer images={this.state.images} type = {0} />
            </div>
          </div>
        </Grid>
        <div className="row container">
          {Object.keys(fp).map(key => (
            <Archivo
              name={fp[key].name}
              key={key}
              id_r={key}
              download={this.downloadFile}
              ext={"pdf"}
              type="download"
            />
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}
