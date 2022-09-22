import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

//funtctions
import { shorten,isInCart,quantityCount } from '../../Helpers/functions';

//Context 
import { CartContext } from '../../Context/CardContextProvider';

//Icons
import trachIcon from '../../assets/icon/trash.svg'; 

const Product = ({productData}) => {

    const {state,dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={productData.image} alt='product' style={{width:'200px'}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} </p>
            <div>
                <Link to={`/Products/${productData.id}`} > Details  </Link>
                <div>
                    { 
                        quantityCount(state,productData.id) > 1 && 
                        <button onClick={() => dispatch({type:'DECREASE',payload:productData})}>-</button>
                    }
                    { 
                        quantityCount(state,productData.id) === 1 && 
                        <button onClick={() => dispatch({type:'REMOVE_ITEM',payload:productData})}>
                            <img src={trachIcon} alt='trashicon' style={{width:'20px'}} />
                        </button>
                    }
                    {
                        isInCart(state,productData.id) ?
                        <button onClick={() => dispatch({type:'INCREASE',payload:productData})} >+</button> :
                        <button onClick={() => dispatch({type:'ADD_ITEM',payload:productData})} >Add to cart</button> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;