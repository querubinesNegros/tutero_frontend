import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Menu2 from "./Menu2";
import axios from 'axios';
import baseURL from '../url';
import store from '../store';
import { Redirect } from 'react-router-dom'
import Success from './Notificaciones/Success'
const divStyle = {
    height: '20vh'

};

const divStyle2 = {
    height: '80vh'

};
class Carrera extends Component {
    career = React.createRef();



    state = {
        careers: [],
        notification: false,
        redirect : false,
        rol: "",
        my_caerer: null
    }
    getCareers = () => {
        axios.get(`${baseURL}/careers`)
            .then(res => {
                console.log(res.data);
                const careers = res.data.careers;
                this.setState({ careers });
                
            })
            .catch(function (error) {
                console.log(error);
            });

        
    };
    doChange = (e) => {
        const info = {
            
            career_id: this.career.current.value
        }
        
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${store.getState().id}`, { "user": info }).then((response) => {
            const schedulesdata = response.data.schedules;
            this.setState({ schedules: schedulesdata });
            console.log(response.data.schedules);
            if (response.status == 200){
                this.setState({ notification: true});
                setTimeout(() => {
                    this.setState({redirect: true,  rol: store.getState().userable_type})
                  }, 2000 );
            } 


        })
            .catch(function (error) {
                console.log(error);
            });



    }
    componentDidMount() {
        
        this.getCareers();
        
    }
    render() {
        if (this.state.rol =="Student" )return <Redirect push to="/estudiante" />;
        if (this.state.rol =="Admin" ) return <Redirect push to="/admin" />;
        if (this.state.rol =="Tutor" ) return <Redirect push to="/tutor" />;
        const not = this.state.notification;
        let content_not;
        if (not == true) {
            content_not = <Success />
        } else {
            content_not = null

        }
        return (
            <div>

                <Menu2 />
                {content_not}
                <div style={divStyle}></div>
                <div className="container ">
                
                    <h2>
                        Selecciona tu carrera antes de continuar
                     </h2>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 center-block" />
                        <select className="form-control" ref={this.career}>
                            {this.state.careers.map(home => <option key={home.id} value={home.id}>{home.name}</option>)}
                        </select>
                    </div>
                    <div className="row">
                        <div className="col center-block">
                            <button className="btn  btn-raised btn-primary" onClick={this.doChange}  >Realizar cambios</button>
                        </div>
                    </div>

                </div>
                <div style={divStyle2}></div>


                <Footer />
            </div>
        );
    }
}

Carrera.propTypes = {};

export default Carrera;
