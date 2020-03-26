import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Menu from './components/layout/Menu';
import Sign from './components/Sign';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Weather from './components/pages/Weather/Weather'; 
import Error from './components/pages/Error';

import Post from './components/post/Post'; 




class App extends Component {
  render() { 
    return (
      <> 
        <Router>
           <header>
                <div className='container'>
                    <div className='row head'>
                        <div className='col-auto order-md-0 logo'>
                            Portland
                        </div>
                        <div className='col-auto order-md-2 tools'>
                            <Sign />
                        </div>
                      <Menu/>
                    </div>
                </div>
            </header> 
            <main>
            <div className='content'>
              <div className='container '> 
                <Switch>
                      <Route exact path="/"  component={Home}></Route>
                      <Route exact path="/posts/" component={Post}></Route> 
                      <Route exact path="/posts/:id" component={Post}></Route> 
                      {/* <Route exact path="/posts" component={Posts}></Route> */}
                      <Route exact path="/about" component={About}></Route>
                      <Route exact path="/weather" component={Weather}></Route>
                      <Route exact path="*" component={Error}></Route>
                </Switch>
              
              </div>
            </div>
            </main>
            </Router>
      </>
    );
  }
}

export default App
