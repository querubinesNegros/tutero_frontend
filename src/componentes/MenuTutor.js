import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { logPageView } from '../analytics';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

export default class MenuTutor extends Component {
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
        
            <Navbar id="sidebarTutor"style={bgPink} dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/tutor' className="nav-link">
                      <img src="/udec1.jpg" width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/tutor/disponibilidad' className="nav-link">Disponibilidad</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/tutorias' className="nav-link">Tutorias</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/encuestas' className="nav-link">Encuestas</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/estudiantes' className="nav-link">Estudiantes</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/certificados' className="nav-link">Certificados</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/consultas' className="nav-link">Consultas</Link>
                </NavItem>
              </NavbarNav>
            
              <NavbarNav right>
                  <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Logout</button>
              </NavbarNav>
            </Collapse>
          </Navbar>

      </div>

    )
  }
}