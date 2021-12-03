import React from 'react'
import Slider from "react-slick";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
function CustomerReview() {
    const settings = {
        
        infinite: true,
        slidesToShow: 1,
        
        autoplay: true,
        autoplaySpeed: 22000,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <>
        
              
     
        <div className="container pb-5">
        <h1 className="section-heading pt-4 mb-4">Coustmer Reviews</h1>
        <Slider {...settings}>                        
          <div className="w-75 pt-3 ">
              <span className="customeruserIcon"><FaUserAlt /></span>
              <h2 className=" customerName">Maureen Biologis</h2>
              <div className="d-flex StarIcons align-items-center pb-3 justify-content-center">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar />
              </div>
              <div className="text-center">
              <p  className="ReviewParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the  a galley of type and scrambled it to.
              </p>
              </div>
          </div>
          <div className="w-75 pt-3">
              <span className="customeruserIcon"><FaUserAlt /></span>
              <h2 className=" customerName">Mark Ateer</h2>
              <div className="d-flex StarIcons align-items-center pb-3 justify-content-center">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              <AiOutlineStar />
              </div>
              <div className="text-center">
              <p  className="ReviewParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               an unknown printey of type and scrambled it to.
              </p>
              </div>
            </div>
            <div className="w-75 pt-3">
              <span className="customeruserIcon"><FaUserAlt /></span>
              <h2 className=" customerName">Laura Norda</h2>
              <div className="d-flex StarIcons align-items-center pb-3 justify-content-center">
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar />
              </div>
              <div className="text-center">
              <p  className="ReviewParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since ley of type and scrambled it to.
              </p>
              </div>
          </div>
        </Slider>
        </div>
        </>
    )
}

export default CustomerReview
