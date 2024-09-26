import { useDispatch, useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {authActions} from '../../store/auth'
import { cartActions } from '../../store/cart';
const MainHeader = (props) => {
  const isAuthenticated =  useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const onLogin = () => {
      dispatch(authActions.login())
  }
  const onLogout = () => {
      dispatch(authActions.logout())
  }
  const toggleCart = () => {
    dispatch(cartActions.toggleCart())
  }
  return (

    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul className={classes['actions-wrapper']} onClick={toggleCart}>
          {isAuthenticated && 
            <li>
              <CartButton />
            </li>
          }
          {isAuthenticated && 
            <li>
            <button className={classes.button} onClick={onLogout}>
              <span>Logout</span>
            </button>
  
            </li>
          }

          {!isAuthenticated &&
            <li>
            <button className={classes.button} onClick={onLogin}>
              <span>Login</span>
            </button>

            </li>
          }


        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
