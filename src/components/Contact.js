import React from 'react'

function Contact() {
    return (
        <>
            <div className="contactpage pb-5">
                <h1 className="section-heading pt-4 mb-5">Contact</h1> 
                <section className="contact-us container  justify-content-around pt-4 pb-4 ">
                   
                    <div className="col-1 ">
                    <form>
                    <input type="text" className='contactInput mt-3 pl-4'  placeholder="Name..." required/>
                    <input type="email" className='contactInput my-3 pl-4'  placeholder="Email..." required />
                    <input type="number" className='contactInput mb-3 pl-4'  placeholder="Mobile Number..." required/>
                    <textarea className="contactTextarea mb-2 pl-4" placeholder="Message..." required></textarea>
                    <button className="btn-red " type="submit">Submit</button>
                    </form>
                    </div>
                                
                          
                    
                    <div class="map align-self-center mt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137241463!2d73.72253348652927!3d18.524890171607453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623409472221!5m2!1sen!2sin" 
                        width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </section>

        </div>
            
        </>
    )
}

export default Contact
