import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const { name, seller, category, img, price, stock, ratings , shipping} = product;
    
    return (
        <div className='product-cart'>
            <img src={img?img:"Image Not Available."} alt="This Product is Out of Stock ." />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}*</small></p>
            </div>
            <button onClick={() => addToCart(product)} className='cart-btn'>
                <p>Add To Cart...</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;