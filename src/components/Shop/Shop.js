import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    useEffect(()=>{
        console.log(cart);
    })

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