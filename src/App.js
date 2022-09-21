import './App.css'
import { Switch,Route,Redirect } from 'react-router';

//Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Shared/Navbar';
import shopCart from './Components/shopCart';

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
                    <Route path='/cart' component={shopCart} />
                    <Route path='/products' component={Store} />
                    <Redirect to='/products' />
                </Switch>  
            </CardContextProvider> 
        </ProductContextProvider>
    )
}

export default App;