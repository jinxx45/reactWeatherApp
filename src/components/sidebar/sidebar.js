import React from 'react'
import './sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'

function sidebar() {
    return (
        <div>
            {/* Search Bar */}
            <div className="search-container mx-3">
                <FontAwesomeIcon icon={faSearch} />
                <input className="search-bar mx-2" placeholder="Search for Places"/>
            </div>

            {/* Large Weather Icon */}

            <i className="wi wi-day-sunny display-1 mx-4 my-5"></i>

            {/* Degree  */}

            <h1 className="mx-4">12&deg;C </h1>

            {/* Day and Time */}

            <h2 className="mx-4 my-4">Monday <span>16:00</span> </h2>

            {/* Others */}

            <hr />

            <i className="wi wi-day-sunny display-5 mx-4 my-3"></i>
            <span>Mostly Cloudy</span>

            {/* Chance of Rain */}
            <br />

            <FontAwesomeIcon className="mx-4 display-6" icon={faCloudRain} />
            <span>40%</span>

            {/* Location */}

            <h3 className="mx-3 my-3"> Puducherry , India </h3>

            
            

            





        </div>
    )
}

export default sidebar
