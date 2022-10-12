import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <h1>STEAM AT WESTGATE</h1>
          <p>
            Educate Your Kids This Holiday Season With Westgate Kids, Club Steam
            For Kids. Topics included: STEAM (Science, Technology, Engineering,
            Art, Math), Food, Movie & So Much More.
            <br />
            <br />
            <br />
            <br />
            You Also Get To Enjoy The Goodies From Our Sponsors.
          </p>
          <br />
          <Link to="/plan" className="button">
            Book Now
          </Link>
        </div>
      </div>
      <div className="sponsors">
        <h3>Our Sponsors</h3>
        <div className="cardContainer">
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/blueband.jpeg?raw=true"
            className="brandName" alt=""
          />

          <span>Blueband</span>
        </div>

        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/bio-logo.png?raw=true"
            className="brandName" alt=""
          />

          <span>Bio Foods</span>
        </div>
        
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/ribena.png?raw=true"
            className="brandName" alt=""/>

          <span>Ribena</span>
        </div>
        
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/Pizza_Hut.png?raw=true"
            className="brandName" alt=""/>

          <span>Pizza Hut</span>
        </div>
        
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/kfc.png?raw=true"
            className="brandName" alt=""/>

          <span>KFC</span>
        </div>
      
        
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/nation-media.jpeg?raw=true"
            className="brandName" alt=""/>

          <span>Nation Media Group</span>
        </div>
        
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/dtb.png?raw=true"
            className="brandName" alt=""/>

          <span>DTB</span>
        </div>
        
        <div className="card">
          <img
            src="https://github.com/charlesncn/stem/blob/main/src/imgs/kartasi.png?raw=true"
            className="brandName" alt=""/>

          <span>Kartasi</span>
        </div>


        </div>

      </div>
    </div>
  );
}

export default Home;
