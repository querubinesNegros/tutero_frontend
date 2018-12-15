import React, { Component } from 'react';
import Menu2 from '../Menu2'
import Carrera from './Carrera'
import ListaTutores from './ListaTutores';
import store from '../../store';
import axios from 'axios'
import baseURL from '../../url';
import baseURLFront from '../../urlFront';
import Disponibilidad from './Disponibilidad'
class Steps extends Component {
    constructor() {
        super();
        this.step = this.step.bind(this);
        this.prev = this.prev.bind(this);
        this.setTutor = this.setTutor.bind(this);
        this.state = {
            now: 1,
            steps: ["active" , "" ,""],
            id_career: null,
            tutors: [],
            tutor_id : null,
            index: null
        }
    }

    step(number, id, key) {
        var st = number - 1 //cambio de pagina number, pagina a ir
        ///users/:user_id/student/get_tutors
        if (this.state.steps[st] == "" &&  st == 1 && this.state.now == 1 ) {
            this.state.steps[st] = "active";
            this.state.steps[st - 1] = "completed";
            const id = store.getState().id


            axios.get(`${baseURL}/users/{id}/student/get_tutors`)
            .then(res => {
                console.log(res.data);
                const profiles = res.data.profiles;
                this.setState({ tutors: profiles });
                
            })
            .catch(function (error) {
                console.log(error);
            });
            //fin de la peticion
            this.setState({ now: number, id_career: id })
        }
        else if (this.state.now == 2 && st == 2) {
            this.state.steps[st] = "active"
            this.setState({ now: number, tutor_id: id, index: key})
        } 
    }
    prev(number_page){
        this.state.steps[number_page] = ""
        this.setState( { now: number_page})
    }
    setTutor(tutor_ids, skey){
        const ks = this.state.index
        const student = {
            tutor_id: this.state.tutors[ks].userable_id
        }
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.patch(`${baseURL}/users/${store.getState().id}/student/` , {student}).then((response) => {

            setTimeout(() => {
                this.setState({ notification: "" });
              }, 6000);

        })
        .catch(function (error) {
            console.log(error);
        });

        setTimeout(function () { window.location = `${baseURLFront}/estudiante`; }, 1000);
        
    }
    
    

    render() {
        let states_steps = this.state.steps;
        let show = null;
        if(this.state.now == 1){
            show = <Carrera nextStep={this.step} />
        }else if (this.state.now == 2 ){
            show = <ListaTutores tutors = {this.state.tutors} nextStep={this.step}/>
        }else if(this.state.now == 3){
           show =  <Disponibilidad tutor_id = {this.state.tutor_id} prevPage = {this.prev}  setTutor = {this.setTutor} skey = {this.setState.index}/>
        }



        return (
            <div>
                <Menu2 />
                <div className="row">
                    <div className="col-md-12">
                        <ul className="stepper stepper-horizontal">

                            <li className={states_steps[0]}>
                                <a href="#!">
                                    <span className="circle">1</span>
                                    <span className="label">Selecciona tu carrera</span>
                                </a>
                            </li>

                            <li className={states_steps[1]}>
                                <a href="#!">
                                    <span className="circle">2</span>
                                    <span className="label">Selecciona tu tutor</span>
                                </a>
                            </li>

                            <li className={states_steps[2]}>
                                <a href="#!">
                                    <span className="circle"><i className="fa fa-warning"></i></span>
                                    <span className="label">Confirma el horario del tutor</span>
                                </a>
                            </li>
                        </ul>
                        <div classNameName="col-md-12">
                            {show}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Steps;       