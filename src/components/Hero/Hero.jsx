import React from 'react';
import './Hero.css'
import Heroimg from '../../assets/hero.png';
import {FaShoppingBag } from 'react-icons/fa'
import {BiRightArrowAlt} from 'react-icons/bi'
const Hero = () => {
    return (
       <div className="container">
        {/* left side */}
        <div className="h_sides">
            <span className='text1'>skin protection cream</span>
            <div className="text2">
                <span>Trendy Collection</span>
                <span>
                    {" "}
                    Seedily say has suitable disposal and boy. Exrcise joy man children rejoiced.
                </span>
            </div>

            
            </div>
            {/* middle side */}
            <div className="wrapper">
                 <div className="blueCircle"></div>
                 <img src={Heroimg} alt="" width={600} />
                 <div className="cart2">
                    <FaShoppingBag/>
                    <div className="sigup">
                        <span>Best Sigup Offers</span>
                        <div>
                            <BiRightArrowAlt/>
                        </div>
                    </div>
                 </div>
            </div>

            {/* right side  */} 
            <div className="h_sides">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Monthly trafflic</span>
                </div>
                <div className="customers">
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
            </div>
            
       
    );
}

export default Hero;
