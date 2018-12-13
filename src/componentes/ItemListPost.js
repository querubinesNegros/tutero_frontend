import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ItemListPost extends Component {
    subStringDescription(text){
        var sub_s = ""
        if(text.length > 100 ){
            sub_s = text.substring(0, 100);
            sub_s = sub_s.concat("...");
        }else{
            sub_s = text;
        }
        return sub_s;
    }

    render() {
        
        return (
            <div>
                <div className="card border-dark">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.home.name}</h5>
                        <p className="card-text">{this.subStringDescription(this.props.home.description)}</p>
                        <Link to={{pathname:`/servicio/${this.props.home.id}`, state: this.props.home}} >Servicios</Link>

                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemListPost;