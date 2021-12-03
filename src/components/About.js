import Button from '@restart/ui/esm/Button'
import React from 'react'
import yogurt from './images/yogurt.png'
import OurService from './OurService'

function About() {
    return (
        <>
       <section className="about-meal">
       <h1 className="section-heading pt-5">About Fresh Meal</h1> 
        <div className="about-meal-wrap container mt-3 py-5 align-items-center d-flex  ">
        <div className="flex-1">
        <img  className="aboutImg "  src={yogurt} alt="Yogurt" />
        </div>
        <div className="flex-1">
            <h2>Freshmeal is a long estiblished fact that a reader will be distracted</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque consequuntur voluptatem ipsam totam porro quam voluptas, rerum nihil.
                Quis aliquam deleniti qui similique distinctio dolore commodi magnam saepe
                labore reprehenderit!</p>
            <Button className="btn-navyblue">Read More</Button>
        </div>
        </div>  
        </section>
        <OurService/>
        </>
    )
}

export default About
