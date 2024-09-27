import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      {totalQuantity > 0 && <span className={classes.badge}>{totalQuantity}</span>}
    </button>
  );
};

export default CartButton;
