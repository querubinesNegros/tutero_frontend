import React, { Component } from 'react';


class Archivo extends Component {
    actionButton(param){
        if( this.props.type == "delete"){
            this.props.remove(param)
        }else{
            this.props.download(param)
        }
        
    }
    
    render() {
        let clsname  = "";
        let type_button = "";
        let txt = "";
        if (this.props.ext == "pdf" || this.props.ext == "Pdf" ){
            clsname = "fa fa-file-pdf-o fa-2x"
        }else{
            clsname = "fa fa-file-image-o fa-2x"
        }
        if (this.props.type == "delete"){
            type_button = "btn btn-danger btn-sm"
            txt = "Borrar"
        }else{
            type_button = "btn btn-default btn-sm"
            txt = "Descargar"
        }
        

        return (
            <div>
                  <i className={clsname}></i> <br/>{this.props.name} <br/>
                  <button type="button"  className={type_button} onClick = {this.actionButton.bind(this, this.props.id_r)}>{txt}</button>     
            </div>
        );
    }
}

export default Archivo;