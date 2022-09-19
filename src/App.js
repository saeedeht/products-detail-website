import './App.css'
import { Switch,Route,Redirect } from 'react-router';

//Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';

//Context
import ProductContextProvider from './Context/ProductContextProvider';

function App() {
    return(
        <ProductContextProvider>
            <Switch>
                <Route path='/products/:id' component={ProductDetails} />
                <Route path='/products' component={Store} />
                <Redirect to='/products' />
            </Switch>   
        </ProductContextProvider>
    )
}

export default App;