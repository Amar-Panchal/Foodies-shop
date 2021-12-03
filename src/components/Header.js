import React,{useState} from 'react'
import { TiThMenu,TiInfo } from 'react-icons/ti';
import {GiCook} from 'react-icons/gi'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {FaHome ,FaCartPlus} from 'react-icons/fa'
import {CgMenuBoxed} from 'react-icons/cg'
import { RiContactsBookLine} from 'react-icons/ri'

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const state = useSelector((state) =>state.reducer)

    return (
        <>
      
        <nav className="header sticky-top d-flex justify-content-around align-items-center ">
                <div>
                <NavLink  className=" HeaderName nav-link d-flex align-items-center" to="/"><span className="sponIcon mb-2 pt-0 mr-2"><GiCook/></span>Foodies</NavLink>
                </div>
                <div className=" navbarlinks d-flex  justify-content-evenly align-items-center">
                <NavLink className="nav-link navblue-color " to ="/">Home</NavLink>
                <NavLink className="nav-link navblue-color" to ="/menu">Menu</NavLink>
                <NavLink className="nav-link navblue-color " to ="/about">About</NavLink>
                <NavLink className="nav-link navblue-color " to ="/contact">Contact</NavLink>
                <NavLink className="nav-link navblue-color " to ="/cart">Cart [ {state.length} ]</NavLink>
                </div>
        </nav>
        <nav className="Mobileheader sticky-top d-flex justify-content-around align-items-center ">
                <div>
                <NavLink  className=" HeaderName nav-link d-flex align-items-center" to="/"><span className="sponIcon mb-2 pt-0 mr-2"><GiCook/></span>Foodies</NavLink>
                </div>
                <button className="btn-navyblue modal-button" onClick={handleShow}>
                <TiThMenu/>
                </button>

                <Modal show={show} onHide={handleClose} className="px-3 py-3 ">
                    <Modal.Header closeButton>
                    <Modal.Title >
                        <div>
                        <NavLink  className=" HeaderName nav-link d-flex align-items-center" to="/"><span className="sponIcon mb-2 pt-0 mr-2"><GiCook/></span>Foodies</NavLink>
                        </div>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className=" navbarlinks  pb-4">
                        <NavLink className="nav-link navblue-color py-2 " to ="/"><span className="px-2"><FaHome/></span> Home</NavLink>
                        <NavLink className="nav-link navblue-color py-2 " to ="/menu"><span className="px-2"><CgMenuBoxed/></span> Menu</NavLink>
                        <NavLink className="nav-link navblue-color py-2 " to ="/about"> <span className="px-2"><TiInfo/></span> About</NavLink>
                        <NavLink className="nav-link navblue-color py-2 " to ="/contact"> <span className="px-2"><RiContactsBookLine/></span> Contact</NavLink>
                        <NavLink className="nav-link navblue-color py-2 " to ="/cart"> <span className="px-2"><FaCartPlus/></span> Cart [ {state.length} ]</NavLink>
                    </div>  
                    </Modal.Body>
                    <Modal.Footer>
                    <p className="btn-red" onClick={handleClose}>
                        Close
                    </p>
                    </Modal.Footer>
                </Modal>
        </nav>
        </>
    )
}

export default Header;
