import React, { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import "./index.css";
import SideDrawer from "../sideDrawer";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../contextAPI/context";
import MenuIcon from "@mui/icons-material/Menu";

/*It's a navbar component which includes all the required things for navbar and it is responsive for all designs.*/
 
const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin, toggleIsLogin } = useContext(AppContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onClickLogout = () => {
    toggleIsLogin();
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" width="150" />
        </div>
        <div className="center-text">Announcements</div>
        {!isLogin ? (
          <Link to="/login">
            {" "}
            <button className="login-button">Login</button>
          </Link>
        ) : (
          <button className="login-button" onClick={onClickLogout}>
            Logout
          </button>
        )}
        <div className="menu-drawer" onClick={toggleDrawer}>
          <MenuIcon />
        </div>
      </div>
      <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default Navbar;
