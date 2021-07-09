import React from 'react'

import './basic3Card.css'

function basic3Card(props) {
    return (
        <div className="_card">
            {/* heading */}

            <h5 className="fs-5 p-3 text-muted">{props.heading}</h5>

            {/* Body */}
            
            <h1 className=" fw-bold p-3">{props.data} {props.unit} </h1>
            
            {/* Footer */}

            
        </div>
    )
}

export default basic3Card
