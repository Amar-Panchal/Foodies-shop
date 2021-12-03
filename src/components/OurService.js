import React from 'react'
import transport from './images/transport.svg'
import usd from './images/usd.svg'
import bag from './images/bag.svg'
function OurService() {
    return (
        <>
           <section className="our-service ">
                    <div className="container">
                        <h1 class="section-heading pt-4 ">Our Service</h1>
                        <div class="service-card-join mb-2 py-5">
                            <div class="service-card p-4 mx-2 my-5 ">
                                <img  class="icon" src={transport} alt=""/>
                                <h2>Free Home Delivery</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button class="btn-white">Read More</button>
                            </div>
                            <div class="service-card p-4 mx-2 my-5  ">
                                <img  class="icon" src={bag} alt="" />
                                <h2 className="navyblue">30days Return Service</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="btn-white">Read More</button>
                            </div>
                            <div className="service-card p-4 mx-2 my-5 ">
                                <img  className="icon" src={usd} alt="" />
                                <h2>Money Back Guarantee</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="btn-white">Read More</button>
                            </div>
                        </div>
                    </div>

                </section>
        </>
    )
}

export default OurService
