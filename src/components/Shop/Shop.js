import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const products = useLoaderData();
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // useEffect( () => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // } , []);

    // useEffect To Show if any previous data exists in localStorage.
    useEffect(() => {
        // Getting the cart infos in JSON.parse State.
        const storedCart = getStoredCart();
        const savedCart = [];

        // Finding the Element via id from storedCart Object .
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            // If added Product Exist.
            if(addedProduct){
                // Getting the quantity/value from storedCart . 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

        // Dependency Injection . If you can't depend on product then you will get an empty product list .Cause the Calls are async and independent so useEffect is called before loading the data and if you dependent on products for every single change useEffect will call frequently.
    } , [products]);

    const addToCart = (selectedProduct) =>{
        let newCart = [];
        // Searching is selectedProduct exists in Cart.
        const exist = cart.find(product => product.id === selectedProduct.id);
        // If not Exists.
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            // If Exists. First Filter all the products without selectedProduct.
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            // Increasing Quantity .
            exist.quantity = exist.quantity + 1;
            newCart = [...rest , exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;