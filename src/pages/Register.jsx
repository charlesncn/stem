import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <div className="form-container">
        <h1>Register</h1>
      <form>
        <input required type='text' placeholder='Username' />
        <input required type='text' placeholder='First Name' />
        <input required type='text' placeholder='Last Name' />
        <input required type='email' placeholder='Email' />
        <Link className='button' to="/pricing">Register</Link>
        {/* <p>Oops an ERROR occured!</p> */}
        <span>Already have an account? <Link to='/pricing'>Sign In</Link></span>
      </form>
      </div>
      </div>
      
  )
}

export default Register