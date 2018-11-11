import React, { Component } from 'react'
import Menu2 from './Menu2';
import ApiCalendar from 'react-google-calendar-api';
import { logPageView } from '../analytics';

export default class Disponibilidad extends Component{
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        logPageView();
      }
      
       handleItemClick=(event, name)=> {
        if (name === 'sign-in') {
          ApiCalendar.handleAuthClick();
          if (ApiCalendar.sign)
          ApiCalendar.listUpcomingEvents(10)
            .then(({result}) => {
              console.log(result.items);
            });
         
        } else if (name === 'sign-out') {
          ApiCalendar.handleSignoutClick();
        }
      }
    render() {  
       
        return (
            <div>
                <Menu2/>
                <h1>Estas en Disponibilidad</h1>
                <button
                  onClick={(e) => this.handleItemClick(e, 'sign-in')}
              >
                sign-in
              </button>
              <button
                  onClick={(e) => this.handleItemClick(e, 'sign-out')}
              >
                sign-out
              </button>
            </div>
        )
    }
}