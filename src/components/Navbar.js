import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link className="item" to="/">
          HOME
        </Link>
        <Link className="item" to="/contact">
          Contact
        </Link>

        <Link className="item" to="/messages/22">
          Messages
        </Link>

        <Link className="item" to="/articles">
          Articles
        </Link>
        <Link className="item" to="/forum">
          Forum
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
