import { getStoredCart } from "../../utilities/fakedb";

export const ProductsDataLoader = async () => {
    // Loading data and Covert into json ...
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // Get Saved Cart ...
    const savedCart = getStoredCart();
    const cartData = [];

    // Looping the object of products with for in loop ...
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id );
        if (addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;

            cartData.push(addedProduct);
        }
    }
    return {products : products, cartData : cartData};
}