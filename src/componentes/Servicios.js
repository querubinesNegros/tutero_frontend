import React, { Component } from 'react'
import Menu2 from './Menu2';
import Footer from './Footer';
import '../styles/Servicios.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Servicio from './Servicio'
import Estudiante from './Estudiante'
import Perfil from './Perfil'
import baseURL from '../url';
import axios from 'axios';
import { logPageView } from '../analytics';
import Paginacion from './Paginacion'
import ItemListPost from './ItemListPost'
import $ from 'jquery';



export default class Servicios extends Component {
    constructor() {
        super();
        logPageView();
    }
    state = {
        posts: [],
        arr: [],
        page: 1, //pagina en la que está en este instante
        cantidad: 0
    }


    componentDidMount() {
        axios.get(`${baseURL}/posts/pages`)
            .then(res => {
                const pages = res.data.data;
                console.log(res);
                var i;
                var arr = [];
                for (i = 1; i <= pages; i++) {
                    arr[i] = i;
                }
                this.setState({ arr, cantidad: pages });
            })
            .catch(error => {
                console.log(error);
            }
            );
        axios.get(`${baseURL}/posts/page/1`)
            .then(res => {

                const posts = res.data.posts;
                console.log(posts);
                this.setState({ posts });
            })
            .catch(error => {
                console.log(error);
            });
    }

    setField(e) {
        if (e.target.id === 'selectPage') {
            console.log(e.target.value);
            axios.get(`${baseURL}/posts/page/${e.target.value}`)
                .then(res => {
                    const posts = res.data.posts;
                    console.log(res);
                    this.setState({ posts });
                })
                .catch(error => {
                    console.log(error);
                });
        }

    }

    changePage = (nowPage) => {
        this.setState({ page: nowPage })
        axios.get(`${baseURL}/posts/page/${nowPage}`)
            .then(res => {
                const posts = res.data.posts;
                console.log(res);
                this.setState({ posts });
            })
            .catch(error => {
                console.log(error);
            });
    }



    render() {
        const cant = this.state.cantidad;
        const page = this.state.page
        $(document).ready(function () {

            $("#slideshow > div:gt(0)").hide();

            var buttons = "<button class=\"slidebtn prev\"><i class=\"fa fa-chevron-circle-left\"></i></button><button class=\"slidebtn next\"><i class=\"fa fa-chevron-circle-right\"></i></button\>";

            var slidesl = $('.slideitem').length
            var d = "<li class=\"dot active-dot\">&bull;</li>";
            for (var i = 1; i < slidesl; i++) {
                d = d + "<li class=\"dot\">&bull;</li>";
            }
            var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";

            $("#slideshow").append(dots).append(buttons);
            var interval = setInterval(slide, 3000);

            function intslide(func) {
                if (func == 'start') {
                    interval = setInterval(slide, 3000);
                } else {
                    clearInterval(interval);
                }
            }

            function slide() {
                sact('next', 0, 1200);
            }

            function sact(a, ix, it) {
                var currentSlide = $('.current');
                var nextSlide = currentSlide.next('.slideitem');
                var prevSlide = currentSlide.prev('.slideitem');
                var reqSlide = $('.slideitem').eq(ix);

                var currentDot = $('.active-dot');
                var nextDot = currentDot.next();
                var prevDot = currentDot.prev();
                var reqDot = $('.dot').eq(ix);

                if (nextSlide.length == 0) {
                    nextDot = $('.dot').first();
                    nextSlide = $('.slideitem').first();
                }

                if (prevSlide.length == 0) {
                    prevDot = $('.dot').last();
                    prevSlide = $('.slideitem').last();
                }

                if (a == 'next') {
                    var Slide = nextSlide;
                    var Dot = nextDot;
                }
                else if (a == 'prev') {
                    var Slide = prevSlide;
                    var Dot = prevDot;
                }
                else {
                    var Slide = reqSlide;
                    var Dot = reqDot;
                }

                currentSlide.fadeOut(it).removeClass('current');
                Slide.fadeIn(it).addClass('current');

                currentDot.removeClass('active-dot');
                Dot.addClass('active-dot');
            }

            $('.next').on('click', function () {
                intslide('stop');
                sact('next', 0, 400);
                intslide('start');
            });//next

            $('.prev').on('click', function () {
                intslide('stop');
                sact('prev', 0, 400);
                intslide('start');
            });//prev

            $('.dot').on('click', function () {
                intslide('stop');
                var index = $(this).index();
                sact('dot', index, 400);
                intslide('start');
            });//prev
            //slideshow
        });

        return (

            <div id="containerSer">
                <Menu2 />
                <Grid className="grid">
                    <div className="row">
                        <div className="col center-block">
                            <Paginacion paginas={cant} actual={page} changePage={this.changePage} />
                        </div>
                    </div>
                    <Row className="show-grid text-center" >
                        {this.state.posts.map(home => <Col xs={12} sm={4}>
                            <ItemListPost home={home} />
                        </Col>
                        )}
                    </Row>
                </Grid>
                <Footer />
            </div>

        )
    }
}