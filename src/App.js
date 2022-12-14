import './App.css'
import { Switch,Route,Redirect } from 'react-router-dom';

//Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Shared/Navbar';
import ShopCart from './Components/ShopCart';

//Context
import ProductContextProvider from './Context/ProductContextProvider';
import CardContextProvider from './Context/CardContextProvider';

function App() {
    return(
        <ProductContextProvider>
            <CardContextProvider>
                <Navbar />
                <Switch>
                    <Route path='/products/:id' component={ProductDetails} />
                    <Route path='/cart' component={ShopCart} />
                    <Route path='/products' component={Store} />
                    <Redirect to='/products' />
                </Switch>  
            </CardContextProvider> 
        </ProductContextProvider>
    )
}


export default App;