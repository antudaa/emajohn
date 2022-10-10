import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const {products, cartData} = useLoaderData();

    const [cart , setCart] = useState(cartData);

    return (
        <div className='shop-container'>
            <div className='product-container'>

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;