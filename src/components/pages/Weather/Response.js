import React, {Component } from 'react';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faSun, 
    faMapMarked} from '@fortawesome/free-solid-svg-icons'; 
 
class Response extends Component {
     

    render() {
        return ( 
            <div className='last'>
                {this.props.city  && 
                <div>
                     {/* <FontAwesomeIcon icon={faSun} /> */}
                    <p className="sky">{this.props.sky} </p>
                   <div className="location">
                         <p> <FontAwesomeIcon icon={faMapMarked} /> {this.props.city} </p>
                         <p>{this.props.country}</p>
                    </div>
                   <p className="temp"> {this.props.temp} ° </p>
                     
                </div>
                } 
                  
            </div>
        );
    }
}

export default Response;