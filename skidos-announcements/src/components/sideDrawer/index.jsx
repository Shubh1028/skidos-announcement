import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import AppContext from "../../contextAPI/context";

/* This component helps me in creating side drawer for mobile versions so that I can show my action
 buttons in a good way in mobile as well and it is also good for user experience as well.*/

const SideDrawer = ({ isOpen, onClose }) => {
  const { isLogin, toggleIsLogin } = useContext(AppContext);
  const onClickDrawerClose = () => {
    onClose();
  };
  const clickLogout = () => {
    onClose();
    toggleIsLogin();
  };
  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <h3>Announcements</h3>
        <div className="side-drawer-wrapper">
          <div>
            <span>All Posts</span>
          </div>
          <div>
            <span>Announcements</span>
          </div>
          <div>
            <span>Promotions</span>
          </div>
          <Link to={isLogin ? "/submit" : "/login"}>
            {" "}
            <button className="drawer-buttons" onClick={onClickDrawerClose}>
              Submit Announcement
            </button>
          </Link>
          {isLogin ? (
            <Link to="/">
              <button onClick={clickLogout}>Logout</button>
            </Link>
          ) : (
            <Link to="/login">
              <button onClick={onClickDrawerClose}>Login</button>
            </Link>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
