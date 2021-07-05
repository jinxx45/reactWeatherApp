import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SideBar from './sidebar/sidebar'
import './weather.css'

function weather() {
    return (
      <div className="mx-3 my-3" >
          <div className="row">
              <div className="col-md-4 sidebar ">
              <SideBar/>
              </div>
              <div className="col-md-8 ">
                  Hi
              </div>
            
          </div>
          
      </div>
    )
}

export default weather
