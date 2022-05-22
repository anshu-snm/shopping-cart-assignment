import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.svg";

function Header() {
  return (
    <div className="flex justify-around shadow-lg">
      {/* left */}
      <div className="m-2">
        <img src={logo} width={150} height={40} className="cursor-pointer" />
      </div>
      {/* middle */}
      <div className="flex items-center space-x-3 p-2">
        <p className="link  font-Dosis">
          <Link to="/">Home</Link>
        </p>
        <p className="link  font-Dosis">
          <Link to="/productlist">Products</Link>
        </p>
      </div>
      {/* right */}
      <div className="flex-col justify-between">
        {/* upper */}
        <div className="space-x-1">
          <p className="link hidden lg:inline-flex font-Dosis">
            <Link to="/login">Sign-In</Link>
          </p>
          <p className="link hidden lg:inline-flex font-Dosis">
            <Link to="/signup">Register</Link>
          </p>
        </div>
        {/* lower */}
        <div className="flex items-center">
          <img
            src={cart}
            objectFit="contain"
            width={40}
            height={40}
            className="cartIcon"
          />

          <p>items</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
