import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../Context/CardContextProvider';

//Icons 
import shopIcon from '../../assets/icon/shop.svg';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <Link to='/products' >Products</Link>
            <div>
                <Link to='/cart' ><img src={shopIcon} alt='shop' /></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;