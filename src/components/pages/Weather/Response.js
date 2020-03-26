import React, {Component } from 'react';
import FadeIn from 'react-fade-in';

// import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMapMarker } from '@fortawesome/free-solid-svg-icons'; 

class Response extends Component {
     
    tempRound() { 
        let temp = Math.round(this.props.temp);
        return temp + " °"
    }
    

    getIcon() {  
        return  <div className="icon" id='ic' style = {{backgroundImage : `url('http://openweathermap.org/img/wn/${this.props.icon}@2x.png')` }}></div>
    }
    
    render() {
        return ( 
            <div className='last'>
                {this.props.error && this.props.error}
                {this.props.city  && 
                <FadeIn> 
                     
                    <p className="sky">
                    
                        <div>{this.props.sky}</div>
                        {this.getIcon()}
                   
                    </p>
                    <div className="location"> 
                        <p>{this.props.city} </p>
                        <p>{this.props.country}</p> 
                    </div>
                <p className="temp">{this.tempRound()}</p>
                     
                </FadeIn>
                } 
                  
            </div>
        );
    }
}

export default Response;