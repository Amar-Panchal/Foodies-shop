import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function MenuCard({MenuData}) {
    const [quantity,setquantity] = useState(0)
     
    const TotalPrice = (item) =>{
        const total = {quantity} * (item.price)
    
    }
    return (
        <div>
            <div className=" d-inline-flex flex-wrap  justify-content-center">           
           {
                    MenuData.map((item)=>{
                        return(
                                <div className="menu-card d-flex " key={item.id}>
                                    <p className="bg-navblue itemcategory">{item.category}</p>
                                    <img src={item.img} className="menu-card-img" alt={item.name} />
                                        <div className="card-body  align-self-lg-center text-center">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="lead">₹ {item.price}</p>
                                            <NavLink to={`/menu/${item.id}`} className="btn-navyblue nav-link" >Buy Now</NavLink>
                                        </div>
                                </div>

                            );
                    })
                }
            </div>
        </div>
    )
}

export default MenuCard
