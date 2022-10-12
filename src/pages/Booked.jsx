import React from 'react'
import {Link } from 'react-router-dom'
function Booked() {
  return (
    <div className='booked'>
        <div className="card">

        <h1>Hi, John Doe</h1>
        <p>You have booked for movie plan</p>
        <p>See you soon</p>
        <div className="links">
        <Link className='button' to='/'>Confirm</Link>
        <Link  to='/plan' className='button'>Cancel</Link>

        </div>
        </div>
    </div>
  )
}

export default Booked