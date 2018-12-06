import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu2 from './Menu2';
import { logPageView } from '../analytics';

export default class VerNota extends Component {
    constructor(props){
        super(props);
        logPageView();
    }
    render(){
        
        return(
            <div>
                <Menu2/>
                <div>Esta es la tutoría {this.props.id} </div>
            </div>
        )
    }
}

