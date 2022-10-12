import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
  const plans = [
    {
      id: 1,
      name: 'Movie',
      price: 350,
      description: 'Movie in the morning as we wait for arrivals.',
      img:'https://github.com/charlesncn/stem/blob/main/src/imgs/movie-icon.png?raw=true',
    },
    {
      id: 1,
      name: 'Steam',
      price: 1000,
      description: 'Steam after the movie.',
      img:'https://github.com/charlesncn/stem/blob/main/src/imgs/sauna.png?raw=true',
    },
    {
      id: 1,
      name: 'Food',
      price: 300,
      description: 'Food after the steam activity.',
      img:'https://github.com/charlesncn/stem/blob/main/src/imgs/food.png?raw=true',
    },
    {
      id: 1,
      name: 'Kids Club',
      price: 350,
      description: 'Kids cub as they wait to be picked by their guardians.',
      img:'https://github.com/charlesncn/stem/blob/main/src/imgs/kids-club.png?raw=true',
    },
  ]
  return (
    <div className='plan'>
        <h3>Choose Your Plan</h3>
      <div className="container">
        <div className="left">
          <h4>Weekdays</h4>
          {plans.map(plans => (

          <div className="card" key={plans.id}>
            <h4>{plans.name}</h4>
            <img src={plans.img} alt="" />
            <p>{plans.description}</p>
            <span>{plans.price}</span><br/>
            <Link to="" className="button">Book Now</Link>
          </div>
          ))}
        </div>
        <div className="right">

        <h4>Weekdends</h4>
          {plans.map(plans => (

          <div className="card" key={plans.id}>
            <h4>{plans.name}</h4>
            <img src={plans.img} alt="" />
            <p>{plans.description}</p>
            <span>{plans.price}</span><br/>
            <Link to="" className="button">Book Now</Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plan