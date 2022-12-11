import React from 'react';
import './header.css'
import Logo from '../../assets/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={Logo} alt=""  />
                <span>TrungHau</span>
            </div>
            <div className="right">
                <div className="menu">
                    <ul className='menu'>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                       
                    </ul>
                </div>
                <input type="text" className='search' placeholder='search'/>

                <AiOutlineShoppingCart className='cart' />
            </div>
        </div>
    );
}

export default Header;
