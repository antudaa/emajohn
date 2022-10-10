import React from 'react';
import './Cart.css';


// The Props Cart is a Object .
const Cart = (props) => {
    const { cart } = props;

    // Finding The Infos.
    let totalPrice = 0;
    let shippingPrice = 0;
    let productQuantity = 0;
    for(const product of cart){
        productQuantity = productQuantity + product.quantity;
        totalPrice = totalPrice + (product.price * product.quantity);
        shippingPrice = shippingPrice + product.shipping;
    }
    let tax = (totalPrice * 0.1).toFixed(2);
    let grandTotal = totalPrice + shippingPrice + parseFloat(tax);

    return (
        <div className='cart'>
            <h1>Cart Items</h1>
            <p>Selected Items : {cart.length}</p>
            <p>Product Quantity : {productQuantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping Charge : ${shippingPrice}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;