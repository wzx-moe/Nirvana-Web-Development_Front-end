import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../css/carousel.css';

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={props.imgSrc1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={props.imgSrc2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={props.imgSrc3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <p id='welcomeInfo'>WELCOME</p>
    </div>
  );
}