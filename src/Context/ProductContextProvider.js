import React,{useState,useEffect} from 'react';

//API
import { getProducts } from '../Services/Api';

const ProductContextProvider = () => {

    const [products,setProducts] = useState ([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts( await getProducts() );
        }

        fetchAPI();
    },[]);

   


    return (
        <div>
            
        </div>
    );
};

export default ProductContextProvider;