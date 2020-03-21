import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Camera from '../assets/camera.png'
import LawnMower from '../assets/lawn-mower.png'
import Plumbing from '../assets/plumbing.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

function Slider() {
    return (
        <div className='cp-t'>
        <Carousel responsive={responsive} autoPlay infinite={true}>
            <div className='carousel-bg'>
                <img src={Camera} className='c-images'/>
                <h4 className="c-text">Photograph</h4>
                <p>Find the best photographer in your area!</p>
            </div>
            <div className='carousel-bg'>
                <img src={LawnMower} className='c-images'/>
                <h4 className="c-text">Grass Cutting</h4>
            </div>
            <div className='carousel-bg'>
                <img src={Plumbing} className='c-images'/>
                <h4 className="c-text">Plumbing</h4>
            </div>
            <div className='carousel-bg'>
                <img src={Camera} className='c-images'/>
                <h4 className="c-text">Photograph</h4>
            </div>
        </Carousel>
        </div>
    )
}

export default Slider