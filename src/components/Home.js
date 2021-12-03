import React from 'react'
import Poster from './Poster'
import CardCarousel from './CardCarousel'
import About from './About'
import Contact from './Contact'
import CustomerReview from './CustomerReview'
function Home() {
    return (
        <>
        
           
            <Poster />
            <h1 className="my-4  section-heading">
                Product
            </h1>
            <CardCarousel />
            <About />
            <CustomerReview />
            <Contact />
            
        </>
    )
}

export default Home
