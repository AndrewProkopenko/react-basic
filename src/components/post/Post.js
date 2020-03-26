import React, { Component } from 'react';
// import axios from 'axios'; 

import PostMenu from './PostMenu';
import PostContent from './PostContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Post extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         post : {}
    //       };
    // }

    

    render() {
        return ( 
            <Router> 
                <div className="row pt-5">
                    <div className="col-3">
                        <div className="post-menu">
                            <h3>Post List :</h3>
                            <PostMenu/>
                        </div>
                        
                    </div>
                    <div className="col-9 post-container"> 
                        <Switch>
                            <Route exact path="/posts/:id" component={PostContent} />
                        </Switch> 
                    </div>  
                </div> 
            </Router> 
        );
    }
}

export default Post;