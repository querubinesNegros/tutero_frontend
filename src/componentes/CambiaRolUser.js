import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import {Link} from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import swal from 'sweetalert2';

export default class CambiaRolUser extends Component{
  

  render() {
    return (
      	<div>
      		<MenuAdmin/>
          Desde cambiarRol

		</div>
    )
  }
}