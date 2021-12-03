import { useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import DataApi from '../DataApi';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../Redux/action/index';
import  CardCarousel from './CardCarousel' 


function MenuDetails() {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const menuid = useParams();
    console.log(menuid)
    const menuDetail = DataApi.filter(x=>x.id == menuid.id)
    const menu = menuDetail[0];
    console.log(menu)
    const dispatch = useDispatch()

    const handleCart =(product)=>{
        if(cartBtn ==="Add to Cart"){
            dispatch(addItem(product))
            if(product.id === menu.id){
            setCartBtn("Remove from Cart")
        }
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }
    console.log(menu);
    return (
    <>
        <div className="mt-5 container">
        <NavLink className="btn-red" to="/"><span><MdOutlineKeyboardBackspace /></span>Back </NavLink>
        </div>
        <div className="container my-5 py-3">
        <div className="my-5 text-center">
        <div className="menu-body align-items-center justify-content-evenly">
            <div>
                <img className="menuImg" src={menu.img} alt={menu.name} />
            </div>
            <div className="menuName">
                <h1>"{menu.name} " you want to buy this dish</h1>
                <p>please click button</p>
                <button onClick={()=>handleCart(menu)}
            className="btn-white my-2">{cartBtn}</button>
            </div>
        </div>
       
        </div>
        
    </div>
    
    </>
    )
}

export default MenuDetails
