import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const myDemo = () => {
    window.alert("Hi There Am working on it 😁");
  };
  const mySearchDemo = () => {
    window.alert("Hi There Am working on it 😁");
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://149448277.v2.pressablecdn.com/wp-content/uploads/2018/06/Victor-Logo.png"
          alt="victor"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" id="search" type="text" />
        <SearchIcon className="header_searchIcon" onClick={mySearchDemo} />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hi {!user ? "Guest" : user.email}{" "}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option" onClick={myDemo}>
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLineTwo"> & Orders </span>
        </div>
        <div className="header_option" onClick={myDemo}>
          <span className="header_optionLineOne"> Your </span>
          <span className="header_optionLineTwo"> Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header_option header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
