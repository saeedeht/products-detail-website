import React from 'react';

const Product = ({productData}) => {
    return (
        <div>
            <img />
            <h3>{productData.title}</h3>
            <p>{productData.price} </p>
            <div>
                <a>Details</a>
                <div>
                    <button>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;