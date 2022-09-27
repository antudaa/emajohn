import React from 'react';
import './Cart.css';


// The Props Cart is a Object .
const Cart = ({cart, price, shipping, tax, grandTotal, quantity}) => {
    return (
        <div className='cart'>
            <h1>Cart Items</h1>
            <p>Selected Items : {cart.length}</p>
            <p>Product Quantity : {quantity}</p>
            <p>Total Price : ${price}</p>
            <p>Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;