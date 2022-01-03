import React from 'react';
import './AboutPage.css';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.webp'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import image8 from './image8.jpg'
import image9 from './image9.jpg'
import image10 from './image10.jpg'
import image11 from './image11.jpg'

export const AboutPage = () => {
    return (
        <div className='AboutPageMainContainer'>
            <div className='image1'>
                Ableton
            </div> 
            <span className='Content1-Header'>
                We make <span className='Purple'> Live</span>, <span className='Purple'>Push</span> and <span className='Purple'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
            </span>
            <span className='Content1'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</span>
            <div className='Collage1'>
                <div className='image2'>
                    
                </div> 
                <div className='image3'>
                    
                </div> 
            </div>
        </div>
    )
}
