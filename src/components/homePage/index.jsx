import React, { useEffect, useState } from 'react';
import Navbar from '../navbar'
import './homePage.css'
import Carousel from '../carousel'


function HomePage() {
    const [slideIndex, setSlideIndex] = React.useState(0)
    return (
        <div className='homepage_container'>
            <Navbar slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
            <Carousel slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
            
        </div>
    );
}

export default HomePage;