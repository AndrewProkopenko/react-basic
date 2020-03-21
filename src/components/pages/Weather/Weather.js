import React, {Component } from 'react';
import axios from "axios";

// import Form from './Form';
import Response from './Response';

const API_KEY = "3b0463098dbac98a9fdbed1d1360b66c";

class Weather extends Component {

    state = { 
        temp: undefined,
        city: undefined,
        country: undefined,
        sky: undefined,
        error: undefined
        
    }
  
    
    gettingWeather = async (e) => { 
        e.preventDefault();
        var city = e.target.elements.city.value; 
         
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then( (response) => { 
                console.log(response.data);
                this.setState( { 
                    temp: response.data.main.temp, 
                    city: response.data.name,
                    country: response.data.sys.country, 
                    sky: response.data.weather[0].main, 
                    error: ""        
                })
            })
            .catch((error) => {  
                console.log(error + 'its my little catch ');
        })
      
        //start
        // try { 
        //     var API_URL =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        // }
        // catch(err) { 
        //     console.error("net")
        // }
         
        
        // const  data = await API_URL.json(); 
     
        // try { 
        //     this.setState({
        //         temp: data.main.temp, 
        //         city: data.name,
        //         country: data.sys.country, 
        //         sky: data.weather[0].main, 
        //         error: ""        
        //     })
        // }
        // catch(err) { 
        //     console.log(err + " DONT PANIC!!!! this my error from catch")
        // }  
        // end
    }
    render() {
        return (
           <div className='container weather-container'>
               <div className={"row"}>
                   <div className="col-10 col-md-8 mx-auto ">
                       <div className="item">
                           <div className="first">
                                <h3>Get<br/>Weather<br/>Application</h3>
                                <p>Enter the city and find out the weather</p>
                                {/* <Form getw="this.gettingWeather"/> */}
                                <form onSubmit={ this.gettingWeather} >
                                        {/*  */}
                                        <input type="text" name="city" placeholder="City"></input>
                                        <button >Get</button>
                                </form> 
                           </div>
                           
                            <Response 
                                temp={this.state.temp}
                                city={this.state.city}
                                country={this.state.country}
                                sky={this.state.sky}
                                error={this.state.error} 
                            />
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default Weather;