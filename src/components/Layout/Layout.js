import { Fragment } from 'react';
import MainHeader from './MainHeader';
import Notification from "../../components/UI/Notification";
import { useSelector } from "react-redux";

const Layout = (props) => {

  const notification = useSelector(state => state.notification)
  return (
    <Fragment>
      {notification.isShow && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        ></Notification>
      )}
      <div style={{
          marginTop: notification.isShow ? '3rem': '0' 
        }}>
        <MainHeader />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
