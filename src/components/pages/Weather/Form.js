import React, { Component } from 'react';

class Form extends Component {  
 

    render() {
        return ( 
            <form >
                {/* onSubmit={ this.props.getw } */}
                <input type="text" name="city" placeholder="City"></input>
                <button onClick={ this.props.getw }>Get</button>
            </form> 
        );
    }
}

export default Form;