import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paginacion extends Component {
    handle(pg, e){
        
        this.props.changePage(pg)

    }

    render() {
        const cantidad = this.props.paginas
        const pagina_actual = this.props.actual
        let pages = [];
        let cls = ""
        let isurl = ""
        
        for (var i = 0; i < cantidad; i++){
            if ( (i)  == pagina_actual - 1 ){
                cls ="page-item active"
                isurl = "sr-only"
                console.log("doooso")
                pages.push( <li className="page-item active">
                <a className="page-link"> {i + 1} <span className="sr-only">(current) on</span></a>
            </li>)
               
            } else
            {
                cls ="page-item"
                isurl = "page-link"
                pages.push( <li class={cls}><a class={isurl} href="#" onClick = {this.handle.bind(this, i+1)}>{i+1}</a></li>)
            }
            
        }
        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination pg-blue">
                        {pages}   
                    </ul>
                </nav>


            </div>
        );
    }
}

Paginacion.propTypes = {

};

export default Paginacion;