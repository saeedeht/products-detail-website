import './App.css'

//Components
import Store from './Components/Store';

//Context
import ProductContextProvider from './Context/ProductContextProvider';

function App() {
    return(
        <ProductContextProvider>
            <Store />
        </ProductContextProvider>
    )
}

export default App;