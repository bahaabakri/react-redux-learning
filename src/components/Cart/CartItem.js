import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';
const CartItem = (props) => {
  const { productId, title, quantity, total, price } = props.item;
  console.log(props.item);
  const dispatch = useDispatch()
  const onIncrease = () => {
    dispatch(cartActions.addToCart({
      item: {...props.item}
    }))
  }
  const onDecrease = () => {
    dispatch(cartActions.removeFromCart({
      productId 
    }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
