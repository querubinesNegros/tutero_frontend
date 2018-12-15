import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import {Chart} from 'chart.js'
import $ from 'jquery';
import FooterAdmin from './FooterAdmin';

export default class Estadisticas extends Component {
  
    state = {}
    
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
      <div id="vistaTutor">
      <MenuAdmin/>
      <div class="container mt-3">
        <div class="row">
            <div class="col-md-3"> 
                <button id="Boton1" class="btn btn-primary"  onClick={this.test}>PBM </button>
                </div>
                <div class="col-md-3">
                <button id="Boton2" class="btn btn-primary" onClick={this.test2}>Estrato </button>
                </div>
                <div class="col-md-3">
                <button id="Boton3" class="btn btn-primary" onClick={this.test3}>Edad </button>
                </div>
                <div class="col-md-3">
                <button id="Boton4" class="btn btn-primary" onClick={this.test4}>Frecuencia </button>
                </div>
        </div>
      </div>
        
        
        <canvas id="myChart" width="400" height="400"></canvas>
        <canvas id="myChart2" width="400" height="400"></canvas>
        <canvas id="myChart3" width="400" height="400"></canvas>
        <canvas id="myChart4" width="400" height="400"></canvas>
        <FooterAdmin/>
      </div>
      
    )
  }
}
