import React from 'react';

//funtctions
import { shorten } from '../../Helpers/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product' style={{width:'200px'}} />
            <h3>{shorten(productData.title)}</h3>
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