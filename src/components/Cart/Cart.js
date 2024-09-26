import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)
  console.log(cartItems);
  
  const cartTotal = cartItems.reduce((accumulator, current) => {
    return accumulator + current.total
  }, 0)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart (Total ${cartTotal.toFixed(2)})</h2>
      {cartItems.length > 0 ?
      <ul>
        {
          cartItems.map(el => {
            return (
              <li key={el.productId}>
                <CartItem item={el}/>
              </li>
            )
          })
        }

      </ul>

      : 
      <p>No Items in cart</p>
      }

    </Card>
  );
};

export default Cart;
