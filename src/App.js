import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "./store/notification";
let isInitial = true
function App() {
  const isCartShown = useSelector((state) => state.cart.isCartShown);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  /**
   * to handle changing cart successfully
   */
  const handleSuccessChangingCart = useCallback(() => {
    dispatch(notificationActions.showNotification({
      title: 'Success',
      message: 'Cart Has Been Updated Successfully',
      status: 'success'
    }))
    setTimeout(() => {
      dispatch(notificationActions.hideNotification())
    }, 5000)
  }, [dispatch]) 

  /**
   * to handle error when changing cart
   */
  const handleErrorChangingCart = useCallback((errorMessage) => {
    dispatch(notificationActions.showNotification({
      title: 'Error!!',
      message: errorMessage,
      status: 'error'
    }))
    setTimeout(() => {
      dispatch(notificationActions.hideNotification())
    }, 5000)
  }, [dispatch])

  /**
   * to show loading when changing cart
   */
  const showLoadingChangingCart = useCallback(() => {
    dispatch(notificationActions.showNotification({
      title: 'Loading!!',
      message: 'Updating Cart Data, Please Wait!',
      status: ''
    }))
  }, [dispatch])
  useEffect(
    () => {
      const updateCart = async() => {
        showLoadingChangingCart()
          const res = await fetch("https://react-redux-a5666-default-rtdb.firebaseio.com/cart.json", {
            method: "PUT",
            body: JSON.stringify(cartItems),
          })
          if (!res.ok) {
            throw new Error(res.error.message || 'something went wrong!!')
          }
          handleSuccessChangingCart()
      }
      if (isInitial) {
        isInitial = false
        return;
      }
      updateCart().catch(error => {
        handleErrorChangingCart(error.message || 'something went wrong!!')
      })
  }, [cartItems, handleSuccessChangingCart, handleErrorChangingCart, showLoadingChangingCart]);


  return (
      <Layout>
          {isCartShown && isAuthenticated && <Cart />}
          <Products />
      </Layout>
  );
}

export default App;
