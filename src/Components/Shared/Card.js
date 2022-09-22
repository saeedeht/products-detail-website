import React,{ useContext } from 'react';

//Context
import CartContext from '../../Context/CardContextProvider';

//Functions
import { shorten } from '../../Helpers/functions';

//Icons
import trashIcon from '../../assets/icon/trash.svg';

const Card = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image,title,price,quantity} = props.data;
    
    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type:'DECREASE', payload:props.data})}> - </button> :
                    <button onClick={() => dispatch({type:'REMOVE_ITEM', payload:props.data})}> 
                        <img src={trashIcon} alt='trash' style={{width:'20px'}} />
                    </button> 
                }
                <button onClick={() => dispatch({type:'INCREASE', payload:props.data})}> + </button> 
            </div>
        </div>
    );
};

export default Card;