import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <section className="d-flex flex-column align-items-center">
    <h2>404 Page Not Found</h2>
    <Link className="btn btn-info mt-4" to="/">Go To Home</Link>
  </section>
);

export default Error;
