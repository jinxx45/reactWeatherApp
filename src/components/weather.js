import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SideBar from './sidebar/sidebar'
import MainBar from './mainbar/mainbar'
import './weather.css'

function weather(props) {
    return (
      <div className="mx-3 " >
          <div className="row">
              <div className="col-md-4 sidebar ">
              <SideBar 
              city = {props.city} 
              country = {props.country}
              celcius = {props.celcius}
              day = {props.day}
              time = {props.time}
              main = {props.main}
              chance = {props.chanceOfRain}
             
              />
              </div>
              <div className="col-md-8 mainbar ">
                <MainBar
                humidity = {props.humidity}
                windSpeed = {props.windSpeed}
                min = {props.minTemp}
                max = {props.maxTemp}
                sunrise = {props.sunrise}
                sunset = {props.sunset}
                />
              </div>
            
          </div>
          
      </div>
    )
}

export default weather
