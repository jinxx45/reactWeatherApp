import React from 'react'
import './sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');
</style>



function sidebar(props) {
    return (
        <div>
            {/* Search Bar */}
            <div className="search-container mx-3 my-3">
                <FontAwesomeIcon icon={faSearch} />
                <input className="search-bar mx-2" placeholder="Search for Places"/>
            </div>

            {/* Large Weather Icon */}

            <div className="d-flex align-items-center my-4 flex-column" >


            {/* Degree  */}

            <h1 className=" my-4">{props.celcius}&deg;C </h1>

               {/* Day and Time */}

               <h2>{props.day} <span>{props.time}</span> </h2>

            </div>
            


         

            {/* Others */}

            <hr />

            <i className="wi wi-day-sunny display-5 mx-4 my-3"></i>
            <span className="fs-2">{props.main}</span>

            {/* Chance of Rain */}
            <br />

            <FontAwesomeIcon className="mx-4 display-6 " icon={faCloudRain} />
            <span className="fs-2 my-5">Chance of Rain : {props.chance}%</span>

            {/* Location */}

            <h3 className="mx-3 my-5">  {props.city} , {props.country} </h3>

            
            

            





        </div>
    )
}

export default sidebar
