import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel1.png`}
            className="carousel-img"
            alt="candy1"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel2.png`}
            className="carousel-img"
            alt="candy2"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel3.png`}
            className="carousel-img"
            alt="candy3"
          />
        </div>
      </Carousel>
    </div>
  );
}