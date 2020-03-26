import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class PostMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: []
        };
    }
    componentDidMount() { 
        this.fetchPosts()
    }
    fetchPosts() {  
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then( (response) => { 
                this.setState({ 
                    posts : response.data
                })  
            })
    }
    
    render() {
        return (
            <ul> 
                {this.state.posts.map( (post, index) => { 
                    return (
                        <li key={index}> 
                            <NavLink exact to={`/posts/${this.state.posts[index].id}`}>post {this.state.posts[index].id}</NavLink>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default PostMenu;