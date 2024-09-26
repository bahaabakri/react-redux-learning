import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
function App() {
  const isCartShown = useSelector(state => state.cart.isCartShown)
  const isAuthenticated =  useSelector(state => state.auth.isAuthenticated)

  return (
    <Layout>
      {isCartShown && isAuthenticated && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
