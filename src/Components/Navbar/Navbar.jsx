import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [menu, setMenu] = useState("shop")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('womens') }}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link to='/kids' style={{textDecoration:'none'}}>kids</Link> {menu === "kids" ? <hr /> : <></>}</li>

            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button className='login'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='cart-icon' /></Link>
                <div className="nav-cart-count">0</div>
            </div>


            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#FF4141' fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}></AiOutlineClose>
                        <ul className='app__navbar-smallscreen_links'>
                        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{textDecoration:'none'}}>Shop</Link></li>
                        <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link></li>
                        <li onClick={() => { setMenu('womens') }}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link></li>
                        <li onClick={() => { setMenu('kids') }}><Link to='/kids' style={{textDecoration:'none'}}>kids</Link></li>
                            <li><a href='#login'>Login</a></li>
                           
                        </ul>
                       
                        
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar