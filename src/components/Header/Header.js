import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="header">
      <Link to="/">Pintereach</Link>
      <nav className="nav-links">
        <Link to="/articles">Articles</Link>
        {localStorage.getItem("token") ? (
          <Link to="/" onClick={signOut}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
