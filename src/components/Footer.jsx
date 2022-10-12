import React from 'react'
import Logo from "../imgs/westgate-logo.png";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="logo">
        <Link to='/'> <img src={Logo} alt=""/> </Link>
      </div>
      <div className="message">
        <form >
          <span>For Inquiry or Query, Leave a Message Below </span>
          <input type="text" placeholder="Enter your email"/>
          <textarea name="" id="" cols="30" rows="5" placeholder="Enter your message"></textarea>
          <div className="btns">
          <button>Send</button>
          <button>Discard</button>
          </div>
        </form>
      </div>
      <div className="socialmedia">
        <ul>
          <li><a href='https://instagram.com/westgatemallke'>Instagram</a></li>
          <li><a href='https://wa.me/254780557775'>Whatsapp</a></li>
          <li><a href='https://www.facebook.com/westgateshoppingmall'>Facebook</a></li>
          <li><a href=''>LinkedIn</a></li>
          <li><a href='https://www.westgate.co.ke/'>Website</a></li>
        </ul>
      </div>
        <p>© 2021 All rights reserved. Designed by <a href="">Charles</a></p>
    </div>
  )
}

export default Footer