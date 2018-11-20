import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Schedule.css';

class Disp extends Component {
    constructor(){
        super()
        this.state = {
            ref_hour : [],
            hover : [],
            text : [],
            hov : "active",
            day : "",
            hour: ""
        };
        
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.location.state === 'desiredState') {
          alert(nextProps.location.state)
        }
      }
    componentDidMount (){
        var i;
        for (i = 0; i< 97 ; i++){ this.state.ref_hour[i] = React.createRef();
         this.state.hover[i] = "active" ;
         console.log(this.state.hover[i])
         this.state.text[i] = "----------" ;
        } 
    }
        handleClick (param, e ){
            alert(param);
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
        }
        this.state.text[param] = texts;
        this.setState({hov: "tSte" , day: days[n], hour: h  })
        
    }
    onHoverHourLeave(param, e){
        let texts;
        this.state.hover[param] = "active"; 
        //this.state.text[param] = "----------"
        if (this.state.text[param] == "agregar") {
            texts = "----------";
        }
        this.state.text[param] = texts;
        this.setState({hov: "passive",  day: "", hour: 0}) 
    }
    render() {
        let hour_html_array= [];
        const hover_background =[];
        const name_day = this.state.day;
        let hour;
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

       
        for (i = 0; i < 97; i++) hover_background[i] = this.state.hover[i];
        
        for(j = 1; j < 17; j ++  ){
            hour_html_array[j] = ""
            for (i = 0; i < 6; i++ ){
                k = i*16+j;
                hour_html_array[j] = <view>{hour_html_array[j]} <li ><span className={hover_background[k]}   onMouseEnter = {this.onHoverHourEnter.bind(this, k)} onMouseLeave= {this.onHoverHourLeave.bind(this, k) } onClick = {this.handleClick.bind(this, k)}  >  {this.state.text[k]} </span> </li></view>
                console.log(k + " , " + i  + " , "  + j  )
            }
        }
        
        
        return (
        <div>
            <div  className =  "month">
            
                 <h4> Horario disponibilidad</h4>
                 
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

        </div>
                        
        );
    }
}

Disp.propTypes = {

};

export default Disp;