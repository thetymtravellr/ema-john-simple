import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart) {
            const product = products.find(product => product.id === id );
            if(product) {
                const quantity = storedCart[id];
                product.quantity = quantity;
                savedCart.push(product);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <section className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        >

                        </Product>)
                }
            </section>
            <section className="cart-container">
                <Cart cart={cart}></Cart>
            </section>
        </div>
    );
};

export default Shop;