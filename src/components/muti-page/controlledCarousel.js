import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RecImg from '../../temp/Rectangle1.png';
import welcomeImg from '../../temp/welcomeImg.png';

import '../../css/carousel.css';

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
                    src={process.env.REACT_APP_API_URL + props.imgSrc1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={process.env.REACT_APP_API_URL + props.imgSrc2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={process.env.REACT_APP_API_URL + props.imgSrc3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <div id='welcomeInfo'>
            <p id='welcomeInfo-text'>{props.title}</p>
            <img id='welcomeInfo-img' src={welcomeImg} alt='explore more'/>
        </div>
        <img id='Rec' src={RecImg} alt=''/>
    </div>
  );
}