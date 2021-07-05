import React from 'react'

import './basic3Card.css'

function basic3Card() {
    return (
        <div className="_card">
            {/* heading */}

            <h5 className="fs-5 p-3">Heading</h5>

            {/* Body */}
            
            <h1 className=" fw-bold p-3">25&deg;C</h1>
            
            {/* Footer */}

            <h4 className="p-3">Status</h4>
        </div>
    )
}

export default basic3Card
