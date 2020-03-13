import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Registro from './Registro'
import '../styles/AboutUs.css';
import { Switch, Route } from 'react-router-dom';
import { logPageView } from '../analytics';
import {Image} from 'react-bootstrap';
import FooterLanding from './FooterLanding';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';


export default class AboutUs extends Component {
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
    
    
    return (
      <div>
        <div  id="sidebarAbout">
        
        <Navbar id="sidebarAbout" dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/' className="nav-link">
                      <img src="/udec1.jpg" width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/' className="nav-link">Inicio</Link>
                </NavItem>
                <NavItem>
                  <Link to='/registro' className="nav-link">Registro</Link>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
      </div>
      
      
        <div id="containerCab">
        <div className="row">
          <div className ="col-6">
            
            <div className="col-12 container">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Image src="/udec1.jpg" width= "250px" circle className="profile-pic2 img-fluid"/>

                <br></br>
                <br></br>
            </div>
            
          </div> 
          <div className="col-6">
          <div className="col-12 container">
          <br></br>
                <br></br>
                <br></br>

            <div id="cajasT">
                <div classname="align-center">
                <br></br>
                 NUESTRO EQUIPO
                <br></br><br></br>
                Pedro Alexander Higuera
                <br></br>
                Sergio Ivan Sanchez<br></br>
                Nicolas Parra Ramos<br></br>
                Johnathan Leon<br></br>
                <br></br>
                </div>
                
            
            </div>
            <br></br>
            <br></br>
            
            <div id="cajasT">
                <div classname="align-center"> ACERCA DE
                <br></br><br></br>
                
                </div>
            
                
            
            </div>
            <br></br>
            <br></br>
            
      
         </div>
        </div>
        </div>
      </div>
      
      <FooterLanding/>
      </div>
    )
  }
}