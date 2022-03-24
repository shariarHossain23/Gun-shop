import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './header.css';

const Header = ({cart,openmodal}) => {
    return (
        <div className='header'>
           <nav className='nav'>
           <h1>Gun Shop</h1> 
           <div onClick={openmodal}>
               <FaShoppingCart className='icon'>
               </FaShoppingCart>
               <small className='small-icon'>{cart.length}</small>
           </div>
           </nav>
        </div>
    );
};

export default Header;