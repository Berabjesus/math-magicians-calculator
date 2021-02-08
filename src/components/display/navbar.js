import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar border-bottom px-0 d-flex">
    <Link className="h3 text-dark" to="/">Math Magicians</Link>
    <div className="d-flex">
      <Link className="h5" to="/">Home</Link>
      <Link className="h5 px-2 mx-2 border-left border-right" to="/calculator">Calculator</Link>
      <Link className="h5" to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
