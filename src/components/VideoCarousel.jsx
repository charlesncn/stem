import React from "react";
// import "./VideoCarousel.scss";
import { Carousel } from "react-bootstrap";
import vid1 from "../assets/video/tech.mp4";
import vid2 from "../assets/video/tech_1.mp4";
import vid3 from "../assets/video/tech_2.mp4";
import vid4 from "../assets/video/sci_fi.mp4";
import vid5 from "../assets/video/Elevators.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      src: vid1,
    },
    {
      id: 2,
      src: vid2,
    },
    {
      id: 3,
      src: vid3,
    },
    {
      id: 4,
      src: vid4,
    },
    {
      id: 5,
      src: vid5,
    },
  ];
  return <div className="videoCarousel">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                pip={true}
                controls={true}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
};

export default VideoCarousel;
