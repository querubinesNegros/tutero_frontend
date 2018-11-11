import React, { Component } from 'react'
import store from '../store';
import baseURL from '../url';
import baseURLFront from '../urlFront';
import axios from 'axios';
import {Chart} from 'chart.js'

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
                labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
                datasets: [{
                    label: '# of Votes',
                    data: data,
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
        
    }

  
    render() {
        console.log(this.state);
    return (
      <div>
        <button class="btn btn-primary" onClick={this.test}>Click</button>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )
  }
}
