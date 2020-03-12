import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import {Chart} from 'chart.js'
import { Line } from "react-chartjs-2";
import { MDBContainer, MDBBtn } from "mdbreact";
import $ from 'jquery';
import FooterAdmin from './FooterAdmin';
import { logPageView } from '../analytics';

export default class Estadisticas extends Component {
    constructor() {
        super();

        logPageView();
      }
    state = {}
    state1 = {
        dataLine: {
          labels: ["2020-I", "2020-II", "2021-I", "2021-II", "2022-I", "2022-II"],
          datasets: [
            {
              label: "# estudiantes matriculados",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(225, 204,230, .3)",
              borderColor: "rgb(205, 130, 158)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(205, 130,1 58)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [15000, 15700, 16400, 17000, 17700, 18000]
            },
            {
              label: "índice de deserción en # de estudiantes",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(184, 185, 210, .3)",
              borderColor: "rgb(35, 26, 136)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(35, 26, 136)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [3000, 2800, 2300, 1900, 1200, 750]
            }
          ]
        }
      };
    componentDidMount(){
        var _this = this;
        axios.get(`${baseURL}/users/${store.getState().id}/admin/estadisticas.json`)
        .then((response) => {
            console.log(response);
            _this.setState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    
    
    
    test = () =>{
        console.log(this.state);
        var data = this.state.estudiantes_por_PBM;
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.getOwnPropertyNames(data),
                datasets: [{
                    label: '# of Votes',
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
           $("#Boton1").prop('disabled',true);
           $("#Boton2").prop('disabled',false);
           $("#Boton4").prop('disabled',false);
           $("#Boton3").prop('disabled',false);
           $("#myChart").show();
           $("#myChart2").hide();
           $("#myChart3").hide();
           $("#myChart4").hide();
    }
    
    test2 = () =>{
        console.log(this.state);
        
        var data= this.state.estudiantes_por_estrato;
        var ctx = document.getElementById("myChart2").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.getOwnPropertyNames(data),
                datasets: [{
                    label: '# of Votes',
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
           $("#Boton2").prop('disabled',true);
           $("#Boton4").prop('disabled',false);
           $("#Boton1").prop('disabled',false);
           $("#Boton3").prop('disabled',false);
           $("#myChart").hide();
           $("#myChart2").show();
           $("#myChart3").hide();
           $("#myChart4").hide();
    }
    
    test3 = () =>{
        console.log(this.state);
        
        var data= this.state.estudiantes_por_edad;
        var ctx = document.getElementById("myChart3").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.getOwnPropertyNames(data),
                datasets: [{
                    label: '# of Votes',
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
           $("#Boton3").prop('disabled',true);
           $("#Boton2").prop('disabled',false);
           $("#Boton1").prop('disabled',false);
           $("#Boton4").prop('disabled',false);
           $("#myChart2").hide();
           $("#myChart").hide();
           $("#myChart3").show();
           $("#myChart4").hide();
        
        
    }
    
    test4 = () =>{
        console.log(this.state);
        
        var data= this.state.frecuencia_temas_tutorias;
        var ctx = document.getElementById("myChart4").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.getOwnPropertyNames(data),
                datasets: [{
                    label: '# of Votes',
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                        
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
           $("#Boton4").prop('disabled',true);
           $("#Boton2").prop('disabled',false);
           $("#Boton1").prop('disabled',false);
           $("#Boton3").prop('disabled',false);
           $("#myChart2").hide();
           $("#myChart").hide();
           $("#myChart4").show();
           $("#myChart3").hide();
    }

  
    render() {
        console.log(this.state);
    return (
      <div>
      <MenuAdmin/>
      <div class="container mt-4  ">
      <h1 className="mt-5">Caracterización de los cuatro principales grupos causales de deserción </h1>
        <div class="row">
            <div class="col-md-3"> 
                <MDBBtn id="Boton1" color="dark-green"  onClick={this.test}>deserción por causal socio-econónica</MDBBtn>
                
                </div>
                <div class="col-md-3">
                <MDBBtn id="Boton2" color="dark-green" onClick={this.test2}>deserción por causal académica</MDBBtn>
                </div>
                <div class="col-md-3">
                <MDBBtn id="Boton3" color="dark-green" onClick={this.test3}>deserción por causal salud, física y/o mental</MDBBtn>
                </div>
                <div class="col-md-3">
                <MDBBtn id="Boton4" color="dark-green" onClick={this.test4}>deserción por causal crítica(suicidio,embarazo...)</MDBBtn>
                </div>
        </div>
      </div>
        
        <canvas id="myChart" width="50" height="50"></canvas>
        <canvas id="myChart2" width="50" height="50"></canvas>
        <canvas id="myChart3" width="50" height="50"></canvas>
        <canvas id="myChart4" width="50" height="50"></canvas>

        <MDBContainer>
            <h3 className="mt-5">Caracterización del entorno de deserción e inclusión </h3>
            <h5 className="mt-5">Análisis gráfico y analítico con la proyección de los datos </h5>
            <Line data={this.state1.dataLine} options={{ responsive: true }} />
        </MDBContainer>
        <MDBContainer style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <MDBBtn color="dark-green">Descargar en .xls</MDBBtn> 
        <MDBBtn color="dark-green">Descargar en .doc</MDBBtn>       
        </MDBContainer>
        <FooterAdmin/>
      </div>
      
    )
  }
}
