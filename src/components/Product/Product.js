import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product-card'>
            <img src={img} alt="" />
          <div className="product-info">
          <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p className='manufacturer'><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} star</small></p>
          </div>
          <button 
          className='cart-btn'
          onClick={()=>handleAddToCart(product)}
          >
              <p className='btn-text'>Add to Cart</p>
          <FontAwesomeIcon 
          className='icon' 
          icon={faShoppingCart}
          size='lg'
          />
          </button>
        </div>
    );
};

export default Product;