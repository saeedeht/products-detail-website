import React ,{useContext} from 'react';

//Components
import Product from './Shared/Product';

//Context
import { ProductsContext } from '../Context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div>
            {
                products.map( item => <Product key={item.id} productData={item} />  )
            }    
        </div>
    );
};

export default Store;