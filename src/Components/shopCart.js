import React, { useContext } from 'react';

//Components
import Card from './Shared/Card';

//Context
import { CartContext } from '../Context/CardContextProvider';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div>
           <div>
               {state.selectedItems.map(item => <Card key={item.id} data={item} /> )}
           </div>
        </div>
    );
};

export default ShopCart;