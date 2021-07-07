import React from 'react'

import BasicCard from '../cards/basic3Card'



import Sunset from '../../components/cards/lgCard/lgcard'

function mainbar(props) {
    return (
        <div className="d-flex justify-content-around flex-wrap">
            <BasicCard 
            heading = "Minimum Temperature"
            data = {props.min}
            unit = "&deg;C"
            />
            <BasicCard 
            heading = "Wind Speed"
            data = {props.windSpeed}
            unit = "Kmph"
            />
            <BasicCard 
            heading = "Humidity"
            data = {props.humidity}
            unit = "%"
            />

            <Sunset 
            sunrise = {props.sunrise}
            sunset = {props.sunset}
            />

            
        
           
        </div>
    )
}

export default mainbar
