import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiFigurehead } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import {Button} from './Button'
import {IconContext} from 'react-icons/lib'


function Navbar() {
  const [click, setClick]= useState(false);
  const [button, setButtton]= useState(true)


  const handlerClick = ()=> setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960){
      setClick(false)
    }else{
      setClick(true)
    }
  }
  useEffect(()=>{
    showButton()
  },[]);

  window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
        <div className="navbar">
           <div className="navbar-container container">
             <Link to="/" className="navbar-logo" onClick={handlerClick}>
               <GiFigurehead className="navbar-icon" />
               SANDY
             </Link>
             <div  className="menu-icon" onClick={handlerClick}>
             {click ? <FaTimes /> : <FaBars /> }
             </div>
             <ul className={click ? 'nav-menu active': 'nav-menu'}>
               <li className="nav-item">
               <Link to="/" onClick={closeMobileMenu} className="nav-links">Home</Link>
               </li>
               <li className="nav-item">
               <Link to="/services" onClick={closeMobileMenu} className="nav-links">Services</Link>
               </li>
               <li className="nav-item">
               <Link to="/products" onClick={closeMobileMenu} className="nav-links">Products</Link>
               </li>
               <li className="nav-item">
               <Link to='/sign-up' onClick={closeMobileMenu} className='nav-links-mobile'>Sign Up</Link>
               </li>
               <Button />
            </ul> 
           </div>
          </div>  
          </IconContext.Provider>
        </>
    )
}

export default Navbar;
