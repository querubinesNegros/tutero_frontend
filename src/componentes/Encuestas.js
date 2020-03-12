import React, { Component } from 'react'
import MenuTutor from './MenuTutor'
import FooterTutor from './FooterTutor'
import { MDBFormInline, MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import swal from 'sweetalert2';

export default class Encuestas extends Component {
    state = {
        radio: ''
      };
    
      onClick = nr => () => {
        this.setState({
          radio: nr
        });
      };

    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log("HOLASASDASDAFFFFASFASF");
        swal("Se actualizó la información satisfactoriamente");
      }  
    render() {
        return ( 
        
        <div>
            <MenuTutor/>
            <MDBContainer style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <MDBRow>
                <MDBCol>
                <br></br>
                <br></br>
                <br></br>
                <h1>DIAGNOSTICO DEL ENTORNO DE ENTORNO ESTUDIANTIL EN INCLUSION Y PERMANENCIA. </h1>
                <h3>MODULO DE ENCUESTA AL ESTUDIANTE. </h3>
                <p style={{textAlign: 'justify'}}>Bienvenido a la encuesta de análisis de INCLUSION Y PERMANENCIA  universitaria. Llena tus datos personales en la casillas a continuación (nombre, código, sexo, etc.) para que estos queden registrados en nuestra base de datos y así podremos utilizarlos para hacer un seguimiento a los estudiantes y conocer mejor sus situaciones actuales en las que requieran apoyo para reducir riesgos de deserción y mejorar los procesos de Inclusión y Permanencia en la Universidad. Si lo deseas, puedes omitir el llenar estos campos y realizar la encuesta de todas formas. </p>
                <MDBContainer>
                    <p className="text-justify">Pregunta 1: Califica de 0 a 5 tu perseverancia, siendo 0 poco perseverante y 5 muy perseverante.</p>
                </MDBContainer>   
                <MDBFormInline style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <MDBInput
                    gap
                    onClick={this.onClick(1)}
                    checked={this.state.radio === 1 ? true : false}
                    label='1'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(2)}
                    checked={this.state.radio === 2 ? true : false}
                    label='2'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(3)}
                    checked={this.state.radio === 3 ? true : false}
                    label='3'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(4)}
                    checked={this.state.radio === 4 ? true : false}
                    label='4'
                    type='radio'
                    id='radio4'
                    containerClass='mr-5'
                    />
                </MDBFormInline>
                <MDBContainer>
                    <p className="text-justify">Pregunta 2: Califica de 0 a 5 tus expectativas de éxito en lo académico, siendo 0 pocas expectativas y 5 las mejores expectativas.</p>
                </MDBContainer>   
                <MDBFormInline style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <MDBInput
                    gap
                    onClick={this.onClick(5)}
                    checked={this.state.radio === 5 ? true : false}
                    label='1'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(6)}
                    checked={this.state.radio === 6 ? true : false}
                    label='2'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(7)}
                    checked={this.state.radio === 7 ? true : false}
                    label='3'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(8)}
                    checked={this.state.radio === 8 ? true : false}
                    label='4'
                    type='radio'
                    id='radio4'
                    containerClass='mr-5'
                    />
                </MDBFormInline>
                <MDBContainer>
                    <p className="text-justify">Pregunta 3: Califica de 0 a 5 tus habilidades para estudiar, siendo 0 poco hábil y 5 muy hábil.</p>
                </MDBContainer>   
                <MDBFormInline style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <MDBInput
                    gap
                    onClick={this.onClick(9)}
                    checked={this.state.radio === 9 ? true : false}
                    label='1'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(10)}
                    checked={this.state.radio === 10 ? true : false}
                    label='2'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(11)}
                    checked={this.state.radio === 11 ? true : false}
                    label='3'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={this.onClick(12)}
                    checked={this.state.radio === 12 ? true : false}
                    label='4'
                    type='radio'
                    id='radio4'
                    containerClass='mr-5'
                    />
                </MDBFormInline>
                <MDBBtn outline color="btn btn-dark-green btn-rounded" onClick={this.handleSubmit}>Enviar</MDBBtn>
                </MDBCol>

            </MDBRow>
            
            </MDBContainer>
            
            <FooterTutor/>
        </div>)
    }
}