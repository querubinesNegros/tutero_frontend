import React, { Component } from 'react'
import '../styles/Menu2.css';
import {Link} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

export default class Menu extends Component {
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
  
  render() {
    const bgPink = {backgroundColor: '#7433FF'}
    return (
      <div  id="containerMenu">
        <Navbar style={bgPink} dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/' className="nav-link">
                      <img src="/logo.jpeg" width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/aboutus' className="nav-link">About Us</Link>
                </NavItem>
                <NavItem>
                  <Link to='/registro' className="nav-link">Registro</Link>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
      </div>
    )
  }
}
