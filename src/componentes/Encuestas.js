import React, { Component } from 'react'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import swal from 'sweetalert2';
import '../styles/Encuestas.css'

export default class Encuestas extends Component {
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log("HOLASASDASDAFFFFASFASF");
        swal("Se actualizó la información satisfactoriamente");
      }  
    render() {
        return ( 
        
        <div>
            <MDBContainer style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <MDBRow>
                <MDBCol>
                <br></br>
                <br></br>
                <br></br>
                <h1>DIAGNOSTICO DEL ENTORNO DE ENTORNO ESTUDIANTIL EN INCLUSION Y PERMANENCIA. </h1>
                <h3>MODULO DE ENCUESTA AL ESTUDIANTE. </h3>
                <p style={{textAlign: 'justify'}}>Bienvenido a la encuesta de análisis de INCLUSION Y PERMANENCIA  universitaria. Llena tus datos personales en la casillas a continuación (nombre, código, sexo, etc.) para que estos queden registrados en nuestra base de datos y así podremos utilizarlos para hacer un seguimiento a los estudiantes y conocer mejor sus situaciones actuales en las que requieran apoyo para reducir riesgos de deserción y mejorar los procesos de Inclusión y Permanencia en la Universidad. Si lo deseas, puedes omitir el llenar estos campos y realizar la encuesta de todas formas. </p>
                <br></br>
                <div className="question">
                    <h5>¿Aceptas los términos y condiciones? </h5>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                </div>
                <br></br>
                <MDBContainer style={{textAlign: 'justify'}}>
                    <MDBRow>
                        <MDBCol>
                        <form>
                            <p className="h5 text-justify py-4">Datos personales</p>
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
                            Nombre
                            </label>
                            <input type="text" id="defaultFormCardNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">
                            Edad
                            </label>
                            <input type="email" id="defaultFormCardEmailEx" className="form-control" />
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
                            Sexo
                            </label>
                            <input type="text" id="defaultFormCardNameEx" className="form-control" />
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
                            Estado civil
                            </label>
                            <input type="text" id="defaultFormCardNameEx" className="form-control" />
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
                            Código estudiantíl
                            </label>
                            <input type="text" id="defaultFormCardNameEx" className="form-control" />
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br></br>
                <div className="question">
                    <p>A continuación encuentras un cuestionario con preguntas a evaluar de 0 a 5 para apoyarte con tu permanencia en la institución hasta completar tus estudios</p>
                    <br></br>
                    <p>Pregunta 1: Califica de 0 a 5 tu perseverancia, siendo 0 poco perseverante y 5 muy perseverante.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 2: Califica de 0 a 5 tus expectativas de éxito en lo académico, siendo 0 pocas expectativas y 5 las mejores expectativas.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 3: Califica de 0 a 5 tus habilidades para estudiar, siendo 0 poco hábil y 5 muy hábil.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 4: Califica de 0 a 5 la situación actual de tu entorno y ambiente familiar siendo 0 una mala situación y 5 una buena situación.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 5: Califica de 0 a 5, siendo 0 negativa y 5 positiva, tu situación actual en la universidad en general, considera el ambiente, profesores y compañeros.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 6: Califica de 0 a 5 tu satisfacción con el sistema académico siendo 0 insatisfecho y 5 muy satisfecho.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 7: Califica de 0 a 5 la división de recreación y deporte de la universidad, siendo 0 de mala calidad y 5 de muy buena calidad.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 8: Califica de 0 a 5 la calidad de la enseñanza en la universidad, siendo 0 de mala calidad y 5 de muy buena calidad.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 9: Califica de 0 a 5 la calidad de los docentes universitarios, siendo 0 de mala calidad y 5 de muy buena calidad.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 10: Califica de 0 a 5 la disponibilidad de recursos en la universidad siendo 0 poco disponibles y 5 muy disponibles.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 11: Califica de 0 a 5 el costo-beneficio de estudiar en la universidad, siendo 0 mucho costo poco beneficio y 5 poco costo y mucho beneficio.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 12: Califica de 0 a 5 tu situación económica, siendo 0 mala y 5 excelente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 13: Califica de 0 a 5 el nivel educativo de tus padres, siendo 0 bajo y 5 alto.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 14: Califica de 0 a 5 tu adaptación a la universidad, siendo 0 poco adaptado y 5 muy adaptado.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 15: Califica de 0 a 5 tu desempeño académico, siendo 0 malo y 5 excelente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 16: Califica de 0 a 5 la compatibilidad de tu horario con actividades extra académicas (trabajo, actividades, segundo estudio), siendo 0 poco compatible y 5 muy compatible.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 17: Califica de 0 a 5 tu satisfacción con la carrera que elegiste, siendo 0 poco satisfecho y 5 muy satisfecho.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 18: Califica de 0 a 5 el nivel académico de tu colegio, siendo 0 malo y 5 excelente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 19: Califica de 0 a 5 la calidad de tu programa académico, siendo 0 malo y 5 excelente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 20: Califica de 0 a 5 tus resultados en las pruebas Saber o el examen de ingreso a la universidad, siendo 0 malos y 5 excelentes.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 21: Califica de 0 a 5 los servicios de financiamiento que has tenido para tus estudios siendo 0 malos y 5 buenos.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 22: Califica de 0 a 5 la situación de orden público alrededor de tu vida universitaria, siendo 0 una mala situación y 5 una buena situación.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 23: Califica de 0 a 5 la interacción entre docentes y estudiantes, siendo 0 mala y 5 buena.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 24: Califica de 0 a 5 el apoyo académico que ofrece tu programa, siendo 0 malo y 5 excelente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 25: Califica de 0 a 5 el apoyo psicológico que ofrece la universidad, siendo 0 malo y 5 excelente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 26: Califica de 0 a 5 tu situación laboral, siendo 0 mala o inexistente y 5 buena.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 27: Califica de 0 a 5 la situación laboral e ingreso de tus padres, siendo 0 una mala situación y 5 una buena situación.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 28: Califica de 0 a 5 la dependencia económica con tus padres, siendo 0 independiente y 5 totalmente dependiente.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>0</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>1</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>2</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>3</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>4</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>5</span></label>
                    </div>
                    <p>Pregunta 29: ¿Consume actualmente algún tipo de sustancia alucinogena?.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 30: ¿Se encuentran tú o tu pareja en estado de embarazo en este momento?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 31: ¿Has tenido en el pasado algún tipo de conducta depresiva?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 32: ¿Has tenido en el pasado algún intento de suicidio?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 33: ¿Tienes actualmente algún tipo de preocupación que consideras que afecta tu desempeño academico?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 34: ¿Sufres actualmente de algún grado de depresión?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 35: ¿Has tenido ideas suicidas en el ultimo año?

                    Si consideras afirmativa la respuesta quisiéramos poder acompañarte. Cómunicate con el área de bienestar universitario.</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 36: ¿Alguna vez has intentado suicidarte?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 37: ¿Te sientes sometido a algún tipo de acoso sexual actualmente en tu entorno familiar?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <p>Pregunta 38: ¿Te sientes sometido a algún tipo de acoso sexual actualmente en tu entorno universitario?</p>
                    <div className="question-answer">
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>si</span></label>
                        <label><input type="radio" defaultValue="none" name="membership" required /> <span>no</span></label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                        Deja un comentario adicional que nos quieras compartir
                        </label>
                        <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        />
                    </div>


                </div> 
                <MDBBtn outline color="btn btn-dark-green btn-rounded" onClick={this.handleSubmit}>Enviar</MDBBtn>   
                </MDBCol>

            </MDBRow>
            
            </MDBContainer>
        </div>)
    }
}