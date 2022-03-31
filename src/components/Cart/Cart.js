import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart) {
        quantity += product.quantity;
        totalPrice += (product.price * product.quantity);
        totalShipping += product.shipping;
    }
    const tax = Number((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;