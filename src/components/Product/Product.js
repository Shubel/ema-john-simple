import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="btn-regular">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;