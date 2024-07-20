import React from 'react'


import { Link } from 'react-router-dom'
import "./error.css"
const Error = () => {
  return (
    <div>
       
      <div className='Errorpage'>
                <div class='error'>
                    <h1 class='code' style={{color:"#rgb(54 110 54)"}}>404</h1>
                    <h2 class='desc' style={{marginTop:"60px",color:"white"}}>Opss... There's something wrong.</h2>
                    <Link to="/" style={{color:"white"}}> 
                        ... Back to previous page
                    </Link>
                </div>
            </div>
         
    </div>
  )
}

export default Error
