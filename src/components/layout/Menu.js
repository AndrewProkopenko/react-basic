import React, {Component} from 'react';
import { 
    NavLink
} from "react-router-dom"; 

class Menu extends Component { 
    render() { 
        return ( 
            <div className='col-12 col-sm-6 order-sm-1 menu'>
                      
            <ul className=' flex-md-row justify-content-center'>
                <li>
                    <NavLink exact to={'/'}>Home</NavLink>
                </li> 
                <li>
                    <NavLink exact to={'/posts'}>Post</NavLink>
                </li>
                <li>
                    <NavLink exact to={'/about'}>About</NavLink>
                </li>
                <li> 
                    <NavLink exact to={'/weather'}>Weather</NavLink>
                </li>
            </ul>
            
          </div> 
        )
    }
}

export default Menu