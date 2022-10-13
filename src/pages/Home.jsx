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
          <div className="socialmedia">
        <ul>
          <li><a href='https://instagram.com/westgatemallke'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href='https://wa.me/254780557775'><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
          <li><a href='https://www.facebook.com/westgateshoppingmall'><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href='linkedin.com'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href='https://www.westgate.co.ke/'><i class="fa fa-globe" aria-hidden="true"></i></a></li>
        </ul>
      </div>
            <h1>STEAM AT WESTGATE</h1>
            {/* <h5> (SCIENCE, TECHNOLOGY, ENGINEERING, ART, MATHS)</h5> */}
            <p>
              Educate your kids this holiday season with Westgate Kids & Club
              steam for kids. <br /> <span className="topic">Topics Included</span><br/> STEAM (Science,
              Technology, Engineering, Art, Math),<br/> food, movie & so much more.
             <br/>
              You also get to enjoy the goodies from our sponsors.
            </p>
            <span className="dates">
              Starting 26<sup>th</sup> & 27<sup>th</sup> Nov 2022
              <br />   (onwards)
            </span>
            <br />
            <div className="links">

            <Link to="/activities" className="button">
              View Activities
            </Link>
            <Link to="/register" className="button">
              Book Now
            </Link>
            </div>
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


      {/*  */}
    </div>
  );
}

export default Home;
