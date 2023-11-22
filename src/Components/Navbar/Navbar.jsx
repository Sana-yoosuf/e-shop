import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>

            <div className="nav-logo">
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>

            <ul className="nav-menu" >
                <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('womens') }}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link to='/kids' style={{ textDecoration: 'none' }}>kids</Link> {menu === "kids" ? <hr /> : <></>}</li>

            </ul>


            <div className="nav-login-cart">
                <Link to='/login'><button className='login'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='cart-icon' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
           

            {/* responsive menu */}
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu  fontSize={20} onClick={() => setToggleMenu(true)}  className='ham-menu'/>

                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom' style={{background:"#fff"}}>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
                        <ul className='app__navbar-smallscreen_links'>
                        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }} onClick={() => setToggleMenu(false)}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none' }} onClick={() => setToggleMenu(false)}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu('womens') }}><Link to='/womens' style={{ textDecoration: 'none'  }} onClick={() => setToggleMenu(false)}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu('kids') }}><Link to='/kids' style={{ textDecoration: 'none' }} onClick={() => setToggleMenu(false)}>kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* responsive menu */}

        </div>
    )
}

export default Navbar



// {toggleMenu &&(
//     <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
//       <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
//       <ul className='app__navbar-smallscreen_links'>
//         <li className='p__opensans'><a href='#home'>Home</a></li>
//         <li className='p__opensans'><a href='#about'>About Us</a></li>
//         <li className='p__opensans'><a href='#menu'>Menu</a></li>
//         <li className='p__opensans'><a href='#awards'>Awards</a></li>
//         <li className='p__opensans'><a href='#contact'>Contact </a></li>
//       </ul>
//     </div>
//     )}