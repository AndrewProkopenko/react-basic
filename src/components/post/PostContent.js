import React, { Component } from 'react';
import axios from 'axios';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

class PostContent extends Component {
     
    constructor(props) { 
        super(props);
        this.state = {
            post: {},
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidUpdate(prevProps, prevState) { 
        if(prevProps.match.params.id !== this.props.match.params.id) this.fetchPost()
    }

    componentDidMount() { 
        this.fetchPost()
    }
    fetchPost() { 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then( (response) => {  
                this.setState({ 
                    post: response.data
                })
                this.fetchAuthor(this.state.post.userId)
            })
            .catch( (error) => { 
                console.error(error);
            })
        
    }
    fetchAuthor(userId) { 
        axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then( (response) => { 
            this.setState({
                user: response.data
            }) 
        })
        .catch( (err) => { 
            console.log(err) 
        }) 
    }
    render() {
        return ( 
            <div className="post-item"> 
                <h3>{this.state.post.title} - {this.state.post.id}</h3>
                <h5>Author: <i>{this.state.user.name}</i></h5>
                <p> 
                    {this.state.post.body}
                </p>
                <div className='close'> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </div> 
            </div>
        );
    }
}

export default PostContent;