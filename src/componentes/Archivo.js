import React, { Component } from 'react';


class Archivo extends Component {
    delete(param){
        
        this.props.remove(param)
    }
    
    render() {
        let clsname  = "";
        if (this.props.ext == "pdf"){
            clsname = "fa fa-file-pdf-o fa-2x"
        }else{
            clsname = "fa fa-file-image-o fa-2x"
        }
        return (
            <div>
                  <i className={clsname}></i> <br/>{this.props.name} <br/>
                  <button type="button"  className="btn btn-danger btn-sm" onClick = {this.delete.bind(this, this.props.id_r)}>Borrar</button>     
            </div>
        );
    }
}

export default Archivo;