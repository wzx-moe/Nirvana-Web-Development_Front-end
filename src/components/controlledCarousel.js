import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RecImg from '../temp/Rectangle1.png';

import '../css/carousel.css';

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='carousel-body'>
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
        <img id='Rec' src={RecImg} alt=''/>
    </div>
  );
}