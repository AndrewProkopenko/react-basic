import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './../pages/Home'
import Contact from '../pages/Contact';
import About from '../pages/About';
 
class Header extends Component { 

   

    getLogoName() { 
        return this.props.name
    }
    render() { 
        return (
            <header>
                <div className='container'>
                    <div className='row head'>
                        <div className='col-6 col-sm-3 order-sm-0 logo'>
                            {this.getLogoName() }
                        </div>
                        <div className='col-6 col-sm-3 order-sm-2 tools'>
                            Button "Sign Up"
                        </div>
                        <div className='col-12 col-sm-6 order-sm-1 menu'>
                        <Router>
                <ul className=' flex-sm-row'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li> 
                    <li>
                         <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>


                <div className='content'>
                <Switch>
                    <Route exact path="/" component={Home}>
                    </Route>
                    <Route exact path="/contact" component={Contact}>
                    </Route>
                    <Route exact path="/about" component={About}>
                    </Route>
                </Switch>
                </div>
               
            </Router>
                        </div>
                       
                    </div>
                </div>
            </header>
        )
    }
}

export default Header