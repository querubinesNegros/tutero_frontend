import React, { Component } from 'react'


export default class Answer extends Component {  
  

  render() {
    return (
      <div className="card">        
        <div className="card-body"> 
          <p className="card-subtitle">{this.props.content}</p>                       
          <p className="card-text">Usuario:{(this.props.user.userable_type) + " " + 
          (this.props.user.name) + ' ' + (this.props.user.lastname)}</p>                             
        </div>
      </div>       
    )
  }

}
