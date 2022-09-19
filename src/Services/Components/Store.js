import React ,{useContext} from 'react';

//Context
import { ProductsContext } from '../../Context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div>
            
        </div>
    );
};

export default Store;