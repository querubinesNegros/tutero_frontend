import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import { Line, Bar, HorizontalBar, Radar } from "react-chartjs-2";
import { MDBContainer, MDBBtn, MDBCollapse, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import FooterAdmin from './FooterAdmin';
import { logPageView } from '../analytics';

export default class Estadisticas extends Component {
    constructor() {
        super();

        logPageView();
      }
     
      state = {
        collapseID: ""

      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }




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

    
      state2 = {
        dataBar: {
          labels: ["Dificultad económica, personal o familiar", "Bullying", "Entorno social hostil", "Discriminación social"],
          datasets: [
            {
              label: "% de estudiantes",
              data: [12, 19, 3, 5, 100],
              backgroundColor: [
                "rgba(255, 134,159,0.4)",
                "rgba(98,  182, 239,0.4)",
                "rgba(255, 218, 128,0.4)",
                "rgba(113, 205, 205,0.4)",
                "rgba(170, 128, 252,0.4)",
                "rgba(255, 177, 101,0.4)"
              ],
              borderWidth: 2,
              borderColor: [
                "rgba(255, 134, 159, 1)",
                "rgba(98,  182, 239, 1)",
                "rgba(255, 218, 128, 1)",
                "rgba(113, 205, 205, 1)",
                "rgba(170, 128, 252, 1)",
                "rgba(255, 177, 101, 1)"
              ]
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }
    
      state3 = {
        dataHorizontal: {
          labels: ['Malas bases y dificultad académica', 'Desmotivación por el entorno, programa o el docente', 'Inadecuados hábitos y /o método de estudio', 'Falta de apoyo Institucional y/o tutorial'],
          datasets: [
            {
              label: '% de estudiantes',
              data: [22, 33, 55, 12, 100],
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }
          ]
        }
    }


    state4 = {
        dataRadar: {
          labels: ["Estrés o afectación emocional", "Consumo de alcohol o sustancia psicoactivas", "Trastornos psicológicos,  o mentales", "Salud Física: Enfermedad, discapacidad, accidente"],
          datasets: [

            {
              label: "% de estudiantes",
              backgroundColor: "rgba(71, 225, 167, 0.5)",
              borderColor: "rgb(71, 225, 167)",
              data: [28, 48, 20, 19],

            }
          ]
        }
    
      }
    

      state5 = {
        dataBar: {
          labels: ["Depresión severa / Patología Mental", "Intento de Suicidio.", "Retiro voluntario / Cambio de Carrera", "Embarazo o embarazo de la pareja"],
          datasets: [
            {
              label: "% de estudiates",
              data: [15, 13, 20, 5, 100],
              backgroundColor: [
                "rgba(255, 134,159,0.4)",
                "rgba(98,  182, 239,0.4)",
                "rgba(255, 218, 128,0.4)",
                "rgba(113, 205, 205,0.4)",
                "rgba(170, 128, 252,0.4)",
                "rgba(255, 177, 101,0.4)"
              ],
              borderWidth: 2,
              borderColor: [
                "rgba(255, 134, 159, 1)",
                "rgba(98,  182, 239, 1)",
                "rgba(255, 218, 128, 1)",
                "rgba(113, 205, 205, 1)",
                "rgba(170, 128, 252, 1)",
                "rgba(255, 177, 101, 1)"
              ]
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }

    render(){
        console.log(this.state);
    return (
      <div>
      <MenuAdmin/>

      <div class="container mt-4  ">
      <h1 className="mt-5">Caracterización de los cuatro principales grupos causales de deserción </h1>
        <div class="row">
            <div class="col-md-3"> 
                <MDBBtn
                        color="dark-green"
                        onClick={this.toggleCollapse("basicCollapse")}
                        style={{ marginBottom: "1rem" }}
                    >
                    Deserción por causal socio-económica
                </MDBBtn>
                </div>
                <div class="col-md-3">
                <MDBBtn
                    color="dark-green"
                    onClick={this.toggleCollapse("basicCollapse1")}
                    style={{ marginBottom: "1rem" }}
                    >
                    Deserción por causal académica
                </MDBBtn>
                </div>
                <div class="col-md-3">
                <MDBBtn
                    color="dark-green"
                    onClick={this.toggleCollapse("basicCollapse2")}
                    style={{ marginBottom: "1rem" }}
                    >
                    Deserción por causal salud, física y/o mental
                </MDBBtn>
                </div>
                <div class="col-md-3">
                <MDBBtn
                    color="dark-green"
                    onClick={this.toggleCollapse("basicCollapse3")}
                    style={{ marginBottom: "1rem" }}
                    >
                    Deserción por causal crítica(suicidio,embarazo...)
                </MDBBtn>
                </div>
        </div>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <MDBContainer>
                        <h3 className="mt-5">Deserción por causal socio-económica</h3>
                        <Bar data={this.state2.dataBar} options={this.state2.barChartOptions} />
                    </MDBContainer>
        </MDBCollapse>  
        
        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID}>
                    <MDBContainer>
                        <MDBContainer>
                            <h3 className='mt-5'>Deserción por causal académica</h3>
                            <HorizontalBar
                            data={this.state3.dataHorizontal}
                            options={{ responsive: true }}
                            />
                        </MDBContainer>
                    </MDBContainer>
        </MDBCollapse>
        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID}>
                    <MDBContainer>
                        <MDBContainer>
                            <h3 className="mt-5">Deserción por causal salud, física y/o mental</h3>
                            <Radar data={this.state4.dataRadar} options={{ responsive: true }} />
                        </MDBContainer>
                    </MDBContainer>
        </MDBCollapse>  
        <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID}>
                    <MDBContainer>
                        <h3>Deserción por causal crítica(suicidio,embarazo...)</h3>
                        <Bar data={this.state5.dataBar} options={this.state5.barChartOptions} />
                    </MDBContainer>
        </MDBCollapse>    
      </div>
        



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
