import React, { Component } from 'react'
import '../styles/Menu2.css';
import swal from 'sweetalert2';
import {Link} from 'react-router-dom';
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

  onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
  }

handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.removeItem('jwtToken')
        swal({title:'Vuelve pronto...', timer:1000, showConfirmButton:false, onOpen: () =>{
           swal.showLoading()
         }});
        setTimeout(function(){window.location.reload()},1000);
    }

  render() {
    
    const bgPink = {backgroundColor: '#45526e'}
    return (
        <div id="containerNav">  
        
            <Navbar style={bgPink} dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/tutor' className="nav-link">
                      <img src="/logo.jpeg" width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/tutor' className="nav-link">Perfil</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/disponibilidad' className="nav-link">Disponibilidad</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tutor/tutorias' className="nav-link">Tutorias</Link>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                  <Link  to="/tutor/editarperfil" className="nav-link icon" id="iconoPerfil">
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