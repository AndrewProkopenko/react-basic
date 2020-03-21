import React, {Component} from 'react';
import logo from '../../logo.svg';

class AppLogo extends Component { 
    render() { 
        return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello, <span>World</span> React!</p>
              </div>
            </div>
          
        ) 
    }
}
export default AppLogo