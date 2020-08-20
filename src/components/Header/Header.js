import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="header">
      <Link className="logo" to="/">Pintereach</Link>
      <nav className="nav-links">
        <Link className="nav-link" to="/articles">
          Articles
        </Link>
        {localStorage.getItem("token") ? (
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        ) : (
          <Link className="nav-link" to="/signup">
            SignUp
          </Link>
        )}
        {localStorage.getItem("token") ? (
          <Link className="nav-link" to="/" onClick={signOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="nav-link" id="login-btn" to="/signin">
            Sign In
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
