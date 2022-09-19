import './App.css'
import { Switch,Route,Redirect } from 'react-router';

//Components
import Store from './Components/Store';

//Context
import ProductContextProvider from './Context/ProductContextProvider';

function App() {
    return(
        <ProductContextProvider>
            <Switch>
                <Route path='/products' component={Store} />
                <Redirect to='/products' />
            </Switch>   
        </ProductContextProvider>
    )
}

export default App;