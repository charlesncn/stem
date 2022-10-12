import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
  const plans = [
    {
      id: 1,
      name: 'Movie',
      price: 1000,
      description: 'Movie in the morning as we wait for arrivals.',
      img:'',
    }
  ]
  return (
    <div className='plan'>
      <div className="container">
        <h3>Choose Your Plan</h3>
        <div className="right">
          {plans.map(plans => (

          <div className="card" key={plans.id}>
            <h4>{plans.name}</h4>
            <img src={plans.img} alt="" />
            <p>{plans.description}</p>
            <span>{plans.price}</span>
            <Link to="" className="button">Book Now</Link>
          </div>
          ))}
        </div>
        <div className="left"></div>
      </div>
    </div>
  )
}

export default Plan