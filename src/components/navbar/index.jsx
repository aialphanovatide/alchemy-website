import React from 'react'
import './navbar.css'
import { useState, useRef } from 'react'
// import logo from '../../img/logo.svg'



function Navbar({slideIndex, setSlideIndex}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = (index) => changeSlideIndex(index);
    


    const changeSlideIndex = (index) => {
        setSlideIndex(index)
        unshowNavbar()
      }
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
        setIsOpen(!isOpen)
    }

    const unshowNavbar = () => {
        navRef.current.classList.add("responsive_nav")
        setIsOpen(false)

    }

    const getNavItemClass = (index) => {
        return slideIndex === index ? 'nav_item_active' : 'nav_item';
    }

    



  return (
    <div className='navbar'>
            <div className='navbar_container'>
                <img src="static/images/logo.svg" alt="" className='nav_logo' onClick={() => handleNavClick(0)} />
                <div ref={navRef} className="nav_items responsive_nav">
                    <span onClick={() => handleNavClick(0)} className={getNavItemClass(0)}>Home</span>
                    <span onClick={() => handleNavClick(1)} className={getNavItemClass(1)}>Vision</span>
                    <span onClick={() => handleNavClick(2)} className={getNavItemClass(2)}>Tools</span>
                    <span onClick={() => handleNavClick(3)} className={getNavItemClass(3)}>Flow</span>
                    <span onClick={() => handleNavClick(4)} className={getNavItemClass(4)}>Impact</span>
                    <span onClick={() => handleNavClick(5)} className={getNavItemClass(5)}>Begin</span>
                </div>

                <div
                    className={`mobile hamburger ${isOpen ? "open" : ""}`}
                    onClick={() => showNavbar()}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
    </div>
  )
}

export default Navbar