import React from 'react'

import './lgcard.css'

import sunriseLogo from '../../../Images/sunrise.png'
import sunsetLogo from '../../../Images/sunset.png'

function lgcard(props) {
    return (
        <div className="lgCard my-5 d-flex justify-content-around">
            <div className="icon-with-values">
                <h1 style={{marginBottom:"-12px" , marginTop:"18px"}} className=" mx-5 text-muted">Sunrise</h1>
            <img src={sunriseLogo} height={189} width={200} alt="" />
            <h3 className="mx-5 ">{props.sunrise}</h3>
            </div>

            <div className="ver-line">
                
            </div>
            <div className="icon-with-values d-flex flex-column">
            <h1 className="mx-5 my-3 text-muted">Sunset</h1>
            <img className="my-4 mx-5" src={sunsetLogo} height={100} width={100} alt="" />
                <h3 className="mx-5 my-3">{props.sunset}</h3>
            </div>
           
        </div>
    )
}

export default lgcard
