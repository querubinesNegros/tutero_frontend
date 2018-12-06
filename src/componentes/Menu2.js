import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';


export default class Menu2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
  }
/*
  handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.removeItem('jwtToken')
    swal({title:'Vuelve pronto...', timer:1000, showConfirmButton:false, onOpen: () =>{
       swal.showLoading()
     }});
    setTimeout(function(){window.location.reload()},1000);
  }
*/ 
  render() {
    const bgPink = {backgroundColor: '#45526e'}
    
    return (
        <div>
          
          <Navbar style={bgPink} dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/estudiante' className="nav-link">
                      <img src="/logo.jpeg" width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/recreacion' className="nav-link">Recreación</Link>
                </NavItem>
                <NavItem>
                  <Link to='/historial' className="nav-link">Historial</Link>
                </NavItem>
                <NavItem>
                  <Link to='/servicios' className="nav-link">Servicios</Link>
                </NavItem>
                <NavItem>
                  <Link to='/career' className="nav-link">Carrera</Link>
                </NavItem>
                <NavItem>
                  <Link to= {{pathname: '/disponibilidad/' }}  className="nav-link">Disponibilidad</Link>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                  <Link  to="/Perfil" className="nav-link icon">
                    <img src={localStorage.getItem('picture')} width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                  </Link>
                  <NavItem>
                  </NavItem>
                  <NavItem>
                  </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
                  
        </div>

    )
  }
}

  