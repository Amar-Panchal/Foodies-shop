import React from 'react'
import { Carousel } from 'react-bootstrap';
import first_slide from './images/first_slide.jpg'
import second_slide from './images/second_slide.jpg'
import third_slide from './images/third_slide.jpg'
import forth_slide from './images/forth_slide.jpg'
function Poster() {

    return (
        <>
        
        <Carousel fade>
        <Carousel.Item interval={1000}>
            <img
            className="d-block  carousel_item"
            src={first_slide}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className="posterTagline">Welcome <span>Foodies</span> to Home of Taste</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block  carousel_item"
            src={second_slide}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3 className="posterTagline">Welcome <span>Foodies</span> to Home of Taste</h3>
            </Carousel.Caption>
        </Carousel.Item >
     
        <Carousel.Item interval={1000}>
            <img
            className="d-block  carousel_item "
            src={forth_slide}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3 className="posterTagline">Welcome <span>Foodies</span> to Home of Taste</h3>
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
       
        </>
    )
}

export default Poster
