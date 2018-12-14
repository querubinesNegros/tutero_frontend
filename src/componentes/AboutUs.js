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
    const bgPink = {backgroundColor: '#7433FF'}
    
    return (
      <div>
        <div  id="menuAbout">
        
        <Navbar id="sidebarAbout"style={bgPink} dark expand="md" scrolling fixed="top: 0">
            <NavbarBrand>
                    <Link to='/' className="nav-link">
                      <img src="/logo.jpeg" width= "70px" alt ="" className="img-fluid rounded-circle hoverable"/>
                    </Link>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav left>
                <NavItem>
                  <Link to='/' className="nav-link">Home</Link>
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
                <h1 className="h1Landing align-middle">Tutero</h1>
                
                <Image src="/logo.jpeg"  circle className="profile-pic2 img-fluid rounded-circle hoverable"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            
          </div> 
          <div className="col-6">
          <div className="col-12 container">
            <div id="cajasT">
                <div classname="align-center"> MISION
                <br></br>
                Nuestra mision es transformar la experiencia de cada estudiante nuevo dentro de la institucion en la mejor posible, teniendo en cuenta variables como la vida academica, economica y social del usuario en cuestion.
                </div>
                
            
            </div>
            <br></br>
            <br></br>
            
            <div id="cajasT">
                <div classname="align-center"> VISION
                <br></br>
                Nuestra mision es transformar la experiencia de cada estudiante nuevo dentro de la institucion en la mejor posible, teniendo en cuenta variables como la vida academica, economica y social del usuario en cuestion.
                </div>
            
                
            
            </div>
            <br></br>
            <br></br>
            
            <div id="cajasT">
                <div classname="align-center"> OBJETIVO</div>
                
            
            </div>
      
      
         </div>
        </div>
        </div>
      </div>
      
      <FooterLanding/>
      </div>
    )
  }
}