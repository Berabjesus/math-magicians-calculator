import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, handleClick }) => (
  <button type="button" className="buttons h-100px" onClick={() => handleClick(value)}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
