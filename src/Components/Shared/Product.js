import React from 'react';
import { Link } from 'react-router-dom';

//funtctions
import { shorten } from '../../Helpers/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product' style={{width:'200px'}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} </p>
            <div>
                <Link to={`/Products/${productData.id}`} > Details  </Link>
                <div>
                    <button>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;