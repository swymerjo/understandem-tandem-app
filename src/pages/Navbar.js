import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link" title="Homepage">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" title="About page">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" title="Contact Page">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
