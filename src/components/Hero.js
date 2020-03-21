import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import WorkingImg from '../assets/working.jpg'
import TestImg from '../assets/testimage.jpg'
import BlackSquare from '../assets/blacksquare.png'
import '../index.css'



function Hero() {
    return (
        <div className="divS">
            <img src={TestImg} id="img"/> 
            <div>
                <h1 className="top-right">In-demand talent <br /> on demand. <br /> <div className='text-white'>CT-Website is how.</div></h1>
            </div>
        </div>
    )
    
}

export default Hero