import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {delItem} from '../Redux/action/index'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import { Table } from 'react-bootstrap'
function Cart() {
    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
                <>
                <li className="cartbill pt-2 ">
                    <div className="d-flex justify-content-evenly">
                        <h3>{item.name}</h3>
                        
                        <h3>₹ {item.price}</h3>
                    </div>
                </li>
                </>
        );
    }
    const state = useSelector((state) => state.reducer) //ItemAddReducer is fileName
    const dispatch = useDispatch()

    const handleClose= (item) =>{
        dispatch(delItem(item))
        console.log(delItem(item));
    }


    const cartItems = (cartItem) =>{
        return(
        <div className="px-4 my-5 rounded-3" key={cartItem.id}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.img} alt={cartItem.name} className="menuImg" />

                    </div>
                    <div className="col-md-4 menuName">
                        <h1>{cartItem.name}</h1>
                        <p className="lead fw-bold">Price : ₹ {cartItem.price}</p>
                        <button onClick={()=>handleClose(cartItem)} 
                className="btn-red " aria-label="close">Remove</button>
                    </div>                    
                </div>
            </div>
        </div>
    )}
    
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    return (
        <div>
        <div className="mt-5 container">
        <NavLink className="btn-red" to="/"><span><MdOutlineKeyboardBackspace /></span>Back </NavLink>
        </div>
        <div className="container menuName py-4 my-4 px-5">
        <p className="pt-2">{state.map(itemList)}</p>
        <h2 className="totalPrice">Total : ₹ {total}</h2>
        </div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </div>

        
    )
}

export default Cart
