import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DataApi from '../DataApi';
import MenuCard from "./MenuCard";
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
const Menu=() =>{ 
    const[MenuData,setMenuData] = useState(DataApi)

    const filterItem = (category)=>{
        const updatedList = DataApi.filter((curEle)=>{
            return curEle.category === category;
        })
        setMenuData(updatedList)
    }
    return (
        <>
        <div className="mt-5 container">
        <NavLink className="btn-red" to="/"><span><MdOutlineKeyboardBackspace /></span>Back </NavLink>
        </div>
            <h1 className="section-heading pt-5 mb-5">Product</h1>
            <div className="d-flex justify-content-center py-4">
                <h1 className=" MenuNav mx-3"onClick={()=>setMenuData(DataApi)}>All</h1>
                <h1 className=" MenuNav  mx-3" onClick={()=>filterItem("Veg")}>Veg</h1>
                <h1 className="MenuNav mx-3" onClick={()=>filterItem("Non-Veg")}>Non-Veg</h1>
                <h1 className=" MenuNav mx-3" onClick={()=>filterItem("Sweets")}>Sweets</h1>
            </div>

        <MenuCard MenuData={MenuData} />
        </>
    )
    
}
export default Menu