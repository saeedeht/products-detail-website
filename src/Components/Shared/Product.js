import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

//funtctions
import { shorten,isInCart } from '../../Helpers/functions';

//Context 
import { cartContext, CartContext } from '../../Context/CardContextProvider';

const Product = ({productData}) => {

    const {state,dispatch} = useContext(cartContext);

    return (
        <div>
            <img src={productData.image} alt='product' style={{width:'200px'}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} </p>
            <div>
                <Link to={`/Products/${productData.id}`} > Details  </Link>
                <div>
                    {
                        isInCart(state,productData.id) ?
                        <button onClick={() => dispatch(dispatch({type:'INCREASE',payload:productData}))} >+</button> :
                        <button onClick={() => dispatch(dispatch({type:'ADD_ITEM',payload:productData}))} >Add to cart</button> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;