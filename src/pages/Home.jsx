import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="sidebar">
      <div className="socialmedia">
        <ul>
          <li><a href='https://instagram.com/westgatemallke'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href='https://wa.me/254780557775'><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
          <li><a href='https://www.facebook.com/westgateshoppingmall'><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href='linkedin.com'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href='https://www.westgate.co.ke/'><i class="fa fa-globe" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      </div>
      <div className="container">
        <div className="content">

          <div className="right">
            <h1>STEAM AT WESTGATE</h1>
            <h5> (SCIENCE, TECHNOLOGY, ENGINEERING, ART, MATHS)</h5>
            <p>
              Educate Your Kids This Holiday Season With Westgate Kids, Club
              Steam For Kids. <br /> Topics Included: STEAM (Science,
              Technology, Engineering, Art, Math), Food, Movie & So Much More.
             
              You Also Get To Enjoy The Goodies From Our Sponsors.
            </p>
            <span className="dates">
              Starting 26<sup>th</sup> & 27<sup>th</sup> November
              <br /> 2022  (onwards)
            </span>
            <br />
            <Link to="/register" className="button">
              Book Now
            </Link>
          </div>
          <div className="left"></div>
        </div>

      <div className="sponsors">
        <h3>Potential Sponsors</h3>
        <div className="cardContainer">
          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/blueband.jpeg?raw=true"
              className="brandName"
              alt=""
            />

            <span>Blueband</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/bio-logo.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Bio Foods</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/ribena.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Ribena</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/Pizza_Hut.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Pizza Hut</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/kfc.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>KFC</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/nation-media.jpeg?raw=true"
              className="brandName"
              alt=""
            />

            <span>Nation Media Group</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/dtb.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>DTB</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/kartasi.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Kartasi</span>
          </div>
        </div>
      </div> 
      </div>


      {/* <div className="activities">
        <h3>Activities</h3>
        <div className="cardContainer">
          <div className="card">
            <span>Steam Activities</span>
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/sauna.png?raw=true"
              className="gameName"
              alt=""
            />
          </div>
          <div className="card">
            <span>Food</span>
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/food.png?raw=true"
              className="gameName"
              alt=""
            />
            <br />
          </div>
          <div className="card">
            <span>Zumba</span>
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/zumba.jpeg?raw=true"
              className="gameName"
              alt=""
            />
          </div>
          <div className="card">
            <span>Kids Club</span>
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/kids-club.png?raw=true"
              className="gameName"
              alt=""
            />
            <br />
          </div>
          <div className="card">
            <span>Movie</span>
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/movie-icon.png?raw=true"
              className="gameName"
              alt=""
            />
          </div>
          <div className="card">
            <span>Origami</span>
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/origami.jpeg?raw=true"
              className="gameName"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sponsors">
        <h3>Potential Sponsors</h3>
        <div className="cardContainer">
          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/blueband.jpeg?raw=true"
              className="brandName"
              alt=""
            />

            <span>Blueband</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/bio-logo.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Bio Foods</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/ribena.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Ribena</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/Pizza_Hut.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Pizza Hut</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/kfc.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>KFC</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/nation-media.jpeg?raw=true"
              className="brandName"
              alt=""
            />

            <span>Nation Media Group</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/dtb.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>DTB</span>
          </div>

          <div className="card">
            <img
              src="https://github.com/charlesncn/stem/blob/main/src/imgs/kartasi.png?raw=true"
              className="brandName"
              alt=""
            />

            <span>Kartasi</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
