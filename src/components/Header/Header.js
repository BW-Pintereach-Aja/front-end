import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload("/");
  };

  return (
    <div className="header">
      <Link className="logo" to="/">
        Pintereach
      </Link>
      <nav className="nav-links">
        {localStorage.getItem("token") ? (
          <Link className="nav-link" to="/articles">
            Articles
          </Link>
        ) : null}
        {localStorage.getItem("token") ? (
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        ) : (
        <Link className="nav-link"  to="/signin">
           Sign In
        </Link>

        )}
        {localStorage.getItem("token") ? (
          <Link className="nav-link" id="signout-btn" to="/" onClick={signOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="nav-link" id="signup-btn" to="/signup">
            Sign Up
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
