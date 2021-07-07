import Weather from './components/weather'

import React, { Component } from 'react'

import moment from 'moment';

import 'weather-icons/css/weather-icons.css'


//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY = "6e309a900b00f33036f1ee54e72d4dc5";


export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
      city: undefined,
      country : undefined,
      main : undefined,
      icon : undefined,
      celcius : undefined,
      minTemp : undefined,
      maxTemp : undefined,
      day : undefined,
      time : undefined,
      humidity : undefined,
      windSpeed : undefined,
      sunrise : undefined,
      sunset : undefined,
      chanceOfRain : undefined,
    }

    this.getWeather();
    this.getTimeandDate();

  }

  convertCel(temp)
  {
    var cell = Math.floor(temp-273.15);
    return cell;
  }

  convertDay(temp)
  {
    const days = ["Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"] 
    return days[temp];
  }

  convertTime(temp)
  {
    return moment(temp).format('LT')
  }

  convertUnix(temp)
  {
    return moment(temp).format('LT'); 
  }

  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Washington,uk&appid=${API_KEY}`)

    const response = await api_call.json();

    this.setState({
      city : response.name,
      country: response.sys.country,
      celcius : this.convertCel(response.main.temp),
      main : response.weather[0].main,
      windSpeed : response.wind.speed,
      humidity : response.main.humidity,
      minTemp : this.convertCel(response.main.temp_min),
      maxTemp : this.convertCel(response.main.temp_max),
      sunrise : this.convertUnix(response.sys.sunrise),
      sunset : this.convertUnix(response.sys.sunset),
      chanceOfRain : response.rain["1h"]*100
    })
  

    console.log(response);
  }

// api call for date and time 
  getTimeandDate =async() => {

    const api_call = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Kolkata`)

    const response =  await api_call.json();

    this.setState({
      day : this.convertDay(response.day_of_week),
      time : this.convertTime(response.datetime),
    })

    console.log(response);

  }

  

  render() {
    return (
      <div>
          <Weather 
          city = {this.state.city} 
          country ={this.state.country}
          celcius = {this.state.celcius}
          day = {this.state.day}
          time = {this.state.time}
          main = {this.state.main}
          humidity = {this.state.humidity}
          windSpeed = {this.state.windSpeed}
          maxTemp = {this.state.maxTemp}
          minTemp ={this.state.minTemp}
          sunset = {this.state.sunset}
          sunrise = {this.state.sunrise}
          chanceOfRain = {this.state.chanceOfRain}
          
          
          />
      </div>
    )
  }
}






