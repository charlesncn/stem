import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className="container">
          <div className="left">
          </div>
          <div className="right">
            <h1>STEAM AT WESTGATE</h1>
            <p>Educate Your Kids This Holiday Season With Westgate Kids, Club Steam For Kids. Topics included:
            STEAM (Science, Technology, Engineering, Art, Math), Food, Movie & So Much More.
            <br/><br/><br/><br/>
          
              You Also Get To Enjoy The Goodies From Our Sponsors.
            </p> 
            <br/>
            <Link to='/plan' className='button'>Book Now</Link>
            </div>

      </div>
      <div className="sponsors">
        <h3>Our Sponsors</h3>
        <div className="card">
          <span>Blueband</span>
          {/* <img src='' className='brandName'> */}
        </div>
      </div>
    </div>
  )
}

export default Home