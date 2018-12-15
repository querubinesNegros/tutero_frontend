import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import '../styles/Schedule.css';
import store from '../store';
import baseURL from '../url';
import axios from 'axios';
import Menu2 from './Menu2';
import Success from './Notificaciones/Success'

class Disp extends Component {
    constructor(){
        super()
        this.state = {
            ref_hour : [],
            hover : [],
            text : [],
            hov : "active",
            day : "",
            hour: "",
            schedules: [],
            notification : ""
        };
        
    }
    
    componentDidMount (){
        var i;
        for (i = 0; i< 97 ; i++){ this.state.ref_hour[i] = React.createRef();
         this.state.hover[i] = "active" ;
         //console.log(this.state.hover[i])
         this.state.text[i] = "----------" ;
        } 
    }
    handleClick (param, e ){
        
        if (this.state.text[param] == "agregar" ){
            this.state.schedules.push(param);
            this.state.text[param] = "remover"

        }else if (this.state.text[param] == "remover" ){
            this.state.schedules.shift(param);
            this.state.text[param] = "agregar"
        }
        this.setState({hov: "tSte"});
        console.log(this.state.schedules)
    }
    setSchedule(e){
         
        const ids ={schedule_ids: this.state.schedules}
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.post(`${baseURL}/users/${store.getState().id}/student/schedules` , {ids}).then((response) => {
            const schedulesdata = response.data.schedules;
            this.setState({schedules: schedulesdata});
            console.log(response.data.schedules);

            if (response.status == 201)  this.setState({notification: "created"});
            if (response.status == 422)  this.setState({notification: "fail-created"});

            setTimeout(() => {
                this.setState({ notification: "" });
              }, 6000);

        })
        .catch(function (error) {
            console.log(error);
        });

    }
    getTutor(e ){
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.get(`${baseURL}/users/${store.getState().id}/student/get_tutors`)
            .then((response) => {
                console.log("response")
                console.log(response.data.profiles)
                const schedulesdata = response.data.schedules;           
                this.setState({hov: "tSte"});
                this.setState({hov: "tSte"});
            })
            .catch(function (error) {
                console.log(error);
            });
        
        this.setState({hov: "tSte"});
        

    }
    getSchedule ( e ){
         var i;
         var item;
         for (i = 0; i< 97 ; i++){ this.state.ref_hour[i] = React.createRef();
         this.state.hover[i] = "active" ;
        // console.log(this.state.hover[i])
         this.state.text[i] = "----------" ;
        }
        this.state.schedules = [];
        this.setState({hov: "tSte"});
        
        console.log(`${baseURL}/users/${store.getState().id}/student/schedules`)
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
        axios.get(`${baseURL}/users/${store.getState().id}/student/schedules`)
            .then((response) => {
                const schedulesdata = response.data.schedules;
           
                for(i = 0; i<schedulesdata.length ; i++ ){
                    this.state.schedules.push(schedulesdata[i].id);
                }
                this.setState({hov: "tSte"});
               // this.setState({schedules: schedulesdata});
                console.log(this.state.schedules);
                for ( i = 0; i < this.state.schedules.length; i++){
                    item = this.state.schedules[i]
                    this.state.hover[item] = "bussy" ;
                // console.log(this.state.hover[i]) 
                    this.state.text[item] = "disponible" ;
                }
                this.setState({hov: "tSte"});
            })
            .catch(function (error) {
                console.log(error);
            });
        
        this.setState({hov: "tSte"});
        
        
        
    }
    onHoverHourEnter(param, e){
        const days = ["Lunes", "Martes", "Miercoles", "Jueves" , "Viernes" , "Sabado"] ;
        let n = Math.floor(param/16);
        let h = param % 16
        let texts;
        h = h + 6
        if (h == 6) h = 22;
        if (n == 6) n = n-1;
        this.state.hover[param] = "passive";
        
        if (this.state.text[param] == "----------") {
            texts = "agregar";
        }else if(this.state.text[param] == "disponible"){
            texts = "remover";
        }
        this.state.text[param] = texts;
        this.setState({hov: "tSte" , day: days[n], hour: h  })
        
    }
    onHoverHourLeave(param, e){
        let texts;
        if (this.state.text[param] == "agregar") {
            texts = "----------";
            this.state.hover[param] = "active"; 
        
        }
        if (this.state.text[param] == "remover") {
            texts = "disponible";
            this.state.hover[param] = "bussy"; 
        
        }
        this.state.text[param] = texts;
        this.setState({hov: "passive",  day: "", hour: 0}) 
    }
    render() {
        let hour_html_array= [];
        const hover_background =[];
        const name_day = this.state.day;
        let hour;
        let content_not;
        var i, j, k;
        if(this.state.hour == 0){
            hour = "";
        }
        else if (this.state.hour < 10){
           hour = "0" + this.state.hour + ":00 am" ;            
        }else if (this.state.hour >= 10  && this.state.hour < 13 ){ 
            hour = this.state.hour + ":00 am" ;
        }else if(this.state.hour >= 13){
            hour = this.state.hour-12 + ":00 pm" ;
        }

        if (this.state.notification == ""){
            content_not = null;
        }

        if (this.state.notification == "created"){
            content_not =  <Success />;
        }
        if (this.state.notification == "created"){
            content_not =  <Success />;
        }
       
        for (i = 0; i < 97; i++) hover_background[i] = this.state.hover[i];
        
        for(j = 1; j < 17; j ++  ){
            hour_html_array[j] = ""
            for (i = 0; i < 6; i++ ){
                k = i*16+j;
                hour_html_array[j] = <view>{hour_html_array[j]} <li ><span className={hover_background[k]}   onMouseEnter = {this.onHoverHourEnter.bind(this, k)} onMouseLeave= {this.onHoverHourLeave.bind(this, k) } onClick = {this.handleClick.bind(this, k)}  >  {this.state.text[k]} </span> </li></view>
                //console.log(k + " , " + i  + " , "  + j  )
            }
        }
        
        
        return (
        <div id="vistaTutor">
            <Menu2/>
            {content_not}
            <div  className =  "month">
            <button  className="btn btn-default sbutton"   onClick={this.setSchedule.bind(this)}>REALIZAR CAMBIOS</button>   
            <button  className="btn btn-default sbutton"   onClick = {this.getSchedule.bind(this)}>MOSTRAR</button>
            
                 <ul>
                    <li>Dia - Hora </li>
                    <li>{name_day} - {hour} </li>
                </ul>
            </div>
            <ul className="weekdays">
                <li>Hora</li>
                <li>Lunes</li>  
                <li>Martes</li>
                <li>Miercoles</li>
                <li>Jueves</li>
                <li>Viernes</li>
                <li>Sabado</li>
            </ul>
            
            <ul className="days"  id = "3" ref = {this.hour} >  
                <li>07:00 am</li>
                {hour_html_array[1]}
                <li>08:00 am</li>
                {hour_html_array[2]}
                <li>09:00 am</li>
                {hour_html_array[3]}
                <li>10:00 am</li>
                {hour_html_array[4]}
                <li>11:00 am</li>
                {hour_html_array[5]}
                <li>12:00 pm</li>
                {hour_html_array[6]}
                <li>01:00 pm</li>
                {hour_html_array[7]}
                <li>02:00 pm</li>
                {hour_html_array[8]}
                <li>03:00 pm</li>
                {hour_html_array[9]}
                <li>04:00 pm</li>
                {hour_html_array[10]}
                <li>05:00 pm</li>
                {hour_html_array[11]}
                <li>06:00 pm</li>
                {hour_html_array[12]}
                <li>07:00 pm</li>
                {hour_html_array[13]}
                <li>08:00 pm</li>
                {hour_html_array[14]}
                <li>09:00 pm</li>
                {hour_html_array[15]}
                <li>10:00 pm</li>
                {hour_html_array[16]}
              

               
               
            </ul>
            <Footer/>
        </div>
                        
        );
    }
}

Disp.propTypes = {

};

export default Disp;