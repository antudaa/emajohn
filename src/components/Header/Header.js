import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />

                <div>
                    <a href="/Home">Home</a>
                    <a href="/Order">Order</a>
                    <a href="/OrderReview">Order Review</a>
                    <a href="/ManageInventory">Manege Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;