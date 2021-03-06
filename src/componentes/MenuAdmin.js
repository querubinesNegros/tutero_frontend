import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';
import { logPageView } from '../analytics';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class MenuAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('id')
    localStorage.removeItem('picture')
    localStorage.removeItem('type')  
    swal({
      title: 'Vuelve pronto...', timer: 1000, showConfirmButton: false, onOpen: () => {
        swal.showLoading()
      }
    });
    setTimeout(function () { window.location.reload() }, 1000);
  }

  render() {
    const bgPink = { backgroundColor: '#00482B' }
    return (
        <div id="containerNav">  
        
        <Navbar id="sidebarAdmin" style={bgPink} dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/admin' className="nav-link">
                      <img src="/udec1.jpg" width= "70px" alt ="" className="img-fluid rounded-circle zoom"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/admin/crear_post' className="nav-link">Crear post</Link>
                </NavItem>
                <NavItem>
                  <Link to='/admin/crear_recreacion' className="nav-link">Crear Recreación</Link>
                </NavItem>
                <NavItem>
                  <Link to='/admin/obtener_users' className="nav-link">Obtener usuarios</Link>
                </NavItem>
                <NavItem>
                  <Link to='/admin/consultas' className="nav-link">Consultas Estudiantes</Link>
                </NavItem>                
                <NavItem>
                  <Link to='/admin/nuevo' className="nav-link">Agregar admin</Link>
                </NavItem>
                <NavItem>
                  <Link to='/admin/tutores' className="nav-link">Listado de tutores</Link>
                </NavItem>
                <NavItem>
                  <Link to= {{pathname: '/admin/estadisticas' }}  className="nav-link">Estadisticas</Link>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                  <MDBBtn color="yellow" type="submit" onClick={this.handleSubmit}>Logout</MDBBtn>
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