import React,{Component} from 'react'
import DataApi from '../DataApi';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
        
            infinite: true,
            slidesToShow: 4,
            responsive: [
              
              {

                  breakpoint: 1102,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {

                    breakpoint: 960,
                    settings: {
                      slidesToShow: 3
                    }
                  },
                {
                  breakpoint: 835,
                  
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 585,
                  
                  settings: {
                    slidesToShow: 1
                  }
                }
              ],
            autoplay: true,
            autoplaySpeed: 22000,
            pauseOnHover: true,
            cssEase: "linear"
        };
    return (
        <>
      
            
            <Slider {...settings}> 
            {
                    DataApi.map((item)=>{
                        return(
                           
                                <div className="card my-5 " key={item.id} >
                                  <p className="itemcategory">{item.category}</p>
                                    <img src={item.img} className="card-img-top" alt={item.name}/>
                                        <div className="card-body pt-3 text-center">
                                            <h5 className="card-title mb-1">{item.name}</h5>
                                            <p className="lead">₹ {item.price}</p>
                                          <NavLink to={`/menu/${item.id}`} className="btn-navyblue mx-5 nav-link" >Buy Now</NavLink>
                                        </div>
                                </div>
                            );
                    })
                }
                           
                          
            
            </Slider>
            
        </>
    )
}

}
