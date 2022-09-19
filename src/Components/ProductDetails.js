import React from 'react';

const ProductDetails = (props) => {
    
    const id = props.match.params.id;
    
    return (
        <div>
            detail {id}
        </div>
    );
};

export default ProductDetails;