import React from 'react';

const Cart = (cart) => {
    console.log(cart.cart);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.cart.length}</p>
        </div>
    );
};

export default Cart;