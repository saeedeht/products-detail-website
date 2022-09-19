import React,{useState,useEffect,createContext} from 'react';

//API
import { getProducts } from '../Services/Api';

export const ProductsContext = createContext() ;

const ProductContextProvider = ({children}) => {

    const [products,setProducts] = useState ([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts( await getProducts() );
        }

        fetchAPI();
    },[]);

   


    return (
        <ProductsContext.Provider value={products} >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;